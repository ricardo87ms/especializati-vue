<template>
  <div>
    <h1>{{ titulo }}</h1>
    <hr>
    <input type="text" placeholder="Nome" v-model="userData.name">
    {{ userData.name }}
    <hr>
    <input type="email" placeholder="E-mail" v-model="userData.email">
    {{ userData.email }}
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
export default {
  name: 'FormComponent',
  data() {
    return {
      titulo: 'Trabalhando com Formulário',
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
  }

}
</script>

<style scoped>

</style>