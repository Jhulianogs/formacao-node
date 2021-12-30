<template>
  <div :class="{ cliente: !isPremium, 'cliente-premium': isPremium }">
    <!-- <h4>Nome: {{ nome}}</h4>
        <hr>
        <p>{{ descricao}}</p>
        <hr>
        <p>E-mail: {{ email}}</p> -->
    <!-- ======================= -->
    <h5>Cliente Objeto</h5>
    <p>{{ cliente.nome }}</p>
    <p v-if="showIdade == true">Idade {{ cliente.idade }}</p>
    <p v-else>Sem idade</p>
    <p v-show="showEmail === true">E-mail {{ cliente.email | processarEmail }}</p>
    <button @click="mudarCor($event)">Mudar cor</button>
    <button @click="emitirEventoDelete($event)">Deletar</button>
	<h4>Id especial: {{ idEspecial }}</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   numero: '',
      //   email: 'email@testes.com.br',
      //   descricao: 'Lorem ipsum',
      isPremium: false,
    };
  },
  props: {
    nome: String,
    cliente: Object,
    idade: Number,
    showIdade: Boolean,
    showEmail: Boolean,
    //   isPremium: Boolean
  },
  methods: {
    mudarCor: function ($event) {
      console.log($event);
      this.isPremium = !this.isPremium;
    },
    emitirEventoDelete: function () {
      console.log("emitir");
      this.$emit("meDelete", {
        idCliente: this.cliente.id,
        curso: "node",
        component: this,
      });
    },
    testar() {
      console.log("Testando");
    },
  },
  filters: {
    processarEmail: function (value) {
      return value.toUpperCase();
    },
  },
  computed: {
	idEspecial: function() {
		return (this.cliente.email + this.cliente.nome + this.cliente.id).toUpperCase();
	}
  }
};
</script>

<style scoped>
.cliente {
  background: rgb(245, 242, 242);
  padding: 5px;
  margin: 3px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 12px;
}

.cliente-premium {
  background: rgb(32, 31, 31);
  color: azure;
  padding: 5px;
  margin: 3px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 12px;
}
</style>