<template>
  <div class="container">
    <h1>Projeto de Listagem de Tarefas</h1>
    <tarefas-component></tarefas-component>
  </div>
</template>

<script>
import TarefasComponent from './components/tarefas/TarefasComponent.vue'

export default {
  name: 'App',
  components: {
    TarefasComponent
  }
}
</script>

<style>

</style>
