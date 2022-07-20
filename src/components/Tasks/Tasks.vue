<template>
  <div>
  <div v-for="task in this.$store.state.tasks.tasks" :key="task.id">
    <h1>Task title: {{ task.name }}</h1>
    <p>text: {{ task.body}}</p>
    <img :src="task.img" alt="task.photo">
  </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
  name: "WorksPage",
  computed: mapGetters(["getTasks"]),
  methods: mapActions(["fetchTasks"]),
  async mounted() {
    await this.$store.dispatch('fetchTasks');
  }
}
</script>

<style scoped lang="scss">
img{
  width: 120px;
  height: 120px;
}
</style>