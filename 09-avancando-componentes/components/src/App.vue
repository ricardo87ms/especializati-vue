<template>
  <div id="app">
    <tasks-component :title="'Listagem de tarefas'" :items="['lavar', 'passar', 'cozinhar']"></tasks-component>
    <list-items-component :title="'Listagem'" :items="['lavar', 'passar', 'cozinhar']"></list-items-component>
  </div>
</template>

<script>
import TasksComponent from "./components/TasksComponent.vue";
import ListItemsComponent from "./components/ListItemsComponent.vue";

export default {
  name: "App",
  components: {
    TasksComponent,
    ListItemsComponent
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
