from rest_framework import serializers
from .models import UserModel, Profile, FriendRequest
from quizes.serializers import MyQuizListSerializer


class ProfileSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Profile
        fields = "__all__"

        
class FriendRequestSerializer(serializers.ModelSerializer):
    from_user_id = serializers.SerializerMethodField()
    from_user = serializers.StringRelatedField()
    to_user = serializers.StringRelatedField()
    class Meta:
        model= FriendRequest
        fields = "__all__"
    
    def get_from_user_id(self, obj):
        return obj.from_user.id

class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer()
    games = MyQuizListSerializer(many=True)
    friends = serializers.StringRelatedField(many=True)
    friend_request_to = FriendRequestSerializer(many=True)
    friend_request_from = FriendRequestSerializer(many=True)
    class Meta:
        model= UserModel
        fields = ('id', 'profile', 'friends', 'friend_request_to', 'friend_request_from', 'last_login', 'is_superuser', 'username', 'first_name', 'last_name', 'email', 'is_staff', 'is_active', 'date_joined', 'avatar', 'groups', 'user_permissions','games',)
