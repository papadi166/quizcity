<template>
  <div >
    <router-view></router-view>
    <div v-if="this.$route.name === 'Profile'">
      Tutaj navbar powinien pokazywac tylko edit profile po prawej i po lewej
      toggler <br />
      <br />
      {{ this.$route.name }} 
      <router-link :to="{name: 'Friends'}">Your friends</router-link> <br>
      <!-- username -->
      Nickname: {{ $store.state.user.username }} <br>

      <a @click="logout">Logout</a>
     
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

      <h2>Best in</h2>
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
