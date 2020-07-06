<template>
  <div id="app" class="comp">
    <h1>Teste {{ msg }}</h1>
    <teste-component></teste-component>
    <form-component></form-component>
    <tasks-component></tasks-component>
  </div>
</template>

<script>
import TesteComponent from "./components/TesteComponent";
import FormComponent from "./components/FormComponent";
import TasksComponent from "./components/TasksComponent";

export default {
  name: "app",
  data() {
    return {
      msg: "Olá mundo!!!!"
    };
  },
  components: {
    TesteComponent,
    FormComponent,
    TasksComponent
  }
};
</script>

<style>
.comp {
  border: 1px solid red;
  margin: 5px;
  padding: 5px;
}
</style>
