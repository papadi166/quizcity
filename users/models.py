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
        
        friends = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name="users_profile_friends", blank=True)
        avatar = models.ImageField(upload_to='avatars/', blank=True)

        def get_favourites():
                return self.favouriteQuiz_set.all()
        
        def friend_request_from(self):
            return self.from_user.all()
        
        def friend_request_to(self):
            return self.to_user.all()
    
        def get_games(self):
            return self.games_set.all()
    
       
    
class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True, blank=True)
    Ranks = models.TextField(max_length=500, blank=True)
    location = models.CharField(max_length=30, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    


class FriendRequest(models.Model):
        from_user = models.ForeignKey(
                settings.AUTH_USER_MODEL  , related_name="from_user", on_delete=models.CASCADE)
        to_user = models.ForeignKey(
                settings.AUTH_USER_MODEL , related_name="to_user", on_delete=models.CASCADE)


class FavouriteQuiz(models.Model):
        quiz =  models.ForeignKey(Quiz, on_delete=models.CASCADE, null=True, blank=True)
        user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True, blank=True)

        class Meta:
                verbose_name = "Favourite quizes"


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
        if created:
                Token.objects.create(user=instance)
    
@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_user_profile(sender, instance, created, **kwargs):
        if created:
                Profile.objects.create(user=instance)
                
@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
        
