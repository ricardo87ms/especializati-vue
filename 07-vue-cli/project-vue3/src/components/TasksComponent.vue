<template>
  <div class="componente">
    <table>
      <tr>
        <th>Tarefa</th>
        <th>Concluída?</th>
      </tr>
      <tr v-for="(task, index) in tasks" :key="index">
        <td>{{ task.name }}</td>
        <td>{{ task.completed ? 'Sim' : 'Não' }}</td>
      </tr>
    </table>
  </div>
</template>e
<script>
export default {
  name: 'TasksComponent',
  data () {
    return {
      tasks: [
        {name: 'Lava Louça', completed: true},
        {name: 'Lava Roupa', completed: false},
        {name: 'Lava Carro', completed: false},
        {name: 'Lava Casa', completed: true},
      ]
    }
  }
}
</script>

<style scoped>
.componente {
  border: 1px solid red;
  margin: 5px;
  padding: 5px;
}
</style>