from django.urls import path, include, re_path
from rest_framework.routers import DefaultRouter
from .views import QuizViewSet, QuizDetailViewSet, CategoryViewSet, MyQuizTaker, QuizTakerViewSet, MyQuizTaker_all, MyQuizTaker_won, LeaderBoardViewSet, LeaderBoardGameViewSet

router = DefaultRouter()
router.register('quizes', QuizViewSet)
router.register('details', QuizDetailViewSet )
router.register('categories', CategoryViewSet )
router.register('mygames', MyQuizTaker, basename='mygames')
router.register('mygames_all', MyQuizTaker_all, basename='mygames_all')
router.register('mygames_won', MyQuizTaker_won, basename='mygames_won')
router.register('quiztaker', QuizTakerViewSet)
router.register('leaderboard', LeaderBoardViewSet, basename='leaderboard')
router.register('leaderboardgame/<quiz:quiz>/', LeaderBoardGameViewSet, basename='leaderboard_game')


urlpatterns = [
    path("", include(router.urls)),
    
]




