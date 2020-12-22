<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-col cols="12">
      <v-card color="cyan darken-1" dark elevation = "9" outlined >
        <v-card-title class="headline" color="green">
          <span><v-icon>shopping_cart</v-icon></span>
          <span class="mx-5">{{ stock.name }} </span>
        </v-card-title>
            <v-divider color="white"></v-divider>
        <v-card-title class="Subtitle">(Preço: {{ stock.price | currency }})</v-card-title>
        <v-card-actions>
          <v-text-field  label="Quandtidade" type="number" 
            :error="insufficienteFunds"
            v-model.number="quantity"/>
          <v-btn color="light-blue darken-4" text
            class="mx-4" 
            :disabled="insufficienteFunds || quantity <= 0 || !Number.isInteger(quantity)"
            @click="buyStock">
            {{ insufficienteFunds ? 'Insuficiente' : 'Comprar' }}
          </v-btn>    
        </v-card-actions>
      </v-card>
    </v-col>
  </v-flex>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    insufficienteFunds() {
      return this.quantity * this.stock.price > this.$store.getters.funds;
    },
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    },
  },
};
</script>

<style>
</style>
