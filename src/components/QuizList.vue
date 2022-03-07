<template>
    <div>
        <h1>Quizes</h1>
        <div v-for="quiz in quizes" :key="quiz.slug" class="quiz">
            <h2>{{ quiz.title }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'QuizList',
    data() {
        return {
            quizes: []
        }
    },
    mounted() {
        fetch(process.env.VUE_APP_ROOT_API + 'api/articless/')
            .then(res => res.json())
            .then(data => this.quizes = data)
            .catch(err => console.log(err.message))
    }
}

</script>

<style>

</style>