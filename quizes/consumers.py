import json
from random import randint
from time import sleep

from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync
from .models import QuizTaker

 # ------------------------------ #
 
class QuizRoomConsumer(WebsocketConsumer):

    def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_code']
        self.room = QuizTaker.objects.get(room_code=self.room_name)
        self.room_group_name = 'room_%s' % self.room_name
        self.actualLevel = 0
        self.players = {
            "game_creator": {
                'levels': {
                    '1': 'false',
                    '2': 'false',
                    '3': 'false',
                    '4': 'false',
                    '5': 'false',
                    },
                'username': 'default',
                
            },
            "game_opponent": {
                'levels': {
                    '1': 'false',
                    '2': 'false',
                    '3': 'false',
                    '4': 'false',
                    '5': 'false',
                    },
                'username': 'default',
            }
            
        }
        

        if self.room.connected_users >= 2:
            return self.close()

        else:  
            self.players['game_creator']['username'] = self.scope["user"]
            print(self.scope["user"])
            self.room.connected_users = self.room.connected_users + 1
            self.room.save(update_fields=['connected_users'])
            print(self.room.connected_users)
            
            #if(self.room.connected_users < 1):
            ##    self.players.player_one.name = player
           # else:
            #    self.players.player_two.name = player
            #    
            #for player in players:
            #    print(player.name)
            
            #TODO: 
            # 1. zrobic zeby nie polaczalo drugiego gracza gdy ten sam gram polaczy sie z innej karty,
            # zeby to zrobic musze za kazdym razem wysylac tu imie uzytkownika, typ danych player_name
            # i jesli typ message to player_name, wtedy wykonuje sie powyzszy if, ale pierwszo konsumer sprawdza czy
            # uzytkownik o takich danych istnieje czyli wyzej musze tego ifa dopisac, typ
            # to moze sie wydawac podatne na ataki typu DoS. Jakie jest lepsze rozwiazanie?
            # 2. Na poziomie uzytkownika, sprawdzac czy uzytkownik jest polaczony juz (vuex), dac
            # na wszelki wypadek zeby klepsydra byla przynajmniej 5 sec???
            # czyli zrobic nowy setter i getterem brac name uzytkownika i wysylac na socket, wtedy socket
            # sprawdza czy uzytkownik taki istnieje juz. Jesli tak to nie laczy, jest nie to laczy. #TODO: * Podatne na Dos???
            
            # Potem ma wysylac do graczy grupowo wiadomosc ze nowa runda jest gotowa i gra odpala kolejna runde
            # , ale tylko jesli
            
            
            
            
            async_to_sync(self.channel_layer.group_add) (
                self.room_group_name,
                self.channel_name
            )

            self.accept()
            
            async_to_sync(self.channel_layer.group_send) (
            self.room_group_name,{
                'type': 'send_user_info',
                'payload' : json.dumps(self.room.connected_users)
            }
        )

        
        
        #self.send(text_data="[Welcome %s!]" % self.player_one) #to change

    def disconnect(self, close_code):
        self.room.connected_users = self.room.connected_users - 1 
        self.room.save(update_fields=['connected_users'])
        
        async_to_sync(self.channel_layer.group_discard) (
            self.room_group_name,
            self.channel_name
        )
        print(self.room.connected_users)
        
        
    def receive(self, text_data):
        print(text_data)
        username_str = None
        username = self.scope["user"]
        
        data = json.loads(text_data)
        
        print(data['data']['level'])
 
        async_to_sync(self.channel_layer.group_send) (
                self.room_group_name,{
                    'type' : 'run_game',
                    'payload' : text_data,
                    'sender_channel_name': self.channel_name
                }
            )
        
     
     
            
            

    def run_game(self, event):
        data = event['payload']
        data = json.loads(data)
        
        
        if self.channel_name != event['sender_channel_name']:
            self.send(text_data = json.dumps({
                'payload' : data['data'],
            }))
    
    def send_user_info(self, event):
        data = event['payload']
        data = json.loads(data)
        
        self.send(text_data = json.dumps({
                'payload' : data,
            })) 
        
 

    
        
    
    