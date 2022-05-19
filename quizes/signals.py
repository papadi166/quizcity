from re import I
from django.db.models.signals import pre_save, pre_delete, post_save
from .models import Quiz, Question, QuizTaker
from .serializers import QuizTakerSerializer
from django.dispatch import receiver
from django.utils.text import slugify
import json
from asgiref.sync import async_to_sync
import string
import random

@receiver(pre_save, sender = Quiz)
def add_slug(sender, instance, *args, **kwargs):
    if instance and not instance.slug:
        slug = slugify(instance.title)
        instance.slug = slug



@receiver(pre_save, sender = Quiz)
def get_number_of_question(sender, instance, **kwargs):
    
    number = 0
    for question in Question.objects.all():
        if (question.quiz == instance):
            number += 1

    instance.number_of_questions = number

@receiver(pre_save, sender = Quiz)
def add_time(sender, instance, *args, **kwargs):
    if (instance.difficulty=="easy"):
        instance.time = instance.number_of_questions * 1
    elif (instance.difficulty=="medium"):
        instance.time = instance.number_of_questions * 0.5
    elif (instance.difficulty=="hard"):
        instance.time = instance.number_of_questions * 0.3

@receiver(pre_save, sender = Quiz)
def set_points_to_pass(sender, instance, **kwargs):
    instance.required_score_to_pass = instance.number_of_questions * 10

@receiver(pre_delete, sender=Quiz)
def quiz_delete(sender, instance, **kwargs):
    # Pass false so FileField doesn't save the model.
    instance.image.delete(False)
    
# QUIZ TAKER #
    
@receiver(post_save, sender=QuizTaker)
def new_game_handler(**kwargs):
    """
    When a new game is created, this builds a list of all open games and 
    sends it down to all channels in the 'lobby' group
    """
    # if new
    if kwargs['created']:
        # send the latest list to all channels in the "lobby" group
        # the Group's send method requires a dict
        # we pass "text" as the key and then serialize the list of open games
        avail_game_list = QuizTaker.get_available_games()
        avail_serializer = QuizTakerSerializer(avail_game_list, many=True)
        #Group('lobby').send({'text': json.dumps(avail_serializer.data)})
        
@receiver(pre_save, sender = QuizTaker)
def generate_room_code(sender, instance, *args, **kwargs):
    if instance and not instance.room_code:
        letters = string.ascii_lowercase
        room_code = ''.join(random.choice(letters) for i in range(15))
        
        
        instance.room_code = room_code
        
@receiver(pre_save, sender = QuizTaker)
def find_opponent(sender, instance, *args, **kwargs):
    if instance and not instance.room_code:
        letters = string.ascii_lowercase
        room_code = ''.join(random.choice(letters) for i in range(15))
        
        is_code_available = false
        while (is_code_available == false):
            try:
                instance.room_code = room_code
                is_code_available = true
            except:
                continue
            
