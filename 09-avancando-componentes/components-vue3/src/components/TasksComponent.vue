<template>
  <div>
    <h2>{{ titulo }}</h2>
    <input type="text" v-model="tarefa">
    <button @click="chamaPai">Chama Evento</button>
    <ul>
      <li v-for="(tarefa, index) in tarefas" :key="index">{{ tarefa }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TasksComponent',
  props: ['titulo', 'tarefas'],
  emits: ['mechama'],
  data() {
    return {
      tarefa: ''
    }
  },
  methods: {
    // chamaPai() {
    //   alert('chama Pai')
    //   this.$emit('mechama', 'Param 1', 'Param 2')
    // }
    chamaPai() {
      this.$emit('mechama', this.tarefa)
      this.tarefa = ''
    }
  }
}
</script>

<style scoped>

</style>