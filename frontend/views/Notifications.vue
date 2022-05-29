<template>
  <div>
    <h1>Game Invitations</h1>
    <div v-if="!notifications[0] | $store.getters.getUserStatus === 'login  '" id="loader-main">
      <div class="loader">

      </div>
      <br>
      <span >fetching api ...</span>
    </div>
    <div
      v-for="notification in notifications"
      :key="notification.id"
      class="div"
    >
      <div >
        <h4>Quiz Name: {{notification.quiz['title']}}</h4>
        <span>sender: {{notification.game_creator.username}}</span> <br>
        <span>room_code: {{notification.room_code}}</span> <br>
        <span>reciever: {{notification.game_opponent.username}}</span>  <br>
        <span>connected users: {{notification.connected_users}}</span> <br>
        {{notification.created_at = new Date(notification.created_at).getTime()}}
        <button @click="loadOppponent(notification.room_code)" class="btn btn-primary">play</button>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notifications",
  data() {
    return {
      notifications: [],
    };
  },
  methods: {
    loadOppponent(slug) {
      // Create Django Channels or socket.io or websockets room
      // sent opponent data from app to socket room
      // load data here and unpack it
      // save data to players[1]
      this.$router.push("/quizes/" + "historia-ziemi" + "/" + slug)
    },
  },

  async created() {
    if (this.$store.getters.getUserStatus === "login") {
      this.logged = false

    } else {
     await fetch(process.env.VUE_APP_ROOT_API + `api/mygames/`)
      .then((res) => res.json())
      .then((data) => {
          this.notifications = data

      } )
     
      //
      .catch((err) => {console.log(err.message); const loader = document.getElementById("loader")
      loader.removeClass("loader")
      loader.classList.add("loader-failed")});
}


   
  }, 
  
};
</script>

<style lang="scss" scoped>
.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: spin 2s linear infinite;
  margin: 0 auto;
}

#loader-main {
    margin-top: 19%;
}

.loader-failed {
  margin: 0 auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
