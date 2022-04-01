from cgitb import lookup
from django.shortcuts import render
from rest_framework import viewsets
from .models import Answer, Category, Question, Quiz, QuizTaker, UsersAnswer
from .serializers import CategorySerializer, MyQuizListSerializer, QuizDetailSerializer, QuizListSerializer, QuizResultSerializer, UsersAnswerSerializer
from rest_framework.permissions import IsAuthenticated
from .permissions import IsAuthor
from quizes import serializers
from django.http import JsonResponse
from django.contrib import messages

# Create your views here.
class QuizTakerViewSet(viewsets.ViewSet):
    #permission_classes = {IsAuthenticated}
    queryset = Quiz.objects.all()
    serializer_class = QuizTaker

class MyQuizList(viewsets.ModelViewSet):
    #permission_classes = [IsAuthenticated]
    queryset = Quiz.objects.all()
    serializer_class = MyQuizListSerializer


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

    






