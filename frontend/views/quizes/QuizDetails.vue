<template>
<<<<<<< HEAD
<div >
=======
<div>
>>>>>>> c58784bb933c55c7eb92c30667c9715fb4aed4a7
  <!-- Change to v-show to increase performace, but you have to repair bug with not showing answer 0 sometimes -->
  <div v-show="loading === false & (is_lobby_ready === true | room_code === undefined)" >

    <div id="player-info" v-show="this.answers[0]" >
        <div class="player-info-content" v-for="player in players" :key="player">
          <div v-if="player.name !== 'guest2'">
            <img class="player-photo" :class="`player-photo-${player.id}`" :src="player.photo_url">
            <p class="player-name" :class="`player-name-${player.id}`" >{{player.name}}</p>
            <div class="d-flex">
              <img style="width:32px; height:32px" :src="`${player.rounds[0]}`">
              <img style="width:32px; height:32px" :src="`${player.rounds[1]}`">
              <img style="width:32px; height:32px" :src="`${player.rounds[2]}`">
              <img style="width:32px; height:32px" :src="`${player.rounds[3]}`">
              <img style="width:32px; height:32px" :src="`${player.rounds[4]}`">
            </div>
          </div>
        </div> <!-- TODO: Change to users[].length===2 when prod and load user in parent component -->
      </div>

  <div class="card" style="margin: auto">
    <img :src="`${quiz.image}`" class="card-img-top" alt="" />
    <div class="card-body">
      <h1 id="title">{{ this.quiz["title"] }}</h1>
      <h5 id="counter" class="card-title">
        {{ actualQuiz }} / 5
      </h5>
      <h3 v-if="this.question" class="card-text">
        Question: {{ this.question }}
      </h3>
      <div class="progress" v-show="answers[0]">
        <div id="quiz-timer" class="progress-bar" role="progressbar" style="width:0%"></div>
      </div>
    </div>

    <ul v-if="loading === false" class="list-group list-group-horizontal "> <!-- WARNING! please dont change v-if statement it may cause lost answers bug -->
      <li
        v-show="this.answers[0]"
        @click="handleSelectItem(this.answers[0], $event)" 
        id="1"
        class="option option-hover list-group-item w-50"
      >
        {{ this.answers[0] }}
      </li>
      <li
        v-show="this.answers[1]"
        @click="handleSelectItem(this.answers[1], $event)"
        id="2"
        class="option option-hover list-group-item w-50"
      >
        {{ this.answers[1] }}
      </li>
    </ul>
    <ul v-show="this.answers[2]" class="list-group list-group-horizontal ">
      <li
        v-show="this.answers[2]"
        @click="handleSelectItem(this.answers[2], $event)"
        id="3"
        class="option option-hover list-group-item w-50"
      >
        {{ this.answers[2] }}
      </li>
      <li
        v-show="this.answers[3]"
        @click="handleSelectItem(this.answers[3], $event)"
        id="4"
        class="option option-hover list-group-item w-50"
      >
        {{ this.answers[3] }}
      </li>
    </ul>

    <div class="card-body">
      

      <!-- Play buttons -->
      <div v-if="!this.question && !this.quizFinished">
        <!--Ranks -->

        <button
          @click="getActualQuiz(this.actualQuiz)"
          href="#"
          class="btn btn-success play-btn full-width"
          id="start-button"
        >
          <span>Solo</span>
        </button> <br><br>
        <button
          
          @click="loadOppponent"
          href="#"
          class="btn btn-success play-btn  full-width"
          id="start-button"
        >
          <span class="">Play with friend</span>
        </button><br><br>
        <button
          @click="findOpponent"
          href="#"
          class="btn btn-success play-btn full-width"
          id="start-button"
        >
          <span>Find opponent </span>
        </button> <br><br>

        <router-link :to="{name: 'QuizRanks'}" href="#">
          <span>Ranks</span>
        </router-link> 

        
      </div>
 
      <div v-if="quizFinished"  > 
        <div class="d-flex" style="align-items: center; justify-content: center;">
          <img style="width:64px; height:64px" :src="`${rounds[0]}`">
          <img style="width:64px; height:64px" :src="`${rounds[1]}`">
          <img style="width:64px; height:64px" :src="`${rounds[2]}`">
          <img style="width:64px; height:64px" :src="`${rounds[3]}`">
          <img style="width:64px; height:64px" :src="`${rounds[4]}`">
       </div>
        <h1>Quiz has been finished</h1>
        <h2>Your points: {{ points }} / {{5*10}}</h2> <!-- {{ quiz["required_score_to_pass"] }} -->

        <button @click="this.$router.go()" class="btn btn-success">Retry</button>
        <br>
        <button class="btn btn-success"><router-link :to="{name: 'Home'}">Take another quiz</router-link></button>
        <p>author: {{ quiz["author"] }}</p>

      </div>
      
      
    </div>
  </div>

  </div>

  <WaitingForOpponent v-show="is_lobby_ready !== true & room_code !== undefined"></WaitingForOpponent>

  <round-transition v-if="quiz['title']"  v-show="loading === true && quizFinished === false"  :quiz_name="quiz['title']" :quizIcon="quiz['icon']" :round="actualQuiz" >
    <!-- current player points images -->
    <template v-slot:round1><img style="width:64px; height:64px" :src="`${rounds[0]}`"></template>
    <template v-slot:round2><img style="width:64px; height:64px" :src="`${rounds[1]}`"></template>
    <template v-slot:round3><img style="width:64px; height:64px" :src="`${rounds[2]}`"></template>
    <template v-slot:round4><img style="width:64px; height:64px" :src="`${rounds[3]}`"></template>
    <template v-slot:round5><img style="width:64px; height:64px" :src="`${rounds[4]}`"></template>
    <!-- opponent points images -->

  </round-transition>

