<template>
  <div class="comp">
    <h1>Componente teste</h1>
    <p>{{ texto }}</p>
    <form-component></form-component>
  </div>
</template>

<script>
import FormComponent from "./FormComponent";

export default {
  data() {
    return {
      texto: "Componente!!!"
    };
  },
  components: {
    FormComponent
  }
};
</script>

<style scoped>
p {
  color: red;
}
.comp {
  border: 1px solid orange;
  margin: 5px;
  padding: 5px;
}
</style>