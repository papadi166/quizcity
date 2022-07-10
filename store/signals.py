from re import I
from django.db.models.signals import pre_save, pre_delete, post_save
from .models import Product
from .serializers import QuizTakerSerializer
#from django.dispatch import receiver
#from django.utils.text import slugify
import json
#from asgiref.sync import async_to_sync
#import string
#import random

@receiver(pre_save, sender = Product)
def add_slug(sender, instance, *args, **kwargs):
    if instance and not instance.slug:
        slug = slugify(instance.title)
        instance.slug = slug
        
        
@receiver(pre_delete, sender=Product)
def quiz_delete(sender, instance, **kwargs):
    # Pass false so FileField doesn't save the model.
    instance.image.delete(False)