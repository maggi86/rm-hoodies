import {
  createStore
} from "vuex";
import router from "@/router";
export default createStore({
  state: {
    user: null,
    prods: null,
    prod: null
  },
  getters: {},
  mutations: {
    setUser(state, User) {
      state.user = User;
    },
  },
  actions: {
    register: async (context, payload) => {
      const {
        username,
        email,
        password
      } = payload;
      let response = await fetch("https://rm-hoodiess.herokuapp.com/register", {
        method: "POST",
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
      });
      const userData = await response.json();
      context.commit("setUser", userData);
      console.log(userData);
      router.push("/login");
    },
    // login: async (context, data) => {
    //   const { email, password } = data;
    //   const response = await fetch(
    //     `https://rm-hoodiess.herokuapp.com/users?email=${email}&password=${password}`
    //   );
    //   const userData = await response.json();
    //   context.commit("setUser", userData[0]);
    //   router.push("/products");
    // },

    login: async (context, data) => {
      // const { email, password } = data;
      console.log("Hi")
      fetch(`https://rm-hoodiess.herokuapp.com/login`, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.msg)
          let user = data.msg
          context.commit("setUser", user)
        })
        setTimeout(() => {router.push("/all")},3000)
    },
    logout: async (context) => {
      context.commit("setUser", null);
      router.push("/");
    },
    products: async (context) => {
      fetch("https://rm-hoodiess.herokuapp.com/products")
        .then((res) => res.json())
        .then((data) => (context.state.prods = data.results));
    },
    getProduct: async (context, id) => {
      fetch("https://rm-hoodiess.herokuapp.com/products/:id")
        .then((res) => res.json())
        .then((data) => (context.state.prod = data.results));
    },
    getCart: async (context, id) => {
      fetch("https://rm-hoodiess.herokuapp.com/users/:id/cart")
        .then((res) => res.json())
        .then((data) => (context.state.prod = data.results));
    },
  },
  modules: {},
});