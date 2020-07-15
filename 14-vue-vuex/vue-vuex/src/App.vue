<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'tarefas'}">Tarefas ({{totalTasks}} / {{totalTasksNotCompleted}})</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    totalTasksNotCompleted() {
      return this.$store.getters.tasksNotCompleted.length;
    },
    totalTasks() {
      return this.$store.getters.sortedTasks.length;
    }
  }
};
</script>

<style>
</style>