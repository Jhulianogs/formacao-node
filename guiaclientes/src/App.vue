<template>
  <div id="app">
    <div class="form">
        <h3>Cadastro</h3>
        <div class="error" v-show="error">
            <p>Dados inválidos</p>
        </div>
        <input type="text" placeholder="Nome" v-model="nomeField"><br>
        <input type="text" placeholder="email" v-model="emailField"><br>
        <input type="number" placeholder="Idade" v-model="idadeField"><br>
        <button @click="cadastrarUsuario()">Cadastrar</button>
        <div class="buttons">
          <button class="button is-primary">Primary</button>
          <button class="button is-link">Link</button>
        </div>
    </div>
    <!-- <Cliente nome="Juliano"/>
    <Cliente nome="Marta"/>
    <Cliente nome="Pedro"/>
    <Cliente :nome="nomeCliente"/> -->
    <!-- <Cliente :cliente="clienteVitor" :showIdade="true" :showEmail="true" :isPremium="true"/>
    <Cliente :cliente="clienteJuliano" :showIdade="true" :showEmail="false" :isPremium="false"/>
    <Cliente :cliente="clienteMarta" :showIdade="false" :showEmail="true" :isPremium="false"/> -->
    <div v-for="(cliente, index) in orderClientes" :key="cliente.id">
        {{ index }}
        <cliente :cliente="cliente"  @meDelete="deletarUsuario" :showEmail="true"/>
        <hr>
        <h4>Editar</h4>
        <label for="">Nome</label>
        <input type="text" v-model="cliente.nome">
    </div>
     
  </div>
</template>

<script>
import _ from 'lodash';
import Cliente from './components/Cliente';
export default {
  name: 'App',
  data() {
    return {
        error: false,
        nomeField: '',
        emailField: '',
        idadeField: '',

        nomeCliente: 'Juliano Souza',
        clientes: [
            {
                id: 1,
                nome: 'Vitor',
                email: 'fdskafdsaklf@email.com.br',
                idade: '22'
            },
            {
                id: 2,
                nome: 'Juliano',
                email: 'jlifdasf@email.com.br',
                idade: '35'
            },
            {
                id: 3,
                nome: 'Marta',
                email: 'marta@email.com.br',
                idade: '29'
            }
        ],
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
    Cliente
  },
  methods: {
      cadastrarUsuario: function() {
          if (this.nomeField == ''|| this.emailField == '' || this.nomeField.length < 3) {
            this.error = true;
          } else {
            this.clientes.push({
                nome: this.nomeField,
                email: this.emailField,
                idade: this.idadeField,
                id: Date.now()
            });
            this.nomeField = '';
            this.emailField = '';
            this.idadeField = '';
            this.error = false;
        }
      }, 
      deletarUsuario: function($event) {
        console.log('receb');
        console.log($event);
        // $event.component.isPremium =true;
        var id = $event.idCliente;
        this.clientes = this.clientes.filter(cliente => cliente.id != id);
        
        // console.log(id);
        // $event.component.testar();
      }
  },
  computed: {
    orderClientes: function() {
      
      return _.orderBy(this.clientes, ['nome'], ['asc'])
    }
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
