<template>
  <div class="container">
    <div class="row">
      <h1><i class="fa fa-lock" aria-hidden="true"></i> Login</h1>
    </div>
    <form @submit.prevent="login">
      <input
        type="text"
        placeholder="Please enter email "
        name="email"
        id="email"
        v-model="email"
      />
      <br />
      <input
        type="password"
        placeholder="Please enter password"
        name="password"
        id="password"
        v-model="password"
      />
      <br />
      <center>
      <div style="border: 1px solid black; height: 1px; width: 300px"></div>
    </center>
      <div>
        <button class="btn form-control" type="submit">Login</button>
      </div>
    </form>
    <div v-if="user">
      <h2>Welcome {{ user[0].userFname }}</h2>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    login() {
      const user = {
        email: this.email,
        password: this.password,
      };
      return this.$store.dispatch("login", user);
    },
  },
};
</script>
<style scoped>
.container {
  height: 600px;
  width: 300px;
  background-color: green;
}
</style>
