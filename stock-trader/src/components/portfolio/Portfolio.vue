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
import { mapGetters } from 'vuex'

export default {
    components: {
        appStock: Stock
    },
    computed: {
        ...mapGetters({
            stocks: 'stockPortfolio'
        })
    }
}
</script>

<style>
</style>
