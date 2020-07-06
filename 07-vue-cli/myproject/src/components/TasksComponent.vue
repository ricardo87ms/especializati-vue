<template>
  <div class="comp">
    <h2>Compente de Tarefas</h2>
    <table>
      <thead>
        <tr>
          <td>Task</td>
          <td>Completada</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td>{{ task.name }}</td>
          <td>{{ task.completed ? 'Sim' : 'Não' }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          name: "Lavar louça",
          completed: true
        },
        {
          name: "Limpar a casa",
          completed: false
        },
        {
          name: "Ir trabalhar",
          completed: false
        }
      ]
    };
  }
};
</script>

<style scoped>
.comp {
  border: 1px solid green;
  margin: 5px;
  padding: 5px;
}
</style>