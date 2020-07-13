<template>
  <div v-if="preloader" class="text-center">
    <img src="../../assets/preloader.gif" alt />
  </div>
</template>

<script>
export default {
  props: {
    preloader: {
      type: Boolean,
      required: true,
      default: false
    }
  }
};
</script>

<style scoped>
</style>