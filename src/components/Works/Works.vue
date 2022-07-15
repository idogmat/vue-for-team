<template>
  <div>
    <div v-for="work in getWorks" :key="work.id">
      <h1>Task title: {{ work.name }}</h1>
      <p>text: {{ work.body}}</p>
      <img :src="work.img" alt="task.photo">
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
  name: "WorksPage",
  computed: mapGetters(["getWorks"]),
  methods: mapActions(["fetchWorks"]),
  async mounted() {
    this.fetchWorks();
  }
}
</script>

<style scoped lang="scss">
img{
  width: 120px;
  height: 120px;
}
</style>