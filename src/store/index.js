import { createStore } from 'vuex'

export default createStore({
  state: {
  prods: null
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    products : async (context) => {
      fetch('https://rm-hoodiess.herokuapp.com/prod')
      .then(res => res.json())
      .then(data => context.state.prods = data.results)
    }
  },
  modules: {
  }
})
