import Vue from "vue";

// export default {
//     loadData({ commit}) {
//         Vue.prototype.$http.get('data.json')
//             .then(resp => {
//                 const data = resp.data
//                 if(data) {
//                     commit ('setStocks', data.stocks)
//                     commit ('setPortfolio', {
//                         funds: data.funds,
//                         stockPortfolio: data.stockPortfolio
//                     })
//                 }
//             })
//     }
// }

export default {
  loadData({ commit }) {
    Vue.prototype.$http.get("data.json").then((response) => {
      if (response.data) {
        const stocks = response.data.stocks;
        const funds = response.data.funds;
        const stockPortfolio = response.data.stockPortfolio;

        const portfolio = {
          stockPortfolio,
          funds,
        };

        commit("setStocks", stocks);
        commit("setPortfolio", portfolio);
      }
    });
  },
};
