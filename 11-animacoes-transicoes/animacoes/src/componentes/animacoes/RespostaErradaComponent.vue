<template>
    <div class="resposta-errada">
        <h1>{{title}}</h1>
        <button @click="proximaPergunta">Próxima Pergunta</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                title: 'Errou'
            }
        },
        methods: {
            proximaPergunta(){
                this.$emit('mudar','pergunta-component')
            }
        }
    }

</script>
<style scoped>
.resposta-errada{
    border: 2px solid red;
    padding: 5px;
}
</style>