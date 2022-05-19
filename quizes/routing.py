from django.urls import path
from .consumers import QuizRoomConsumer

ws_urlpatterns = [
    path('ws/game/<room_code>', QuizRoomConsumer.as_asgi())
]