<template>
  <div class="componente">
    <test-component></test-component>
    <form-component></form-component>
    <tasks-component></tasks-component>
  </div>
</template>

<script>
import TestComponent from './components/TestComponent.vue'
import FormComponent from './components/FormComponent.vue'
import TasksComponent from './components/TasksComponent.vue'

export default {
  name: 'App',
  components: {
    TestComponent,
    FormComponent,
    TasksComponent
  }
}
</script>

<style>
.componente {
  border: 1px solid blue;
  margin: 5px;
  padding: 5px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
