
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic.base import TemplateView

from django.shortcuts import render

class Index( TemplateView):
    def get_template_names(self):
        template_name = "home.html"
        return template_name

def home_view(request):
    # dictionary for initial data with
    # field names as keys
    context ={}
 
    # add the dictionary during initialization
         
    return render(request, "home.html", context)