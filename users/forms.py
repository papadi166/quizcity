from django_registration.forms import RegistrationForm
from .models import UserModel
from django.contrib.auth.forms import UserCreationForm

class UserForm(RegistrationForm):
    class Meta(RegistrationForm.Meta):
        model = UserModel

