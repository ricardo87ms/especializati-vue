<template>
  <div>
    <h2>{{ title }}</h2>

    <!-- <form class="form form-inline">
      <input type="text" name="tarefa" id="tarefa" placeholder="Digite a tarefa" class="form-control">
      <button cla>Enviar</button>
    </form> -->

    <table class="table">
      <thead>
        <th>Id.</th>
        <th>Nome</th>
        <th width="150px">Ações</th>
      </thead>
      <tbody>
        <tr v-for="(tarefa, index) in tarefas" :key="index">
          <td>{{ tarefa.id }}</td>
          <td>{{ tarefa.nome }}</td>
          <td>
            <a href="" class="btn btn-warning btn-sm">Editar</a> |
            <a href="" class="btn btn-danger btn-sm">Deletar</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TarefasComponent',
  data() {
    return {
      title: 'Listagem de Tarefas',
      tarefas: [
        {id: 1, nome: 'Teste de tarefas'}
      ]
    }
  }
}
</script>

<style scoped>

</style>