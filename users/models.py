from django.db import models
from django.contrib.auth.models import AbstractUser
from quizes.models import Quiz
from django.conf import settings
import uuid

# Create your models here.

class UserModel(AbstractUser):
        pass

        def get_favourites():
                return self.favouriteQuiz_set.all()


class FavouriteQuiz(models.Model):
        quiz =  models.ForeignKey(Quiz, on_delete=models.CASCADE, null=True, blank=True)
        user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True, blank=True)

        class Meta:
                verbose_name = "Favourite quizes"