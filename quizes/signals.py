from re import I
from django.db.models.signals import pre_save, pre_delete, post_save
from .models import Quiz, Question
from django.dispatch import receiver
from django.utils.text import slugify

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