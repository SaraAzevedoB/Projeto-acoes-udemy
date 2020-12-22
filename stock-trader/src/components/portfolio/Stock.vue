<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-col cols="12">
      <v-card color="teal darken-1" dark elevation = "9" outlined>
        <v-card-title class="headline">
          <span><v-icon>local_offer</v-icon></span>
          <span class="mx-5">{{ stock.name }} </span>
        </v-card-title>
         <v-divider color="white"></v-divider>
        <v-card-title class="Subtitle" >(Preço: {{ stock.price | currency }})</v-card-title>
        <v-card-actions>
          <v-text-field 
              label="Quandtidade" 
              type="number" 
              class="mx-4" 
              :error=" insufficienteQunatity"
              v-model.number="quantity"/>
              <v-btn 
              class="teal darken-4 white--text" 
              :disabled=" insufficienteQunatity || quantity <= 0 || !Number.isInteger(quantity)"
               @click="sellStock">{{ insufficienteQunatity ? 'Insuficiente' : 'Vender'}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-flex>
</template>


<script>
import { mapActions } from 'vuex'
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    insufficienteQunatity() {
      return this.quantity > this.stock.quantity;
    },
  },
  methods: {
     ...mapActions({
            placeSellOrder: 'sellStock'
        }),
    sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }
      this.placeSellOrder(order)
      this.quantity = 0;
    },
  },
};
</script>

<style>
</style>
