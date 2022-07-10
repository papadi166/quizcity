<template>
  <Suspense>
    <template #default>
      <div class="app">
        <Navbar v-if="$route.meta.navbarOn"></Navbar>
        <SideBar></SideBar>

        
<<<<<<< HEAD
      <main class="main" style="min-height:300px">
=======
      <main class="main">
>>>>>>> c58784bb933c55c7eb92c30667c9715fb4aed4a7
        <router-view></router-view>
      </main>

     
    <Footer></Footer>
      </div>
      
    </template>

     <template #fallback>
       Loading..
    </template>
  </Suspense>
  
</template>

<script>
import Navbar from './components/Navbar.vue'
import SideBar from './components/SideBar.vue'
import Footer from './components/Footer.vue'



export default {
  name: 'App',
  components: {
    Navbar,
    SideBar,
    Footer,

  },
    mounted() {
    console.log(process.env.VUE_APP_ROOT_API + "api/quizes/")

<<<<<<< HEAD
  },
  created() {
    if(this.$store.getters.getUserName !== 'guest') {
      let ws_scheme = window.location.protocol === 'https:' ? "wss" : "ws"
      let notification_socket = new WebSocket(ws_scheme + process.env.VUE_APP_WS_API + 'ws/notification/') //process.env.VUE_APP_WS_API
        notification_socket.onopen = function() {
        }
        notification_socket.onmessage = (event) => {
          let data = event.data
          data = JSON.parse(data)

          console.log(data['text'])
        }
        notification_socket.onclose = function() {
          console.log("socked closed")
        
        }
    }
    
=======
  
	
>>>>>>> c58784bb933c55c7eb92c30667c9715fb4aed4a7
  }
}
</script>

<style >

.main {
	text-align: center;
	margin-left: 5rem;

}

@media only screen and (max-width: 991px) {
  .main {
    margin: 0;
  }
}

:root {
  font-size: 16px;
  font-family: 'Open Sans';
  --text-primary: #b6b6b6;
  --text-secondary: #ececec;
  --bg-primary: #23232e;
  --bg-secondary: #141418;
  --bg-thirdary: rgb(61, 5, 5);
  --transition-speed: 600ms;
  
}


button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.app {
  margin-top: 10px;
}

</style>

