<template>
  <div>
      <strong v-if="quiz_to_invite_name != null">Quiz to invite: {{quiz_to_invite_name}}</strong>
      <h1>Your Friends</h1>
      <div class="container">
          <div v-for="friend in $store.state.user.friends" :key="friend">
              {{friend.username}} <button v-if="quiz_to_invite_name != null" @click="inviteToGame(friend)" class="btn btn-outline-secondary">Invite to game</button>
          </div>
      </div>
      
      <br>
    <a>All users</a>
    <div class="container" style="border: 1px solid;">
          <div v-for="user in this.users" :key="user.id">
              {{user.username}} <a :href="`/api/send_friend_request/${user.id}`">Invite to friends</a>
          </div>
    </div>

    <h2>Friend Requests</h2>
    <div v-for="request in friend_requests" :key="request.id">
       <p><span>From user:{{request.from_user}}</span></p> <a :href="`/api/accept_friend_request/${request.id}`">Accept friend request</a>
    </div>

  </div>
</template>

<script>
import {getCookie} from '../../src/assets/getCookie.js';
export default {
    name: 'Friends',
    props: {
        quiz_to_invite_name: null,
        quiz_to_invite_id: null,
        quiz_to_invite_slug: null,
    },
    data() {
        return {
            users: [],
            friend_requests: [],
            timer: null,
            room_code: null,
        }
    },
     mounted() {

        console.log("id" + this.quiz_to_invite_id)
        fetch(process.env.VUE_APP_ROOT_API + "api/users/")
         .then((res) => res.json())
         .then((data) => (this.users = data))
         .catch((err) => console.log(err.message));

          fetch(process.env.VUE_APP_ROOT_API + "api/user/")
         .then((res) => res.json())
         .then((data) => (this.friend_requests = data.friend_request_to))
         .catch((err) => console.log(err.message));

  },
  methods: {
      getCookie,
      inviteToGame(opponent) {
          if (this.timer != null) this.$swal(`you can't do this now, quiz hasn't been loaded correctly`), setTimeout(() => {this.$swal.close()}, 2000);
          else {
            this.createGame(opponent)
            this.timer = setTimeout(() => {(console.log(`invitation sent to ${opponent.username}`, this.timer = null ))}, 5000)
            this.$swal(`invitation has been sent to: ${opponent.username}`);
            setTimeout(() => {this.$swal.close()}, 2000)
            setTimeout(() => this.$router.push('/quizes/' + this.quiz_to_invite_slug + '/' + this.room_code ),500 )

          }
          // TODO: 1. create invitation in db - backend, 
          // TODO: 2. load invitation as notification in left panel and bottompanel - frontend, 
          // TODO: 3. if invitation exists delete old and create new - backend + (min time to invite again: 5 sec), button silver- frontend
          // TODO: 4. if reciever accepted and sender status: waiting or accepted: create game in database and route users to game (quizStarted = true)
          // TODO: 5. if game finished save game in history with points etc.


      },
    makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * 
            charactersLength));
        }
    return result;
    },

    async createGame(opponent) {
        this.room_code = this.makeid(12)
          await fetch(process.env.VUE_APP_ROOT_API + "api/quiztaker/", {
              method: 'POST',
              headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Media-Type': 'application/json',
                    'X-CSRFToken': this.getCookie('csrftoken')
              },
              body: JSON.stringify({
                "game_opponent": {
                    "username": opponent.username

                },
                "game_creator": {
                    "username": this.$store.state.user.username
                },
                "score": 0,
                "quiz": this.quiz_to_invite_id,
                "room_code": this.room_code,


            }),
          })
          .then(res => {
              if (!res.ok) return res.text().then(text => {throw new Error(text)})
              else return res.json()
          })
          .catch(err => {console.log(err)})
       
          //return response.json
          

      }
  },

}
</script>

<style>

</style>