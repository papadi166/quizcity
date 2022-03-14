from django.db import models
from django.contrib.auth.models import AbstractUser
from quizes.models import Quiz
from django.conf import settings
import uuid

from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token


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


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
        if created:
                Token.objects.create(user=instance)
    
