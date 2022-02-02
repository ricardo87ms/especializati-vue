<template>
  <div>

   <h1>{{ titulo }}</h1>

    <hr>
    <input type="text" placeholder="Nome" v-model="userData.name" @blur="v$.userData.name.$touch">
    <p v-if="v$.userData.name.$error">Name field has an error.</p>
    {{ userData.name }}

    <hr>
    <div :class="{ 'is-danger' : v$.userData.email.$error } ">
      <input type="email" placeholder="E-mail" v-model="userData.email" @blur="v$.userData.email.$touch">
      <div v-if="v$.userData.email.$error">
        <p v-for="(error, index) in v$.userData.email.$errors" :key="index">{{ error.$message }}</p>
      </div>
      {{ userData.email }}
    </div>

    <hr>
    <input type="number" placeholder="Idade" v-model="userData.age">
    {{ userData.age }}

    <hr>
    <input type="radio" name="sex" value="M" v-model="userData.sex"> Masculino  |
    <input type="radio" name="sex" value="F" v-model="userData.sex"> Feminino
    <p v-if="userData.sex">Sexo selecionado: {{ userData.sex }}</p>

    <hr>
    <select v-model="userData.state">
      <option value="">Selecione o Estado</option>
      <option value="MG">Minas Gerais</option>
      <option value="SP">São Paulo</option>
      <option value="RJ">Rio de Janeiro</option>
    </select>
    <p v-if="userData.state">Estado selecionado: {{ userData.state }}</p>

    <hr>
    <label for="agree">Concordo com os termos</label>
    <input type="checkbox" id="agree" v-model="terms">
    {{ terms }}

    <hr>
    <textarea cols="30" rows="10" v-model="description"></textarea>
    <!-- <div style="white-space: pre;" v-html="description"></div> -->
    <pre v-html="description"></pre>

    <hr>
    <button type="submit">Enviar Agora</button>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
  name: 'FormComponent',
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      titulo: 'Trabalhando com Formulário',
      teste: '',
      userData: {
        name: '',
        email: '',
        age: '',
        sex: '',
        state: ''
      },
      terms: true,
      description: ''
    }
  },
  validations () {
    return {
      userData: {
        name: { required },
        email: { required, email }
      }
    }
  }
}
</script>

<style scoped>
  .is-danger {border: 1px solid red}
</style>