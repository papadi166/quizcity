from django.contrib import admin
from .models import UserModel, FavouriteQuiz, Profile, FriendRequest
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.forms import UserCreationForm

# Register your models here.
class UserCreateForm(UserCreationForm):

    class Meta:
        model = UserModel
        fields = ('username', 'first_name' , 'last_name',)


class UserAdmin(UserAdmin):
    model = UserModel
    
    add_form = UserCreateForm
    prepopulated_fields = {'username': ('first_name' , 'last_name', )}

    add_fieldsets = (
        (None, {
            'fields': ( 'first_name', 'last_name', 'username', 'password1', 'password2', 'avatar',),
        }),
    )
    
class MyUserAdmin(UserAdmin):
    model = UserModel
    
    fieldsets = UserAdmin.fieldsets + (
        (None, {
            'fields': ('avatar',)}),
    )



# Re-register UserAdmin


admin.site.register(UserModel, MyUserAdmin)
admin.site.register(FavouriteQuiz)
admin.site.register(Profile)
admin.site.register(FriendRequest)