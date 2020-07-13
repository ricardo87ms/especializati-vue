<template>
  <div>
    <h1>{{ title }}</h1>

    <div class="row">
      <div class="col">
        <router-link :to="{ name: 'produtos/create'}" class="btn btn-primary mb-3">Novo</router-link>
      </div>

      <div class="col">
        <product-search-component @search="searchProduct"></product-search-component>
      </div>
    </div>

    <pre-loader-component :preloader="loading"></pre-loader-component>

    <div class="alert alert-danger text-center" v-if="confirmDelete">
      <h2>Deseja realmente deletar?</h2>
      <hr />
      <button class="btn btn-danger" @click.prevent="deleteProduct">Deletar Agora</button>
    </div>

    <div v-if="!loading">
      <table class="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products.data" :key="index">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.description }}</td>
            <td class="text-center">
              <router-link
                :to="{ name: 'produtos.edit', params: {id: product.id}}"
                class="btn btn-info btn-sm mr-2"
              >Editar</router-link>
              <a
                href="#"
                @click.prevent="confirmDeleteProduct(product.id)"
                class="btn btn-danger btn-sm"
              >Deletar</a>
            </td>
          </tr>
        </tbody>
      </table>
      <pagination-component :pagination="products" :offset="offset" @paginate="getProducts"></pagination-component>
    </div>
  </div>
</template>

<script>
import PaginationComponent from "../general/PaginationComponent";
import PreLoaderComponent from "../general/PreLoaderComponent";
import ProductSearchComponent from "./ProductSearchComponent";

export default {
  data() {
    return {
      title: "Página de Produtos",
      products: {
        current_page: 1,
        last_page: 1,
        total: 0,
        per_page: 10,
        from: 0,
        to: 0,
        data: []
      },
      loading: false,
      offset: 4,
      confirmDelete: false,
      idProductDelete: 0,
      filter: ""
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts(page) {
      this.loading = true;
      this.$http
        .get(
          `http://localhost:8000/api/v1/products?page=${page}&filter=${this.filter}`
        )
        .then(
          response => {
            this.products = response.body;
          },
          error => {
            console.log(error);
          }
        )
        .finally(() => {
          this.loading = false;
          console.log("Produtos!!!");
        });
    },
    confirmDeleteProduct(id) {
      this.confirmDelete = true;

      this.idProductDelete = id;
    },
    deleteProduct() {
      this.loading = true;
      this.confirmDelete = false;
      this.$http
        .delete(`http://localhost:8000/api/v1/products/${this.idProductDelete}`)
        .then(
          () => {
            this.getProducts();
          },
          error => {
            this.loading = false;
            console.log(error);
            alert("Erro");
          }
        )
        .finally(() => {
          this.idProductDelete = 0;
        });
    },
    searchProduct(filter) {
      this.filter = filter;

      this.getProducts();
    }
  },
  components: {
    PaginationComponent,
    PreLoaderComponent,
    ProductSearchComponent
  }
};
</script>

<style scoped>
</style>