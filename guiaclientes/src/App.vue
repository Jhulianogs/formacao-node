<template>
  <div id="app">
    <!-- <Cliente nome="Juliano"/>
    <Cliente nome="Marta"/>
    <Cliente nome="Pedro"/>
    <Cliente :nome="nomeCliente"/> -->
    <Cliente :cliente="clienteVitor" :showIdade="true" :showEmail="true" :isPremium="true"/>
    <Cliente :cliente="clienteJuliano" :showIdade="true" :showEmail="false" :isPremium="false"/>
    <Cliente :cliente="clienteMarta" :showIdade="false" :showEmail="true" :isPremium="false"/>
  </div>
</template>

<script>

import Cliente from './components/Cliente';
export default {
  name: 'App',
  data() {
    return {
        nomeCliente: 'Juliano Souza',
        clienteVitor: {
            nome: 'Vitor',
            email: 'fdskafdsaklf@email.com.br',
            idade: '22'
        },
        clienteJuliano: {
            nome: 'Juliano',
            email: 'jlifdasf@email.com.br',
            idade: '35'
        },
        clienteMarta: {
            nome: 'marta',
            email: 'marta@email.com.br',
            idade: '29'
        }
    }
  },
  components: {
    Cliente,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
