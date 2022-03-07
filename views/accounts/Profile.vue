<template>
  <div>
      This is profile page
  </div>
</template>

<script>
import store from '../../store/store.js'
export default {
    name: 'profile',
    Data() {
        return {
            username: store.state.username,
        }
    }
}
</script>

<style>

</style>