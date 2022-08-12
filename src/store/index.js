import { createStore } from 'vuex'

export default createStore({
  state: {
  prods: null,
  prod: null
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    products : async (context) => {
      fetch('https://rm-hoodiess.herokuapp.com/products')
      .then(res => res.json())
      .then(data => context.state.prods = data.results)
    },

    getProduct: async (context, id) => {
      fetch('https://rm-hoodiess.herokuapp.com/products/:id')
      .then(res => res.json())
      .then(data => context.state.prod = data.results)
    }
  },
  modules: {
  }
})
