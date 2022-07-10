from django.urls import path
from .consumers import QuizRoomConsumer, NotificationConsumer

ws_urlpatterns = [
    path('ws/game/<room_code>', QuizRoomConsumer.as_asgi()),
    path('ws/notification/', NotificationConsumer.as_asgi())
]