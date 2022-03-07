from django.contrib import admin
from .models import UserModel, FavouriteQuiz
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.forms import UserCreationForm

# Register your models here.
class UserCreateForm(UserCreationForm):

    class Meta:
        model = UserModel
        fields = ('username', 'first_name' , 'last_name', )


class UserAdmin(UserAdmin):
    add_form = UserCreateForm
    prepopulated_fields = {'username': ('first_name' , 'last_name', )}

    add_fieldsets = (
        (None, {
            'fields': ('first_name', 'last_name', 'username', 'password1', 'password2', ),
        }),
    )


# Re-register UserAdmin


admin.site.register(UserModel, UserAdmin)
admin.site.register(FavouriteQuiz)