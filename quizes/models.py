from django.db import models
from django.conf import settings
from PIL import Image
import re
from django.utils.translation import gettext_lazy as _
from random import sample, choice
from django.db.models import Q


# Create your models here.


class CategoryManager(models.Manager):

    def new_category(self, category):
        new_category = self.create(category=re.sub('\s+', '-', category)
                                   .lower())

        new_category.save()
        return new_category


class Category(models.Model):

    category = models.CharField(
        verbose_name=_("Category"),
        max_length=250, blank=True,
        unique=True, null=True)

    objects = CategoryManager()

    class Meta:
        verbose_name = _("Category")
        verbose_name_plural = _("Categories")

    def __str__(self):
        return self.category


DIFF_CHOICES = (
    ('easy', 'easy'),
    ('medium', 'medium'),
    ('hard', 'hard')
)


class Quiz(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=300)
    description = models.TextField()
    slug = models.SlugField(max_length=250, unique=True, null=True, blank=True)
    roll_out = models.BooleanField(default=False)
    author = models.ForeignKey(settings.AUTH_USER_MODEL,
                               on_delete=models.CASCADE, blank=True, null=True)
    image = models.ImageField(upload_to='quizimages/', null=True, blank=True)
    icon = models.ImageField(upload_to='quizimages/', null=True, blank=True)
    time = models.FloatField(
        help_text="duration of the quiz in minutes", default="0")
    category = models.ForeignKey(
        Category, null=True, blank=True,
        verbose_name=_("Category"), on_delete=models.CASCADE)
    required_score_to_pass = models.IntegerField(
        help_text="required score in %")
    difficulty = models.CharField(
        max_length=6, choices=DIFF_CHOICES, default='medium')
    number_of_questions = models.IntegerField()
    required_score_to_pass = models.IntegerField(null=True, blank=True)

    class Meta:
        ordering = ['-created_at', ]
        verbose_name_plural = "Quizes"

    def __str__(self):
        return self.title

    def get_questions(self):
        return self.question_set.all()[:self.number_of_questions]

    def get_random_question(self, number):
        try:
            questions = list(self.question_set.all())
            random_questions = sample(questions, number)
            return random_questions
        except:
            return "there is not enought questions"
    
    


class Question(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    text = models.CharField(max_length=100)
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.text

    def get_answers(self):
        return self.answer_set.all()


class Answer(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    text = models.CharField(max_length=100)
    is_correct = models.BooleanField(default=False)

    def __str__(self):
        return f"Question: {self.question.text}, answer: {self.text}, correct: {self.is_correct}"


class QuizTaker(models.Model):
    connected_users = models.IntegerField(default=0)
    room_code = models.CharField(max_length=100, unique=True, blank=True, null=True)
    game_creator = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="creator")
    game_opponent = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True, null=True, related_name="opponent",)
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    game_creator_score = models.IntegerField(default=0)
    game_opponent_score = models.IntegerField(default=0)
    is_over = models.BooleanField(default=False)
    date_finished = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    winner = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="winner",blank=True, null=True,)

    def __str__(self):
        return self.game_creator.username + " " + self.room_code  # TODO: Add opponent email also

    @staticmethod
    def get_available_games():
        return QuizTaker.objects.filter(game_opponent=None, is_over=None)

    @staticmethod
    def get_games_for_player(user):
        from django.db.models import Q
        return QuizTaker.objects.filter(Q(game_opponent=user) | Q(game_creator=user))

    @staticmethod
    def created_count(user):
        return QuizTaker.objects.filter(game_creator=user).count()

    @staticmethod
    def get_by_id(id):
        try:
            return QuizTaker.objects.get(pk=id)
        except QuizTaker.DoesNotExist:
            # TODO: Handle this Exception
            pass

    @staticmethod
    def create_new(user, quizname):
        """
        Create a new game and game squares
        :param user: the user that created the game
        :return: a new game object
        """
        # make the game's name from the username and the number of
        # games they've created
        new_game = QuizTaker(game_creator=user, quiz=quizname)
        new_game.save()

        # put first log into the GameLog

        return new_game

    def send_game_update(self):
        """
        Send the updated game information and squares to the game's channel group
        """
        # imported here to avoid circular import
        from .serializers import QuizTakerSerializer, QuizSerializer

        game_serilizer = QuizSerializer(self)

        message = {'game': game_serilizer.data,
                   'log': log_serializer.data,
                   'squares': square_serializer.data}

        game_group = 'game-{0}'.format(self.id)
        Group(game_group).send({'text': json.dumps(message)})
        
    def mark_complete(self, winner):
        """
        Sets a game to completed status and records the winner
        """
        self.winner = winner
        self.date_finished = datetime.now()
        self.save()


class UsersAnswer(models.Model):
    quiz_taker = models.ForeignKey(QuizTaker, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    answer = models.ForeignKey(Answer, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.question.text
    
class LeaderBoard(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="user")
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    score = models.IntegerField(default=0, blank=True, null=True)
    
    def __int__(self):
        self.user
    
    class Meta:
        ordering = ['-score', ]