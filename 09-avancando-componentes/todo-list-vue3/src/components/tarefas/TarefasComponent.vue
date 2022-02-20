<template>
  <div>
    <h2>{{ title }}</h2>

    <form class="form form-inline" @submit.prevent="save">
      <div class="form-group mb-2">
        <input type="text"
        name="tarefa"
        id="tarefa"
        placeholder="Digite a tarefa"
        class="form-control"
        v-model="tarefa.nome">
      </div>
      <button class="btn btn-primary" type="submit">Enviar</button>
    </form>

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
      ],
      tarefa: {
        id: '',
        nome: ''
      }
    };
  },
  methods: {
    save() {
      this.tarefa.id = this.tarefas.length + 1;

      this.tarefas.push(this.tarefa);

      this.tarefa = {
        id: '',
        nome: ''
      }
    }
  }
};
</script>

<style scoped></style>
