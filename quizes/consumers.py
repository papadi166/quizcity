import json
from random import randint
from time import sleep

from channels.generic.websocket import WebsocketConsumer

 # ------------------------------ #
 
class QuizRoomConsumer(WebsocketConsumer):

    def connect(self):
        self.player_one = "Anonymous"
        self.accept()
        self.send(text_data="[Welcome %s!]" % self.player_one) #to change

    #def receive(self, *, text_data):
    #    if (self.player)
            
    def opponent_message(self, message):
        self.send({
            "type": "game.message",
            "text": "opponent playername is" % self.player_one,
        })

    def disconnect(self, message):
        pass
    
    