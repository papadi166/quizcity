<template>
  <div class="app">
			<Navbar></Navbar>

      <router-view></router-view>
    
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'



export default {
  name: 'App',
  components: {
    Navbar,

  },
    mounted() {
    console.log(process.env.VUE_APP_ROOT_API + "api/quizes/")
  }
}
</script>

<style >


:root {
	--primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 300px;
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}
body {
	background: var(--light);
}
button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

</style>

