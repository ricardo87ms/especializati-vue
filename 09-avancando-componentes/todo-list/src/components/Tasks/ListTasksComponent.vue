<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="row">
      <div class="col">
        <form class="form form-inline mt-4 mb-4">
          <input
            type="text"
            class="form-control mr-2"
            v-model="filter"
            placeholder="buscar"
          />
        </form>
      </div>
      <div class="col">
        <form class="form form-inline mt-4 mb-4" @submit.prevent="submit">
          <input
            type="text"
            class="form-control mr-2"
            v-model="task.name"
            placeholder="nome"
          />
          <button type="submit" class="btn btn-primary">Adicionar</button>
        </form>
      </div>
    </div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Tarefa</th>
          <th width="180px"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in filteredItems" :key="index">
          <td>{{ task.id }}</td>
          <td>{{ task.name }}</td>
          <td class="text-center">
            <a
              href="#"
              class="btn btn-info btn-sm mr-1"
              @click.prevent="edit(index)"
              >Editar</a
            >
            <a
              href="#"
              class="btn btn-danger btn-sm"
              @click.prevent="destroy(index)"
              >Excluir</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ListTasks',
  data() {
    return {
      title: 'Listagem de Tarefas',
      tasks: [],
      task: { id: '', name: '' },
      updating: false,
      idUpdate: '',
      filter: '',
    };
  },
  methods: {
    submit() {
      if (this.updating) {
        this.update();
        return;
      }
      this.save();
    },
    save() {
      this.task.id = this.tasks.length + 1;
      this.tasks.push(this.task);
      this.clearForm();
    },
    edit(index) {
      this.task = this.tasks[index];
      this.updating = true;
      this.idUpdate = index;
    },
    update() {
      this.tasks[this.idUpdate] = this.task;
      this.updating = false;
      this.updating = '';
      this.clearForm();
    },
    destroy(index) {
      this.tasks.splice(index, 1);
    },
    clearForm() {
      this.task = { id: '', name: '' };
    },
  },
  computed: {
    filteredItems() {
      if (this.filter === '') {
        return this.tasks;
      }
      return this.tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(this.filter.toLowerCase()) > -1;
      });
    },
  },
};
</script>

<style scoped></style>
