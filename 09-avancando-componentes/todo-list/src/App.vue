<template>
  <div id="app" class="container">
    <list-tasks-component></list-tasks-component>
  </div>
</template>

<script>
import ListTasksComponent from './components/Tasks/ListTasksComponent';

export default {
  name: 'App',
  components: {
    ListTasksComponent,
  },
};
</script>

<style></style>
