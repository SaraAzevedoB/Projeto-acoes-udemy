import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store/store'

Vue.prototype.$axios = axios

Vue.config.productionTip = false

Vue.filter('currency', (value) => {
	return 'R$ ' + value.toLocaleString()
  })
  

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
