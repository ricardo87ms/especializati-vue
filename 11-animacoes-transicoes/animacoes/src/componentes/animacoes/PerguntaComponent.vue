<template>
    <div class="card">
        <div class="card-header">
            <h2 v-text="pergunta"></h2>
        </div>
        <div class="card-body">
            <form @submit.prevent="verificaResposta">
                <input type="text" placeholder="Resposta:" v-model="resposta">
                <button type="submit">Responder</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                pergunta: 'Pergunta',
                resultado: 0,
                resposta: ''
            }
        },
        created(){
            this.gerarQuestao()
        },
        methods: {
            gerarQuestao(){
                let n1 = this.gerarNumero(1, 100)
                let n2 = this.gerarNumero(1, 100)

                this.resultado = n1 + n2

                this.pergunta = `Qual o resultado da expressão ${n1} + ${n2}?`
            },
            gerarNumero(min, max){
                return Math.round(Math.random() * (max - min)) + min
            },
            verificaResposta(){
                let componente = 'resposta-errada-component'
                if(this.resultado == this.resposta){
                    componente = 'resposta-certa-component'
                }
                this.$emit('mudar', componente)
            }
        }
    }

</script>
<style scoped>
.pergunta{
    border: 2px solid blue;
    padding: 5px;
}
</style>