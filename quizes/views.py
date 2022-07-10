from cgitb import lookup
from django.shortcuts import render
from rest_framework import viewsets
from .models import Answer, Category, Question, Quiz, QuizTaker, UsersAnswer, LeaderBoard
from .serializers import CategorySerializer, MyQuizTakerSerializer, MyQuizTakerWonSerializer, QuizDetailSerializer, QuizListSerializer, QuizResultSerializer, UsersAnswerSerializer, QuizTakerSerializer, LeaderBoardSerializer
from rest_framework.permissions import IsAuthenticated
from .permissions import IsAuthor
from quizes import serializers
from django.http import JsonResponse
from django.contrib import messages
from django.db.models import Q
import datetime
from django.utils import timezone


# Create your views here.
class QuizTakerViewSet(viewsets.ModelViewSet):
    #permission_classes = {IsAuthenticated}
    
    queryset = QuizTaker.objects.all()
    serializer_class = QuizTakerSerializer
    lookup_field = "room_code"
    
    def update(self, request, *args, **kwargs):
        kwargs['partial'] = True
        return super().update(request, *args, **kwargs)


class MyQuizTaker(viewsets.ModelViewSet):
    #permission_classes = [IsAuthenticated]
    # getting user games which are maximum 15 minutes old
    def get_queryset(self):
        now = datetime.datetime.now()
        time_threshold = datetime.datetime.now(timezone.utc) - datetime.timedelta(minutes=15)
        return QuizTaker.objects.filter((Q(game_creator=self.request.user) | Q(game_opponent=self.request.user)) & Q(created_at__gt=time_threshold ))
    serializer_class = MyQuizTakerSerializer
    lookup_field = "room_code"
    
class MyQuizTaker_all(viewsets.ModelViewSet):
    #permission_classes = [IsAuthenticated]
    # getting user games which are maximum 15 minutes old
    def get_queryset(self):
        now = datetime.datetime.now()
        time_threshold = datetime.datetime.now(timezone.utc) - datetime.timedelta(minutes=15)
        return QuizTaker.objects.filter((Q(game_creator=self.request.user) | Q(game_opponent=self.request.user)))
    serializer_class = MyQuizTakerSerializer
    lookup_field = "room_code"
    
class MyQuizTaker_won(viewsets.ModelViewSet):
    #permission_classes = [IsAuthenticated]
    # getting user games which are maximum 15 minutes old
    queryset = Quiz.objects.all().order_by('-created_at')        
    serializer_class = MyQuizTakerWonSerializer
    lookup_field = "slug"
    


class QuizViewSet(viewsets.ModelViewSet):
    queryset = Quiz.objects.all().order_by('-created_at')
    serializer_class = QuizListSerializer
    lookup_field = "slug"
    #permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(author = self.request.user)

def quiz_data_view(request, pk):
    quiz = Quiz.objects.get(pk=pk)
    questions = []
    for q in quiz.get_questions():
        answers = []
        for a in q.get_answers():
            answers.append(a.text)
        questions.append({str(q): answers})
    return JsonResponse({
        'data': questions,
        'time': quiz.time,
    })

class QuizDetailViewSet(viewsets.ModelViewSet):
    queryset = Quiz.objects.all().order_by('-created_at')
    lookup_field = "slug"
    serializer_class = QuizDetailSerializer
    #permission_classes = [IsAuthenticated]


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    

class LeaderBoardViewSet(viewsets.ModelViewSet):
    #permission_classes = [IsAuthenticated]
    # getting user games which are maximum 15 minutes old
    queryset = LeaderBoard.objects.all().order_by('-score')
    serializer_class = LeaderBoardSerializer
    
class LeaderBoardGameViewSet(viewsets.ModelViewSet):
    def get_queryset(self):

        return LeaderBoard.objects.filter(Q(quiz=self.request.quiz) )
    serializer_class = LeaderBoardSerializer
    lookup_field = "game"




