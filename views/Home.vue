<template>
  <div id="app">

    <QuizList ></QuizList>



  </div>
</template>

<script>
// @ is an alias to /src

import QuizList from "../views/quizes/Quizes.vue";


export default {
  name: "Home",
  components: {
    QuizList,

  },
  data() {
    return {
      isVisible: true,
    }
  },
  methods: {
    change() {
      this.isVisible = !this.isVisible
    }
  },
};
</script>

<style scoped>



</style>