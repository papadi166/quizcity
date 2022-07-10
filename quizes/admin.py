from dataclasses import field
from django.contrib import admin
from .models import Question, Quiz, Category, Answer, UsersAnswer, QuizTaker, LeaderBoard
from django.db import models
from django.forms import TextInput, Textarea
from django.contrib.admin.widgets import FilteredSelectMultiple
from django import forms
from django.utils.translation import gettext_lazy as _
# Register your models here.
#admin.site.register(Quiz)

class AnswerInline(admin.TabularInline):
    model = Answer
    extra = 1


class QuestionInline(admin.TabularInline):
    model = Question
    extra = 1
    formfield_overrides = {
        models.CharField: {'widget': TextInput(attrs={'size':'20'})},
        models.TextField: {'widget': Textarea(attrs={'rows':4, 'cols':10})},
    }
    
    inlines = [AnswerInline,]

#  ADMINS #

class QuestionAdmin(admin.ModelAdmin):
    model = Question
    inlines = [AnswerInline,]

    
class QuizAdmin(admin.ModelAdmin):
    model = Quiz

    list_display = ('title', 'category' )
    list_filter = ('category',)
    search_fields = ('description', 'category', )
    inlines = [QuestionInline,]
    readonly_fields=('time', 'required_score_to_pass', 'number_of_questions')

    

class CategoryAdmin(admin.ModelAdmin):
    search_fields = ('category', )

class UsersAnswerInline(admin.TabularInline):
	model = UsersAnswer

    
class QuizTakerAdmin(admin.ModelAdmin):
	inlines = [UsersAnswerInline,]



admin.site.register(Question, QuestionAdmin)
admin.site.register(Quiz, QuizAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Answer)
admin.site.register(QuizTaker, QuizTakerAdmin)
admin.site.register(UsersAnswer)
admin.site.register(LeaderBoard)