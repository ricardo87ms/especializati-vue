<template>
  <div>
    <form @submit.prevent="saveData">
      <ValidationProvider rules="required|min:3|max:10" v-slot="{ errors }">
        <input
          type="text"
          v-model="UserData.name"
          name="nome"
          placeholder="Nome"
        />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
      <hr />

      <ValidationProvider rules="required|email" v-slot="{ errors }">
        <input
          type="text"
          v-model="UserData.email"
          name="email"
          placeholder="E-mail"
        />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
      <hr />

      <input type="number" placeholder="Idade" v-model="UserData.age" />
      {{ UserData.age }}
      <hr />

      <input type="radio" name="sex" value="M" v-model="UserData.sex" />
      Masculino |
      <input type="radio" name="sex" value="F" v-model="UserData.sex" />
      Feminino
      <p v-if="UserData.sex">{{ UserData.sex }}</p>
      <hr />

      <select v-model="UserData.state">
        <option value>Selecione um estado</option>
        <option value="SP">São Paulo</option>
        <option value="RJ">Rio de Janeiro</option>
        <option value="MG">Minas Gerais</option>
      </select>
      <p v-if="UserData.state">{{ UserData.state }}</p>
      <hr />

      <label for="agree">Concordo com os termos</label>
      <input type="checkbox" id="agree" v-model="terms" />
      <hr />

      <textarea cols="30" rows="10" v-model="description"></textarea>
      <div>
        <pre>{{ description }}</pre>
      </div>
      <hr />

      <button type="submit">Enviar</button>
    </form>

    <div v-if="isSubmited">
      {{ UserData }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      UserData: {
        name: '',
        email: '',
        age: '',
        sex: '',
        state: '',
      },
      terms: true,
      description: '',
      isSubmited: false,
    };
  },
  methods: {
    saveData() {
      this.isSubmited = true;
    },
  },
};
</script>

<style scoped></style>
