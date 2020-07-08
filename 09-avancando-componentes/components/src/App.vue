<template>
  <div id="app">
    <tasks-component @chamandoPai="respondendoFilho" :title="'Listagem de tarefas'" :items="tasks"></tasks-component>
    <list-items-component :title="'Listagem'" :items="['lavar', 'passar', 'cozinhar']"></list-items-component>
  </div>
</template>

<script>
import TasksComponent from "./components/TasksComponent.vue";
import ListItemsComponent from "./components/ListItemsComponent.vue";

export default {
  name: "App",
  data() {
    return {
      tasks: ["lavar", "passar", "cozinhar"]
    };
  },
  components: {
    TasksComponent,
    ListItemsComponent
  },
  methods: {
    respondendoFilho(task) {
      alert("Respondendo Filho " + task);
      this.tasks.push(task);
    }
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
