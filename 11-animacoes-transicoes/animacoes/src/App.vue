<template>
  <div id="app">
    <quiz-component></quiz-component>
    <hr />
    <button @click.prevent="mostrar = !mostrar">Mostrar</button>
    <transition name="teste">
      <div v-if="mostrar">Mostrando...</div>
    </transition>
  </div>
</template>

<script>
import QuizComponent from './componentes/animacoes/QuizComponent';
export default {
  name: 'app',
  data() {
    return {
      mostrar: true,
    };
  },
  components: {
    QuizComponent,
  },
};
</script>

<style>
.teste-enter-active,
.teste-leave-active {
  transition: opacity 0.5s;
}
.teste-enter,
.teste-leave-to {
  opacity: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
