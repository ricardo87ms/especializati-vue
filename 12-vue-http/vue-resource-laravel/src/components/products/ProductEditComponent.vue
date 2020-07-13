<template>
  <div>
    <h1>{{ title }}</h1>
    <pre-loader-component :preloader="loading"></pre-loader-component>
    <form @submit.prevent="updateProduct" v-if="!loading">
      <div class="form-group">
        <label for="name">Nome</label>
        <input
          :class="['form-control', {'is-invalid': errors.name}]"
          type="text"
          v-model="product.name"
          id="name"
        />
        <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div>
      </div>
      <div class="form-group">
        <label for="description">Descrição</label>
        <textarea
          :class="['form-control', {'is-invalid': errors.description}]"
          cols="30"
          rows="10"
          id="description"
          v-model="product.description"
        ></textarea>
        <div class="invalid-feedback" v-if="errors.description">{{ errors.description[0] }}</div>
      </div>
      <button type="submit" class="btn btn-warning">Alterar</button>
    </form>
  </div>
</template>

<script>
import PreLoaderComponent from "../general/PreLoaderComponent";

export default {
  props: {
    id: {
      required: true,
      default: ""
    }
  },
  data() {
    return {
      title: "Editar Produtos",
      product: {
        name: "",
        description: ""
      },
      errors: {},
      loading: false
    };
  },
  created() {
    return this.getProduct();
  },
  methods: {
    getProduct() {
      this.loading = true;
      this.$http
        .get(`http://localhost:8000/api/v1/products/${this.id}`)
        .then(
          response => {
            this.product = response.body;
          },
          error => {
            if (error.status === 404) {
              alert("Produto não encontrado!!");
              this.$router.push("/produtos");
            }
            // console.log(error);
          }
        )
        .finally(() => {
          this.loading = false;
          console.log("Finalizado");
        });
    },
    updateProduct() {
      this.loading = true;
      this.$http
        .put(`http://localhost:8000/api/v1/products/${this.id}`, this.product)
        .then(
          response => {
            console.log(response);
            this.$router.push("/produtos");
          },
          error => {
            if (error.status === 422) {
              this.errors = error.body.errors;
              console.log(this.errors.name);
            }
            // console.log(error);
          }
        )
        .finally(() => {
          this.loading = false;
          console.log("Finalizado");
        });
    }
  },
  components: {
    PreLoaderComponent
  }
};
</script>

<style scoped>
</style>