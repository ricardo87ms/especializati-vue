<template>
  <div>
    <h2>{{ title }}</h2>
    <p>Parâmetros: {{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Listagem de Tarefas"
    };
  }
};
</script>

<style scoped></style>
