<template>
  <div class="RoundTransition">
      <!-- DONE: learn about how to make reusable components and how to run it. Do I need slots? or just put prop? -->
      <!-- TODO: set css for those new classes below -->

      <!-- for all users create mini panel with avatar, name and points -->
      

      <h1>Round {{round}}</h1> <br>
      <!-- images: red X, green ,/, and yellow two swords as next round  -->
      <div class="d-flex">
          <slot name="round1"></slot>
          <slot name="round2"></slot>
          <slot name="round3"></slot>
          <slot name="round4"></slot>
          <slot name="round5"></slot>
      </div> <br>
       
       <div class="container">
       <img id="gif" style="width: 100%; height: 100%" :src="`${this.gifUrl}`" alt="">
       </div>
         <br> <br>
       <h2>{{quiz_name}}</h2>
       <img id="icon" style="width: 64px; height: 64px;" :src="`${quizIcon}`" alt="">


  </div>
</template>

<script>
export default {
    name: 'RoundTransition',
    props: {
        quiz_name: {
        type: String,
        required: true
      },
      quizIcon: {
        type: String,
        required: true
      },
      round: {
        type: Number,
        required: true
      },
      // TODO: prop users as list
    },
    data() {
      return {
        gifUrl: process.env.VUE_APP_ROOT_API + "static/assets/tram-animation.gif",
      }
      
    }
    

}
</script>

<style scoped>
.container{
  width: 30%;
}

.d-flex {
    height: 100%;
    padding: 0;
    margin: 0;
    align-items: center;
    justify-content: center;
}
#player-info {
  display: inline-flex;
  justify-content: space-between;
}

.player-info-content {
  
  align-self: stretch;
  margin: auto;
}
</style>