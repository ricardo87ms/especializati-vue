<template>
  <div>
    <h2>{{ title }}</h2>
    <p>Props: {{ id }}</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      title: "Listagem de Produtos"
    };
  }
};
</script>

<style scoped></style>
