<template>

  <div id="app">
    <div v-if="error">{{error}}}</div>
    <Suspense>
      <template #default>
      <QuizList ></QuizList>
      
      </template>
      <template #fallback>loading   quizes</template>
    </Suspense>
  </div>

  
</template>

<script>
// @ is an alias to /src
import QuizList from "../views/quizes/Quizes.vue";
import {ref, onErrorCaptured} from 'vue'




export default {
  name: "Home",
  components: {
    QuizList,

  },
  data() {
    return {
      isVisible: true,
      error: ref(null),
    }
  },
  setup() {


    onErrorCaptured( e => {
      this.error.value = e
    })
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