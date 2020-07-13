<template>
    <div>
        <h1 v-text="titulo"></h1>
        <!-- <pergunta-component @mudar="mudar"></pergunta-component> -->
        <transition name="efeito" mode="out-in">
            <component @mudar="mudar" :is="componente"></component>
        </transition>
    </div>
</template>

<script>
    import PerguntaComponent from './PerguntaComponent'
    import RespostaCertaComponent from './RespostaCertaComponent'
    import RespostaErradaComponent from './RespostaErradaComponent'
    export default {
        data() {
            return {
                titulo: 'Quiz',
                componente: 'pergunta-component'
                // componente: 'resposta-certa-component'
            }
        },
        components:{
            PerguntaComponent, RespostaCertaComponent, RespostaErradaComponent
        },
        methods: {
            mudar(componente){
                this.componente = componente
            }
        }
    }

</script>
<style scoped>
.efeito-leave-active{
    animation: efeito-out 2.5s;
}
.efeito-enter-active{
    animation: efeito-in 2.5s;
}
@keyframes efeito-out {
    from {
        transform: rotateY(0deg);
    }
    to {
        transform: rotateY(90deg)
    }
}
@keyframes efeito-in {
    from {
        transform: rotateY(90deg);
    }
    to {
        transform: rotateY(0deg)
    }
}
</style>