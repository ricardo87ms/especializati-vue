<template>
  <div>
    <h1 v-text="title"></h1>
    <task-add-component></task-add-component>
    <ul>
      <li
        v-for="(task, index) in getTasksSorted"
        :key="index"
        :class="{'completed': task.completed}"
      >
        <a href="#" @click.prevent="completedTask(task)">Completar</a>
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import TaskAddComponent from "./TasksAddComponent";

export default {
  data() {
    return {
      title: "Listagem de Tarefas"
    };
  },
  components: {
    TaskAddComponent
  },
  methods: {
    completedTask(task) {
      this.$store.commit("TOOGLE_TASK", task);
    }
  },
  computed: {
    getTasks() {
      return this.$store.state.tasks;
    },
    getTasksSorted() {
      return this.$store.getters.sortedTasks;
    }
  }
};
</script>

<style scoped>
.completed {
  background: green;
}
</style>