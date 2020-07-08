<template>
  <div id="app">
    <router-link to="/">Home</router-link>|
    <router-link :to="{ name: 'produtos', params: {id: 2} }">Produtos</router-link>|
    <router-link :to="{ name: 'tarefas', params: {id: 2} }">Tarefas</router-link>|
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style></style>
