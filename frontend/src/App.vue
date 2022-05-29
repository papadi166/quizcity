<template>
  <Suspense>
    <template #default>
      <div class="app">
        <Navbar v-if="$route.meta.navbarOn"></Navbar>
        <SideBar></SideBar>

        
      <main class="main">
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

