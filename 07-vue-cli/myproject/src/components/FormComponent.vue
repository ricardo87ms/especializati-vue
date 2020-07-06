<template>
  <div class="comp">
    <p>#Form Component - {{ titulo }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "Titulo do Formulario"
    };
  }
};
</script>

<style scoped>
.comp {
  border: 1px solid yellow;
  margin: 5px;
  padding: 5px;
}
</style>