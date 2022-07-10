
from dataclasses import fields
from .models import Category, Quiz, QuizTaker, Question, Answer, UsersAnswer, LeaderBoard
from users.models import UserModel
from rest_framework import serializers
import random
from users.serializers import MiniUserSerializer
from django.db.models import Q


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class AnswerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Answer
        fields = "__all__"


class QuestionRandomSerializer(serializers.ModelSerializer):
    answer_set = AnswerSerializer(many=True)

    class Meta:
        model = Question
        fields = "__all__"


class QuestionSerializer(serializers.ModelSerializer):
    answer_set = AnswerSerializer(many=True)

    class Meta:
        model = Question
        fields = "__all__"

class MiniQuizSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Quiz
        fields = ("title", "id",)
        
        
class QuizListSerializer(serializers.ModelSerializer):
    questions_count = serializers.SerializerMethodField()
    category = serializers.StringRelatedField()
    author = serializers.StringRelatedField()
    image = serializers.SerializerMethodField()
    random_questions = serializers.SerializerMethodField(
        'get_random_questions')

    class Meta:
        model = Quiz
        fields = "__all__"
        read_only_fields = ["questions_count", "required_score_to_pass"]

    def get_questions_count(self, obj):
        return obj.question_set.all().count()

    def get_image(self, obj):
        url = str(obj.image.url)
        return "https://www.quizcity.net" + url

    def get_random_questions(self, obj):
        questions = obj.get_random_question(5)
        question_set = []
  
        for question in questions:
            q = {}
            if not (isinstance(question, str)):
                q = {
                    "text": question.text,
                    "answers": question.answer_set.all().values()
                }
                question_set.append(q)
            
            else:
                q = {
                    "text": "there is not enought questions"
                }
                question_set.append(q)
                break
            
        return question_set


class UsersAnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsersAnswer
        fields = "__all__"


class MyQuizTakerSerializer(serializers.ModelSerializer):
    game_creator = MiniUserSerializer()
    game_opponent = MiniUserSerializer()
    quiz = MiniQuizSerializer()
    winner = MiniUserSerializer()

    class Meta:
        model = QuizTaker
        fields = "__all__"

class MyQuizTakerWonSerializer(serializers.ModelSerializer):
    won_games = serializers.SerializerMethodField()

    def get_won_games(self, obj):
    
        won = QuizTaker.objects.filter((Q(game_creator=self.context['request'].user) | Q(game_opponent=self.context['request'].user)) & Q(winner=self.context['request'].user ) & Q(quiz_id=obj ))
        overall = 0
        for game in won:
            if(game.winner == self.context['request'].user):
                overall += 1
        return overall

        
    class Meta:
        model = Quiz
        fields = ("id","won_games", "title",)

class QuizTakerSerializer(serializers.ModelSerializer):
    #usersanswer_set = UsersAnswerSerializer(many=True)
    game_creator = serializers.SerializerMethodField()
    game_opponent = serializers.SerializerMethodField()
    quiz_data = serializers.SerializerMethodField()
    winner = MiniUserSerializer(required=False)

    class Meta:
        model = QuizTaker
        fields = "__all__"
        
    
    def get_quiz_data(self, quiz_taker):
        quiz = MiniQuizSerializer(quiz_taker.quiz).data
        return quiz
        
    def get_game_creator(self, quiz_taker):
        username = MiniUserSerializer(quiz_taker.game_creator).data
        return username
    
    def get_game_opponent(self, quiz_taker):
        username = MiniUserSerializer(quiz_taker.game_opponent).data

        return username
    
    
    def create(self, validated_data):
        validated_data['game_creator'] = self.context['request'].user
        game_opponent = ""
        validated_data['game_opponent'] = UserModel.objects.get(username = self.context['request'].data['game_opponent']['username'])
        #validated_data['quiz'] = Quiz.objects.get(username = self.context['request'].data['quiz']['title'])
        return super(QuizTakerSerializer, self).create(validated_data)


class QuizDetailSerializer(serializers.ModelSerializer):
    # quiztakers_set = serializers.SerializerMethodField()
    question_set = QuestionSerializer(many=True)
    category = serializers.StringRelatedField()
    author = serializers.StringRelatedField()
    read_only_fields = ["questions_count", "required_score_to_pass"]
    image = serializers.SerializerMethodField()
    random_questions = serializers.SerializerMethodField(
        'get_random_questions')

    class Meta:
        model = Quiz
        fields = "__all__"

    def get_image(self, obj):
        url = str(obj.image.url)
        return "https://www.quizcity.net" + url

    def get_quiztakers_set(self, obj):
        try:
            quiz_taker = QuizTaker.objects.get(
                user=self.context['request'].game_creator, quiz=obj)
            serializer = QuizTakerSerializer(quiz_taker)
            return serializer.data
        except QuizTaker.DoesNotExist:
            return None
        
    def get_random_questions(self, obj):
        questions = obj.get_random_question(5)
        question_set = []
  
        for question in questions:
            q = {}
            if not (isinstance(question, str)):
                q = {
                    "text": question.text,
                    "answer_set": question.answer_set.all().values()
                }
                question_set.append(q)
            
            else:
                q = {
                    "text": "there is not enought questions"
                }
                question_set.append(q)
                continue
            
        return question_set


class QuizResultSerializer(serializers.ModelSerializer):
    quiztaker_set = serializers.SerializerMethodField()
    question_set = QuestionSerializer(many=True)

    class Meta:
        model = Quiz
        fields = "__all__"

    def get_quiztaker_set(self, obj):
        try:
            quiztaker = QuizTaker.objects.get(
                user=self.context['request'].user, quiz=obj)
            serializer = QuizTakerSerializer(quiztaker)
            return serializer.data

        except QuizTaker.DoesNotExist:
            return None

class LeaderBoardSerializer(serializers.ModelSerializer):
    user = MiniUserSerializer()
    score = serializers.SerializerMethodField()
    quiz = MiniQuizSerializer()
    
    def get_score(self, obj):
        games = QuizTaker.objects.filter((Q(game_creator=self.context['request'].user) | Q(game_opponent=self.context['request'].user)) & Q(quiz=obj.quiz))
        score = 0
        player_type = ""
        for game in games:
            if(game.game_opponent == self.context['request'].user ):
                player_type = "game_opponent_score"
                score += game.game_opponent_score
            else:
                player_type = "game_creator_score"
                score += game.game_creator_score
            obj.score = score
            obj.save()
                
        return score

    
    
    class Meta:
        model = LeaderBoard
        fields = "__all__"