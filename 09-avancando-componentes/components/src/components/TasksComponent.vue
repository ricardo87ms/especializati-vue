<template>
  <div>
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
    <input type="text" v-model="task" />
    <button @click="chamaPai">Clique aqui</button>
  </div>
</template>

<script>
export default {
  props: ["title", "items"],
  data() {
    return {
      task: ""
    };
  },
  methods: {
    chamaPai() {
      alert(this.task);
      this.$emit("chamandoPai", this.task);
    }
  }
};
</script>

<style>
</style>