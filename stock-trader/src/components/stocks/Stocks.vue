<template>
  <v-layout row wrap>
    <app-stock
            v-for="stock in stocks"
            :stock="stock"
            :key="stock.id" />
  </v-layout>
</template>

<script>
import Stock from './Stock'
export default {
    components: { 
      appStock: Stock
       },
    computed: {
        stocks() {
            return this.$store.getters.stocks
        }
    }
}
</script>

<style>

</style>