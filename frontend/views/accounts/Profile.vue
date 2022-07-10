<template>
  <div >
    <router-view></router-view>
    <div v-if="this.$route.name === 'Profile'">
<<<<<<< HEAD
    <button>Go back</button>
    <button>Edit profile</button>
    <br />
      <br />

=======
      Tutaj navbar powinien pokazywac tylko edit profile po prawej i po lewej
      toggler <br />
      <br />
      {{ this.$route.name }} 
>>>>>>> c58784bb933c55c7eb92c30667c9715fb4aed4a7
      <router-link :to="{name: 'Friends'}">Your friends</router-link> <br>
      <!-- username -->
      Nickname: {{ $store.state.user.username }} <br>

<<<<<<< HEAD

=======
      <a @click="logout">Logout</a>
     
>>>>>>> c58784bb933c55c7eb92c30667c9715fb4aed4a7
      <!-- buttons -->
      <div>
        <!-- Share -->
        <!-- Friends -->
      </div>

       <!-- user photo -->
       <!-- challenges -->
       <!-- amount of friends -->

      <hr />

      <h2>Results</h2>
      <div class="d-flex justify-content-between">
        <p>Challenges</p>
        <p>drew</p>
        <p>lost</p>
      </div>
      <!-- Bar -->
      .............

      <hr />

<<<<<<< HEAD
=======
      <h2>Best in</h2>
>>>>>>> c58784bb933c55c7eb92c30667c9715fb4aed4a7
      <Rankings/>
      <!-- Table with 6 categories, levels -->

      <button>Ranks</button>
    </div>
  
  
  </div>
</template>

<script>
import Rankings from "./Rankings.vue"
export default {
  name: "profile",
  components: {
    Rankings,
  },
  data() {
    return {
      
    };
  },
    methods: {
      logout() {
        window.location.href = process.env.VUE_APP_ROOT_API + "accounts/logout"
    },
  },
};
</script>

<style></style>
