<template>
 <v-toolbar app color="black">
   <v-toolbar-title class="headline white--text  text-uppercase mr-4">
   <v-icon large color="orange">attach_money</v-icon>
     <span >Stock</span>
     <span class="font-weight-light">Trader</span>
   </v-toolbar-title>
   <v-toolbar-items>
     <v-btn flat to="/" class="white--text">Início</v-btn>
     <v-btn flat to="/portfolio" class="white--text">Portfólio</v-btn>
     <v-btn flat to="/stocks" class="white--text">Ações</v-btn>
   </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat @click="endDay" class="white--text">Finalizar Dia</v-btn>
      <v-menu offset-y>
        <v-btn flat slot="activator" class="white--text">Salvar & Carregar</v-btn>
        <v-list>
          <v-list-tile @click="saveData">
            <v-list-tile-title >
                  Salvar Dados
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="loadDatalocal">
            <v-list-tile-title >
                Carregar Dados
           </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  <v-toolbar-title class="headline white--text  text-uppercase mr-4">
     <span >Saldo: {{ funds | currency}}</span>
   </v-toolbar-title>
 </v-toolbar>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
  methods: {
    ...mapActions(["randomizeStocks", "loadData"]),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const { funds, stockPortfolio, stocks } = this.$store.getters;

      this.$http.put("data.json", { funds, stockPortfolio, stocks });
    },
    loadDatalocal() {
      this.loadData();
    },
  },
};
</script>

<style>
</style>
