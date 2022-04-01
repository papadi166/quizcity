from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserView, logout_view, accept_friend_request, send_friend_request, UsersViewSet, FriendRequestViewSet

router = DefaultRouter()
router.register('users', UsersViewSet)
router.register('friend_requests', FriendRequestViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path("user/", UserView.as_view(), name="user"),
    path("logout/", logout_view, name="logout"),
    path("send_friend_request/<int:user_id>/",
        send_friend_request, name="send friend request"),
    path("accept_friend_request/<int:request_id>/",
        accept_friend_request, name="accept friend request"),
    
]