</div>
</template>

<script>
import {getCookie} from '../../src/assets/getCookie.js';
import RoundTransition from '../../src/components/quiz/RoundTransition.vue'
import WaitingForOpponent from '../../src/components/quiz/WaitingForOpponent.vue'
<<<<<<< HEAD
 import moment from 'moment';
=======
>>>>>>> c58784bb933c55c7eb92c30667c9715fb4aed4a7
// TODO: Make imposible to change user points in code, hack

export default {
  name: "QuizDetails",
  components: {
    RoundTransition,
    WaitingForOpponent,
  },


  data() {
    return {
      rounds: [
        process.env.VUE_APP_ROOT_API + "static/assets/297806.png",
        process.env.VUE_APP_ROOT_API + "static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp",
        process.env.VUE_APP_ROOT_API + "static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp",
        process.env.VUE_APP_ROOT_API + "static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp",
        process.env.VUE_APP_ROOT_API + "static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp",
      ],
      players: [
        {
        // load player data here
        "id": 0,
        "name": this.$store.getters.getUserName,
        "photo_url": process.env.VUE_APP_ROOT_API +  "static/assets/gamer-esports-player-competition-activity-256.webp", // TODO: change default url to guest photo url
        "last_answer": "a",
        "rounds": [
          process.env.VUE_APP_ROOT_API + "static/assets/297806.png",
          process.env.VUE_APP_ROOT_API + "static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp",
          process.env.VUE_APP_ROOT_API + "static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp",
          process.env.VUE_APP_ROOT_API + "static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp",
          process.env.VUE_APP_ROOT_API + "static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp",
        ],
        },
        {
        // load player data here
        "id": 1,
        "name": "guest2",
        "photo_url": process.env.VUE_APP_ROOT_API + "static/assets/gamer-esports-player-competition-activity-256.webp", // TODO: change default url to guest photo url
        "last_answer": "a",
        "answered": "false",
        "rounds": [
          process.env.VUE_APP_ROOT_API + "static/assets/297806.png",
          process.env.VUE_APP_ROOT_API + "static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp",
          process.env.VUE_APP_ROOT_API + "static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp",
          process.env.VUE_APP_ROOT_API + "static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp",
          process.env.VUE_APP_ROOT_API + "static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp",
        ],
        },

        // Load opponent data here

        
      ],
      quiz: [],
      slug: this.$route.params.slug,
      room_code: this.$route.params.room_code,
      selectedAnswer: null,
      correctAnswer: 0,
      question: "",
      answers: [],
      actualQuiz: 0,
      quizFinished: false,
      quizStarted: false,
      points: 0,
      loading: false,
      isChoosed: false,
      timer: false,
      socket: null,
      is_lobby_ready: false,
      connected_users: 1,
      mode: "solo",
<<<<<<< HEAD
      game_creator: null,
      game_opponent: null,
=======
>>>>>>> c58784bb933c55c7eb92c30667c9715fb4aed4a7

      EmptyIcon: process.env.VUE_APP_ROOT_API + "static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp",
      CurrentIcon: process.env.VUE_APP_ROOT_API + "static/assets/297806.png", // current
      IncorrectIcon: process.env.VUE_APP_ROOT_API + "static/assets/3786049.png", // Failed
      CorrectIcon: process.env.VUE_APP_ROOT_API + "static/assets/3786042.png", // correct
    };
  },
  mounted() {
    this.room_code = this.$route.params.room_code
    if (this.room_code !== undefined) {
      this.loadGame()
      this.mode = "multiplayer"
    }
    
    
    console.log(this.room_code)
    fetch(process.env.VUE_APP_ROOT_API + `api/details/` + this.slug + `/`)
      .then((res) => res.json())
      .then((data) => (this.quiz = data))
      .then((data) => (this.correctAnswer = data.answer))
      .catch((err) => console.log(err.message));
  },

  watch: {
    loading: function () {
      const progresBar = document.getElementById("quiz-timer")
      if (this.loading === false) {
        this.timer = true
        progresBar.animate({width: "100%"}, 5000)
       // let animate = progresBar.getAnimations
       // setTimeout(() =>  {console.log("tiime is over")}  }, 5000)

        // Add next round funcionality after timeout
        // Stop animation if user choosenanswer
        // stop next round timeout
      } else if(this.timer === true) {
        const animations = progresBar.getAnimations();
        if(animations.length >0) animations[0].finish()
        
        this.timer = false
      }
      
    },
    connected_users() {
      if (this.connected_users === 2) {
        console.log("ready")
        this.is_lobby_ready = true
        this.getActualQuiz(this.actualQuiz)
      }
    }

  },
  methods: {
    getCookie,
    connectPlayer() {
      let ws_scheme = window.location.protocol === 'https:' ? "wss" : "ws"
      this.socket = new WebSocket(ws_scheme + process.env.VUE_APP_WS_API + 'ws/game/' + this.room_code) //process.env.VUE_APP_WS_API
      this.socket.onopen = function() {
        console.log("Socket connected")
      }
        
      
      
      this.socket.onmessage = (event) => {
        let data = event.data

        data = JSON.parse(data)
        console.log(data.payload.player)

        console.log(data.payload)
        this.connected_users = data.payload
        console.log("connected users"+this.connected_users)

        if (data.payload.answer === false) this.players[1].rounds[this.actualQuiz-1] = this.IncorrectIcon
        else this.players[1].rounds[this.actualQuiz-1] = this.CorrectIcon
        
      
        console.log("next?:" + data.payload.next)
        console.log("opponent answered?: " + this.players[1].answered) 
        if (this.actualQuiz !== 0 & data.payload.level !== "loading") {
          this.players[1].answered = "true"
        } 
        if (data.payload.level === "loading") {
          this.players[1].name = data.payload.player
        }
        
       // else if (opponent) this.players[1].rounds[this.actualQuiz-2] = data.payload.answer

      }
        
       
      this.socket.onclose = function() {
        console.log("socked closed")
       
      }
    },
    playDuel() {
      let answer = null
      if(this.selectedAnswer === this.correctAnswer) answer = true
      else answer = false

      let data = {
        'player' : this.players[0].name,
        'answer': answer,
        'level' : this.actualQuiz+1,
      }
      this.socket.send(JSON.stringify({
        data
      }))
    },
<<<<<<< HEAD
    async saveQuizStats() {
      let player_type = ""
      let data = {}
      
      if(this.game_creator === this.$store.getters.getUserName) {
        player_type = "game_creator_score"
        data = {
                "is_over": true,
                "date_finished": moment(Date(), 'YYYY-MM-DD HH:mm'), // 2017-02-06 11:39
                "game_creator_score": this.points



            }
        }
      else {
        player_type = "game_opponent_score"
        data = {
                "is_over": true,
                "date_finished": moment(Date(), 'YYYY-MM-DD HH:mm'), // 2017-02-06 11:39
                "game_opponent_score": this.points




            }
      }

			console.log("player_type: " + player_type)

          await fetch(process.env.VUE_APP_ROOT_API + `api/quiztaker/${this.room_code}/`, {
              method: 'PUT',
              headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Media-Type': 'application/json',
                    'X-CSRFToken': this.getCookie('csrftoken')
              },
              body: JSON.stringify(data),
          })
          .then(res => {
              if (!res.ok) return res.text().then(text => {throw new Error(text)})
              else return res.json()
          })
          .catch(err => {console.log(err)})
=======
    saveQuizTaker() {
>>>>>>> c58784bb933c55c7eb92c30667c9715fb4aed4a7


    },
    loadGame() {
      fetch(process.env.VUE_APP_ROOT_API + `api/mygames/` + this.room_code + "/")
       .then((res) => res.json())
       .then((data) => {
         if(this.players[0].name === data.game_creator.username || data.game_opponent.username) {
<<<<<<< HEAD
           this.game_creator = data.game_creator.username
           this.game_opponent = data.game_opponent.username
=======
>>>>>>> c58784bb933c55c7eb92c30667c9715fb4aed4a7
           console.log("you have acces to this room")
           this.connectPlayer()
         } else {
           console.log("access denied")
         }
       })
       .catch((err) => console.log(err.message));


    },
    loadOppponent() {
      // Create Django Channels or socket.io or websockets room
      // sent opponent data from app to socket room
      // load data here and unpack it
      // save data to players[1]
      console.log(this.quiz['title'])
      this.$router.push({ name: 'Friends', params: {quiz_to_invite_slug: this.quiz['slug'], quiz_to_invite_name: this.quiz['title'], quiz_to_invite_id: this.quiz['id']}})
    },
    findOpponent() {
      alert("looking for opponent")
      fetch(process.env.VUE_APP_ROOT_API + `api/quiztaker/`)
       .then((res) => res.json())
       .then((data) => {
         for (let game of data) {
           console.log("fetched game title: " + game.quiz_data.title)
           console.log("this game title:" + this.quiz['title'])

           if(game.connected_users === 1 && game.quiz_data.title === this.quiz['title']) {
              console.log("found a game")
              //this.$router.push('/quizes/' + game.quiz_data.title.replace(/\s/g, '') + '/' + game.room_code)
              window.location.href = process.env.VUE_APP_ROOT_API  + 'quizgame/quizes/' + this.quiz['slug'] + '/' + game.room_code
           }
           else {
             console.log("no games right now, gameid" + game.room_code)
           } 
         }
       })
       .catch((err) => console.log(err.message));
    },
    loadNextRound() {
      if (this.quizFinished === false) {
        this.loading = true
        setTimeout(() => this.loading=false, 2000)
        
        this.isChoosed = false
        // set current icon for
     
        // if (this.socket === null) this.connectPlayer()
        console.log( this.players[1].rounds[0])
        this.players[1].answered = "false"
        
        
        
      }
    },
    checkCorrectAnswer() {
      
      // TODO: Create animation
      if (this.selectedAnswer == this.correctAnswer) {
        this.rounds[this.actualQuiz-1] = this.CorrectIcon
        this.players[0].rounds[this.actualQuiz-1] = this.CorrectIcon
        this.points += 10
      } else {
        this.rounds[this.actualQuiz-1] = this.IncorrectIcon
        this.players[0].rounds[this.actualQuiz-1] = this.IncorrectIcon
      }
      if (this.mode === "multiplayer") this.playDuel()
      
      
     
    },

    resetOptions() {
      //reset answers and selectedAnswer
      this.answers = [];
      this.selectedAnswer = "";

      //get answer divs
      let options = document.getElementsByClassName("option");

      //For each option div remove all operational classes
      Array.from(options).forEach((option) => {
        option.classList.remove("active");
        option.classList.remove("correct");
        option.classList.remove("incorrect");
        option.classList.add("option-hover"); // adds option-hover to set hover effect

        //Reset option divs textContent
        option.textContent = "";
        this.correctAnswer = "";
      });
    },
    getActualQuiz(actualQuizNumber) {
      
      
      //solo, duel, find
      //reset option divs
      if (this.selectedAnswer || !this.quizStarted) {
        this.resetOptions();


        //if there is more questions left
        if (this.quiz["random_questions"][actualQuizNumber] !== undefined) {
          
          //question =
          this.question = this.quiz["random_questions"][actualQuizNumber].text;

          // for each answer in actual Question set answers
          this.quiz["random_questions"][actualQuizNumber]["answer_set"].forEach(
            (answer) => {
              this.answers.push(answer["text"]);
              //if answer is correct add it to correctAnswer Variable
              if (answer["is_correct"] === true)
                this.correctAnswer = answer["text"];
                
            }
          );
          // if there is no more question, QUIZ FINISHED:
<<<<<<< HEAD
        } else if(this.actualQuizNumber > 5) {
          this.question = "";
          this.quizFinished = true;
          console.log("quiz Finished")
          if (this.mode === "multiplayer") this.saveQuizStats()
          
          
=======
        } else if(this.actualQuizNumber == 5) {
          this.question = "";
          this.quizFinished = true;
          console.log("quiz Finished")
>>>>>>> c58784bb933c55c7eb92c30667c9715fb4aed4a7

        // Prevents loading next question
        } else {
          this.question = "";
          this.quizFinished = true;
<<<<<<< HEAD
          if (this.mode === "multiplayer") this.saveQuizStats()
=======
>>>>>>> c58784bb933c55c7eb92c30667c9715fb4aed4a7
          console.log("quiz finished ????")
        }
      }
      
      

      //increment Actual Question +1 if quiz hasnt been finished
      let timer = null 

      // check every 2 seconds  if another player already choosed answer, if not wait...
      if(this.mode === "solo") {
        if (!this.quizFinished && this.actualQuiz <= 5) this.actualQuiz++; this.loadNextRound()
      } else {
          if (this.actualQuiz === 0) {
            if (!this.quizFinished && this.actualQuiz <= 5) this.actualQuiz++;
            timer = setInterval(() => { if (this.isChoosed === true & this.players[1].answered === "true") {this.actualQuiz++; this.loadNextRound(); clearInterval(timer); console.log('again..')} else {console.log("cant go further");}}, 1000)
            timer
          }
          else {
            timer = setInterval(() => { if (this.isChoosed === true & this.players[1].answered === "true") {this.actualQuiz++; this.loadNextRound(); clearInterval(timer); console.log('again..')} else {console.log("cant go further");}}, 1000)
            timer
          }
          
      }
      
    },
    // this function handles answers
    handleSelectItem(item, event={}) {
      
      
      if (this.isChoosed === false) {
          
          // makes choosen answer glow
          event.target.classList.add("active");
          let options = document.getElementsByClassName("option");

          // shows which answers are correct and not.
          Array.from(options).forEach((option) => {
            if (option.textContent !== this.correctAnswer && option.textContent === event.target.textContent) {  
              option.classList.add("incorrect"); // if not, makes red
            } if (option.textContent === this.correctAnswer) {
              option.classList.add("correct"); // if yes makes green
            } 
            option.classList.remove("option-hover") // remove hover effects from option after choose answer
          });

          
          let timer = null
        

          // set Interval which cheks if opponent choosed the answer, if yes, run again handle function
          if (this.mode === "multiplayer") {
           timer = setInterval(() => { if (this.isChoosed === true & this.players[1].answered === "false") {this.handleSelectItem(item, event), clearInterval(timer), console.log("shit")}},1000 )
           timer

           // Check if selected answer is true
          this.checkCorrectAnswer()
           
        }
          // manimulating progress bar
            const progresBar = document.getElementById("quiz-timer")
            const animations = progresBar.getAnimations();
            console.log(animations)

            
<<<<<<< HEAD

             if (animations.length > 0) {
=======
            let progressBarTimer = null
            progressBarTimer = setInterval(() => { if (animations.length > 0) {
>>>>>>> c58784bb933c55c7eb92c30667c9715fb4aed4a7
              // TODO: ANIMATION BACKING
              //console.log("stopping progress bar")
              animations.forEach( (animation) => {animation.pause()})
             

              // clear intervat and run handle function again
<<<<<<< HEAD


            }


=======
              clearInterval(progressBarTimer)
              this.handleSelectItem(item, event)
            }}, 1000)

            progressBarTimer // run timer
>>>>>>> c58784bb933c55c7eb92c30667c9715fb4aed4a7
            
            
            // DONE: 
            // 1. repair choosing 
            // 2. send questions to opponent
            // 3. continue checking for user 2 answer before end of last round
          

            setTimeout(() => this.getActualQuiz(this.actualQuiz), 2000)

            if (this.selectedAnswer === "") this.selectedAnswer = item;
            
            // Check if selected answer is true
            this.checkCorrectAnswer()
            
            // set status of game, needed by other functions to know
            this.quizStarted = true;
            // set next round icon to Current quiz icon
            this.rounds[this.actualQuiz] = this.CurrentIcon
        }
      this.isChoosed = true
    },
  },

};
</script>

<style>
.card {
  background-color: white;
}

.card-img-top {
  height: 15em;
  object-fit: cover;
}

.QuizCounter {
  text-align: right;
  text-align: top;
  margin-right: 5px;
}

.option-hover:hover {
  background-color: #4646ff;
  cursor: pointer;
}

ul.list-group li.active {
  color: black;
  background-color: #4646ff;
}

ul.list-group li.correct {
  background-color: green;
}

ul.list-group li.incorrect {
  background-color: red;
}

#title {
  text-align: center;
}

.card-body {
  margin-left: 0 auto;
  text-align: center;
}

#player-info {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  flex-flow: row no-wrap;

  
}

.player-info-content {
  display: flex;
  flex-direction: column;
}

.player-photo {
  width: 32px;
  height: 32px;
}

.player-photo-0 {
  margin-right:auto;
}

.player-photo-1 {
  margin-left:auto;
}

.player-name {
  height: 6px;
}
.player-name-0 {
  margin-right:auto;
}
.player-name-1 {
  margin-left:auto;
}

@media(max-width: 768px) {
    button.full-width {
        width: 100%;  
    }
}
</style>

