<template>
    <div>
        <h2>Cliente: {{ nome }}</h2>
        <h3>E-mail: {{ email }}</h3>
        <hr>
        <h4>One way</h4>
        <input type="text" :value="nome"><br>
        <input type="text" :value="descricao"><br>
        <hr>
        <h4>Two ways</h4>
        <input type="text" v-model="nome"><br>
        <input type="text" v-model="descricao"><br>
    </div>
</template>

<script>
export default {
  data() {
      return {
          nome: 'Juliano',
          numero: '',
          email: '', 
          idade: 0,
          descricao: 'Lorem ipsum'
      }
  }
}
</script>

<style scoped>

</style>