from django.urls import path
from .consumers import QuizRoomConsumer

ws_urlpatterns = [
    path('ws/playrooms/', QuizRoomConsumer.as_asgi())
]