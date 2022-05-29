<template>
  <div>
      <div id="quiz-name">
            <font-awesome-icon style="float: left; margin" class="setting-img" :icon="['fa', 'circle-arrow-left']" size="lg" />
            <p id="quiz-game-text">{{quiz_name}}</p>

      </div>
      <div id="user">
          <div id="position">
              <p>200</p>
          </div>
          <div>
              <img id="profile-picture" :src="$store.getters.getUserAvatar">
          </div>
          <div id="points">
              <p>300</p>
          </div>
      </div>

      <hr>

      <div id="rank-list">
          <!-- TODO: LAZYLOADING USERS, when scroll -->
          <div class="rank">
            <p class="rank-number">1 </p>
            <img id="profile-picture-small" :src="$store.getters.getUserAvatar">
            <p> {{$store.getters.getUserName}}</p>
            <p> POINTS</p>
            
          </div>
          <hr>

         <div class="rank">
            <p class="rank-number">2 </p>
            <img id="profile-picture-small" :src="$store.getters.getUserAvatar">
            <p> {{$store.getters.getUserName}}</p>
            <p> POINTS</p>
          </div>
          <hr>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Rankings',
    data() {
        return {
            quiz_name: window.location.pathname.split('/')[2].replace('-',' '),
        }
    },

}
</script>

<style>
    #quiz-name {
        background-color: rgb(212, 27, 27);
        height: 3rem;
        font-size: 2rem;
    }

    #quiz-game-text {
        margin: auto;
        color: white;
    }

    #user {
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
    }

    #profile-picture {
        width: 7rem;
        height: 7rem;
        border-radius: 50%;
    }

    #profile-picture-small {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
    }

    .rank {
        display: flex;
        margin-top: 15px;
        
    }
    
    #rank-list {

    }

    .rank-number {
        margin-top: auto;
        margin-bottom: auto;
    }
</style>