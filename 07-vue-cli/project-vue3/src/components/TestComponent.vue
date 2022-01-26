<template>
  <div class="componente">
    <h1>{{ titulo }}</h1>
    <form-component></form-component>
  </div>
</template>

<script>
import FormComponent from './FormComponent.vue'

export default {
  name: 'TestComponent',
  components: {
    FormComponent
  },
  data () {
    return {
      titulo: "Olá mundo!!!"
    }
  }
}
</script>

<style scoped>
.componente {
  border: 1px solid green;
  margin: 5px;
  padding: 5px;
}
h1 {
 color: red;
}
</style>
