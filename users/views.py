from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer
from django.contrib.auth import logout, login
from django.shortcuts import redirect

class Home(TemplateView):
    template_name = "home.html"

class UserView(APIView):

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
    
    def post(self, request):

        login(request, user)

        next_url = cache.get('next')
        if next_url:
            cache.delete('next')
            return HttpResponseRedirect(next_url)


def logout_view(request):
        logout(request)
        return redirect('/accounts/login')

    