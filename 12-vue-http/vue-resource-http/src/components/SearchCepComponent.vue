<template>
  <div>
    <h1 v-text="title"></h1>
    <form @submit.prevent="submit">
      <input type="text" v-model="cep" />
      <button type="submit">Buscar</button>
    </form>
    <div v-if="error">
      <p>{{ error }}</p>
    </div>
    <div v-if="loading">
      <img src="../assets/preloader.gif" alt />
    </div>
    <div v-show="address.bairro">
      <p>Cidade: {{ address.cidade }}</p>
      <p>Bairro: {{ address.bairro }}</p>
      <p>Logradouro: {{ address.logradouro }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Busca por CEP",
      cep: "",
      address: {
        bairro: ""
      },
      loading: false,
      error: ""
    };
  },
  methods: {
    submit() {
      this.clear();
      this.$http
        .get("https://api.postmon.com.br/v1/cep/" + this.cep)
        .then(
          response => {
            this.address = response.body;
          },
          error => {
            this.error = "Erro ao consultar o cep";
            console.log(error);
          }
        )
        .finally(() => {
          this.loading = false;
          this.cep = "";
        });
    },
    clear() {
      this.error = "";
      this.address = {};
      this.loading = true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
