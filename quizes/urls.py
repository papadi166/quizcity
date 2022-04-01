from django.urls import path, include, re_path
from rest_framework.routers import DefaultRouter
from .views import QuizViewSet, QuizDetailViewSet, CategoryViewSet, MyQuizList

router = DefaultRouter()
router.register('quizes', QuizViewSet)
router.register('details', QuizDetailViewSet )
router.register('categories', CategoryViewSet )
router.register('myquizes', MyQuizList)

urlpatterns = [
    path("", include(router.urls)),
    
]

