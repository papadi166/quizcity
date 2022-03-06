from django.contrib import admin
from .models import UserModel, FavouriteQuiz
# Register your models here.

admin.site.register(UserModel)
admin.site.register(FavouriteQuiz)