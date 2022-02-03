<template>
  <div>
    <h2>{{ titulo }}</h2>
    <ul>
      <li v-for="(tarefa, index) in tarefas" :key="index">{{ tarefa }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListItemsComponent',
  props: {
    titulo: {
      required: true,
      type: String,
      default: ''
    },
    tarefas: {
      required: true,
      type: Array,
    }
  },
}
</script>

<style scoped>

</style>