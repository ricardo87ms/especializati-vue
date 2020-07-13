<template>
    <div class="resposta-certa">
        <h1>{{title}}</h1>
        <button @click="proximaPergunta">Próxima Pergunta</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                title: 'Acertou'
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
.resposta-certa{
    border: 2px solid green;
    padding: 5px;
}
</style>