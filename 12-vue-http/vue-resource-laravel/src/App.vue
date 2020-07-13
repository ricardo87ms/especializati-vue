<template>
  <div class="container">
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'produtos'}">Produtos</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
