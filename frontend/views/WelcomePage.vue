<template>
  <div id="WelcomePage">

      <section>
          <img v-if="$store.state.day === true" :src="VUE_APP_ROOT_API + 'static/assets/paralax_header/city_background_day.png'"  class="theme-background">
          <img v-if="$store.state.day === false" :src="VUE_APP_ROOT_API + `static/assets/paralax_header/city_background_night.png`" class="theme-background" >
          <img :src="`${processenv}static/assets/paralax_header/city_farest.png`" id="city_farest" alt="">
          <img :src="`${processenv}static/assets/paralax_header/city_far.png`" id="city_far" alt="">
          <h2 id="text">Quiz City </h2>
          <a id="btn"><router-link :to="{ name: 'Home' }">Play Quizes</router-link></a>
          <img :src="`${processenv}static/assets/paralax_header/city_close.png`" id="city_close" alt="">
      </section>
    
      <div id="About">
          <h2>Enigma Vibes</h2>
          <p>Do you wanna play other cool gamees with friends</p>
          <p>Do you wanna see my other projects?</p>
      </div>
           
  </div>
</template>

<script>


export default {
    name: "WelcomePage",
    data() {
        return{
            theme: "",
            
        }
    },
    computed:{
        processenv(){
            return process.env.VUE_APP_ROOT_API
        }
    },
    mounted() {
        
        let front = document.getElementById("city_close")
        let far = document.getElementById("city_far")
        let farest = document.getElementById("city_farest")
        // let text = document.getElementById("text")
        // let btn = document.getElementById("btn")

        window.addEventListener("scroll", function() {
            let value = window.scrollY;
            farest.style.left = -500 + value*0.2 + 'px';
            far.style.left = -330 + value*0.3 + 'px';
            front.style.left = -500 + value*0.7 + 'px';
    
})
    },
}
</script>

<style scoped>

*
{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;
}

#WelcomePage
{
    min-height: 100vh;
    overflow-x: hidden;
    background: linear-gradient(#eadeff,#7597de);
    scroll-behavior: smooth;
}

header
{
    margin-top: 15px;
    position: absolute;
    top: 0;
    left: 0;
    width: 89rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 9;
    margin-left: 5rem;
}


header .logo
{
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    font-size: 2em;
    text-transform: uppercase;
    letter-spacing: 2px;
}

header ul
{
    display: flex;
    justify-content: center;
    align-items: center;
}

header ul li
{
    list-style: none;
    margin-left: 20px;
}

header ul li a
{
    text-decoration: none;
    padding: 6px 15px;
    color: #fff;
    border-radius: 20px;
}

header ul li a:hover,
header ul li a:active
{
    background: #fff;
    padding: 6px 15px;
    color: #2b1055;
}

section
{
    margin-top: -100px;
    position: relative;
    width: 100%;
    height: 60vh;
    padding: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow:hidden;
}

section::before
{
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 20px;
    background: linear-gradient(to top, white, transparent);
    z-index: 12;
}

section img
{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    object-fit:cover ;
    pointer-events: none;
    object-position: 0px 50px;
    
}

section img.theme-background
{
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
    object-position: 0px 0px;;
}

section img#city_farest
{
    left: -500px;
}

section img#city_far
{
    left: -330px;
}

section img#city_close
{
    top: 50px;
    z-index:10;
    position: absolute;
    left: -500px;
 
}

#text
{
    top: 140px;
    position: absolute;
    white-space: nowrap;
    font-size: 7.5vw;
    color: white;
    z-index: 9;
}

#btn
{
    text-decoration: none;
    display: inline-block;
    padding: 8px 30px;
    border-radius: 40px;
    background: #fff;
    color: #2b1055;
    font-size: 1.5em;
    z-index: 11;
    transform: translateY(100px);
}

#About
{
    position: relative;
    padding: 100px;
    background: #fff;
}

#About h2
{
    font-size: 3.5em;
    margin-bottom: 10px;    
    color: black;
}

#About p
{
    font-size: 1em;
    color: black;
}

@media (min-width: 768px) {
 

    section
    {
        position: relative;
        width: 100%;
        height: 100vh;
        padding: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow:hidden;
    }

    section img
    {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        object-fit:cover ;
        pointer-events: none;
        object-position: 0px 150px;
    
    }

    section img#city_close
    {
        top: 30px;
        z-index:10;
        position: absolute;
        left: -500px;
 
    }

    #text
{
    top: 200px;
    position: absolute;
    white-space: nowrap;
    font-size: 7.5vw;
    color: white;
    z-index: 9;
}

#btn
{
    text-decoration: none;
    display: inline-block;
    padding: 8px 30px;
    border-radius: 40px;
    background: #fff;
    color: #2b1055;
    font-size: 1.5em;
    z-index: 11;
    transform: translateY(200px);
}
}

@keyframes moveRight {
    100% { transform: translateX(-2950)}
}
</style>