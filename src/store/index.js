import {
  createStore
} from "vuex";
import router from "@/router";
export default createStore({
  state: {
    user: null,
    prods: null,
    prod: null,
  },
  getters: {},
  mutations: {
    setUser(state, User) {
      state.user = User;
    },
    sortPrice: (state) => {
      state.prods.sort((a, b) => {
        return a.price - b.price;
      });
      if (!state.asc) {
        state.prods.reverse();
      }
      state.asc = !state.asc;
    },
  },
  actions: {
    register: async (context, payload) => {
      const {
        userFname,
        userLname,
        email,
        password,
        phoneNumber
      } = payload;
      await fetch("https://rm-hoodiess.herokuapp.com/register", {
        method: "POST",
        body: JSON.stringify({
          userFname: userFname,
          userLname: userLname,
          email: email,
          password: password,
          phoneNumber: phoneNumber
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
      .then((res)=> res.json())
      .then((data)=>{
        context.commit("setUser",userData);
        alert('You Registered')
      })
      const userData = await response.json();
      // context.commit("setUser", userData);
      // console.log(userData);
      router.push("/login");
    },

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
          alert('Login in success')
        })
      setTimeout(() => {
        router.push("/all")
      }, 4000)
    },
    logout: async (context) => {
      context.commit("setUser", null);
      router.push("/");
    },

    products: async (context) => {
      fetch("https://rm-hoodiess.herokuapp.com/products")
        .then((res) => res.json())
        .then((data) => {
          console.log(data.results);
          context.state.prods = data.results;
        })
    },

    getProduct: async (context, id) => {
      fetch("https://rm-hoodiess.herokuapp.com/products/" + id)
        .then((res) => res.json())
        .then((data) => (context.state.prod = data.results));
    },
    updateProduct: async (context, id) => {
      fetch(`https://rm-hoodiess.herokuapp.com/products/` + id, {
        method: "PUT",
        body: JSON.stringify({
          title: document.getElementById("add-Title").value,
          price: document.getElementById("add-Price").value,
          description: document.getElementById("add-Description").value
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      then((res) => res.json()).then(() => context.dispatch("fetchAllWigs"));
    },
    deleteProduct: async (context, id) => {
      fetch(`https://rm-hoodiess.herokuapp.com/products/` + id, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => context.dispatch("Products"));
    },
    addProduct: async (context) => {
      fetch("https://rm-hoodiess.herokuapp.com/products", {
        method: "POST",
        body: JSON.stringify({
          images: "https://i.postimg.cc/7Y996CDs/16394481772ccf0dcc27bef2db5e73b309fc7817a9-thumbnail-900x.webp",
          title: document.getElementById("add-Title").value,
          price: document.getElementById("add-Price").value,
          description: document.getElementById("add-Description").value
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => context.dispatch("Products"));
    },
    getCart: async (context, id) => {
      fetch("https://rm-hoodiess.herokuapp.com/users/" + id + "/cart")
        .then((res) => res.json())
        .then((data) => (context.state.prod = data.results));
    },
  },
  modules: {},
});