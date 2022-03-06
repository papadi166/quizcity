from django.contrib import admin
from django.urls import path
from .views import UserView, logout_view


urlpatterns = [
    path("user/", UserView.as_view(), name="user"),
    path("logout/", logout_view, name="logout"),
]

