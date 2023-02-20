import { createStore } from "vuex";
import authModule from './authModule'
import catModule from "./catModule";
import recordModule from "./recordModule";
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async fetchCurrency({dispatch}, currencyArr){
      const key = process.env.VUE_APP_CURRENCY,
            url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=RUB,USD,EUR,UAH&tsyms=RUB`
      const currencies = await fetch(url)
      return currencies.json()
    }
  },
  modules: {
    auth: authModule,
    cat: catModule,
    record: recordModule
  },
});
