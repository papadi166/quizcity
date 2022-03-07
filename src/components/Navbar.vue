<template>
  
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="nav nav-pills me-auto mb-2 mb-lg-0">
          <router-link :to="{ name: 'Home' }" class="navbar-item">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
          </router-link>
          <router-link :to="{ name: 'AddQuiz' }" class="navbar-item">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">AddQuiz</a>
            </li>
          </router-link>
          
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              >Disabled</a
            >
          </li>
        </ul>
        <ul id="Tools" style="list-style: none; float: right;" class="nav nav-pills ">
          <li>
            <font-awesome-icon :icon="['fas', 'heart']" size="lg" /><br>
            <span>favourites</span>
          </li>
          
          <li>
            <font-awesome-icon :icon="['fas', 'user-group']" size="lg" /><br>
            <span>Friends</span>
          </li>

          <li v-if="$store.state.username" class="nav-item dropdown" id="user"  >
        <a @click="goToProfile" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {{$store.state.username}}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a @click="logout" class="dropdown-item" href="#">Logout</a>
        </div>
      </li>
        </ul>
        
      </div>
    </div>
  </nav>

</template>

<script>
import store from '../../store/store.js'


export default {
  name: 'Navbar',

  props: {
    msg: String
  },
  methods: {
    logout() {
      window.location.href = process.env.VUE_APP_ROOT_API + "api/logout"
    },
    goToProfile() {
      if (!store.state.username) this.$router.push('/account/')
      else this.$router.push('/profile/')
    }
  },
 mounted() {
    store.state.modalConfirm = true
    fetch(process.env.VUE_APP_ROOT_API + "api/user/")
      .then((res) => res.json())
      .then((data) => (store.state.username = data.username))
      .catch((err) => console.log(err.message));
  },

    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  color: black;
  text-decoration: none; 
}
a:hover {
  color: white;
  transition:5ms;
}
nav li:hover,
 nav li.router-link-active,
 nav li.router-link-exact-active {
   border-radius: 4px;
   background-color: rgb(27, 107, 255);
   cursor: pointer;
   color: white;
   transition:5ms;
 }
 
 #user:hover > .dropdown-menu {
   display: block;
   
 }

#Tools {
  justify-content:space-between;
  
  
}

li {
  margin-left: 10px;
}
</style>
