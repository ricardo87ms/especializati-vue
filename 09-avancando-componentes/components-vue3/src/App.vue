<template>
  <tasks-component
    :titulo="'Gerenciador de Tarefas'"
    :tarefas="tarefas"
    @mechama="respondeFilho"
  ></tasks-component>
  <list-items-component
    :titulo="'Lista de Itens'"
    :tarefas="['Lavar' , 'Passar', 'Cozinhar']"
  ></list-items-component>
</template>

<script>
import TasksComponent from './components/TasksComponent.vue'
import ListItemsComponent from './components/ListItemsComponent.vue'

export default {
  name: 'App',
  components: {
    TasksComponent,
    ListItemsComponent
  },
  data () {
    return {
      tarefas: ['Lavar' , 'Passar', 'Cozinhar']
    }
  },
  methods: {
    // respondeFilho(P1, P2) {
    //   alert('repondendo filho ' + P1 + ' ' + P2)
    // }
    respondeFilho(tarefa) {
      this.tarefas.push(tarefa)
    }
  }
}
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
