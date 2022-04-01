from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer, ProfileSerializer, FriendRequestSerializer
from .models import UserModel, Profile, FriendRequest
from django.contrib.auth import logout, login
from django.shortcuts import redirect
from rest_framework import viewsets
from django.http import HttpResponse

class Home(TemplateView):
    template_name = "home.html"

class UserView(APIView):
    serializer = UserSerializer

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
    
    def post(self, request):

        login(request, user)

        next_url = cache.get('next')
        if next_url:
            cache.delete('next')
            return HttpResponseRedirect(next_url)
        
    def update_profile(request, user_id):
        user = UserModel.objects.get(pk=user_id)
        user.profile.bio = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...'
        user.save()

class UsersViewSet(viewsets.ModelViewSet):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer
    
class FriendRequestViewSet(viewsets.ModelViewSet):
    queryset = FriendRequest.objects.all()
    serializer_class = FriendRequestSerializer
        
#@login_required
def send_friend_request(request, user_id):
    from_user = request.user
    to_user = UserModel.objects.get(id=user_id)
    
    user_friends = []
    for e in UserModel.objects.filter(username=from_user.username).values_list('friends', flat=True):
        user_friends.append(e)
        
    if((from_user != to_user) & (to_user.id not in user_friends)):
        friend_request, created = FriendRequest.objects.get_or_create(
            from_user=from_user, to_user=to_user)
    
    elif (to_user.id in user_friends):
        return HttpResponse('You already have that friend')
    
    else:
        return HttpResponse('Hey! You cant invite yourself')
    
    if created: 
        return HttpResponse('Friend request sending')
    else:
        return HttpResponse("friend request was already sent")
    
        
#@login_required
def accept_friend_request(request, request_id):
    friend_request = FriendRequest.objects.get(id=request_id)
    if friend_request.to_user == request.user:
        friend_request.to_user.friends.add(friend_request.from_user)
        friend_request.from_user.friends.add(friend_request.to_user)
        friend_request.delete()
        return HttpResponse('friend request accepted')
    else:
        return HttpResponse('friend request rejected')
            
        


def logout_view(request):
        logout(request)
        return redirect('/accounts/login')

    
