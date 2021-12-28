<template>
    <div :class="{'cliente': !isPremium, 'cliente-premium': isPremium}">
        <!-- <h4>Nome: {{ nome}}</h4>
        <hr>
        <p>{{ descricao}}</p>
        <hr>
        <p>E-mail: {{ email}}</p> -->
        <!-- ======================= -->
        <h5>Cliente Objeto</h5>
        <p>{{cliente.nome}}</p>
        <p v-if="showIdade == true">Idade {{ cliente.idade }}</p>
        <p v-else>Sem idade</p>
        <p v-show="showEmail === true">E-mail {{cliente.email}}</p>
    </div>
</template>

<script>
export default {
  data() {
      return {
        //   numero: '',
        //   email: 'email@testes.com.br', 
        //   descricao: 'Lorem ipsum',
        // isPremium: false,
      }
  },
  props: {
      nome: String,
      cliente: Object,
      idade: Number,
      showIdade: Boolean,
      showEmail: Boolean,
      isPremium: Boolean
  }
}
</script>

<style scoped>
    .cliente {
        background: rgb(245, 242, 242);
        padding: 5px;
        margin: 3px;
        border: 1px solid rgba(0,0,0,0.3);
        border-radius: 12px;
    }

    .cliente-premium {
        background: rgb(32, 31, 31);
        color: azure;
        padding: 5px;
        margin: 3px;
        border: 1px solid rgba(0,0,0,0.3);
        border-radius: 12px;
    }
</style>