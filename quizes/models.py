from django.db import models
from django.conf import settings
from PIL import Image 
import re
from django.utils.translation import gettext_lazy as _

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
                                on_delete=models.CASCADE)
    image = models.ImageField(upload_to='quizimages/', null=True, blank=True)
    time = models.IntegerField(help_text="duration of the quiz in minutes")
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
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    score = models.IntegerField(default=0)
    completed = models.BooleanField(default=False)
    date_finished = models.DateTimeField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.email


class UsersAnswer(models.Model):
    quiz_taker = models.ForeignKey(QuizTaker, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    answer = models.ForeignKey(Answer, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.question.text