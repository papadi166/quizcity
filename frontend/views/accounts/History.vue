<template>
    <div id="History">
        <div  v-for="game in games" :key="game.id">
            {{game}}
        </div>
        

    </div>
</template>

<script>
export default {
    name: 'History',
    props: {
        user: null,

    },
    mounted() {
        fetch(process.env.VUE_APP_ROOT_API + "api/user/")
            .then((res) => res.json())
            .then((data) => (this.games = data.games))
            .catch((err) => console.log(err.message));
  },
}
</script>

<style>

</style>