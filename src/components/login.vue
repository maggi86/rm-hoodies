<template>
  <div class="card">
    <p>lorem</p>
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
      <div>
        <button class="btn form-control" type="submit">Login</button>
      </div>
    </form>
    <div v-if="user">Welcome {{ user.userFname }}</div>
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
.card {
  height: 600px;
  width: 500px;
  background-color: green;
}
</style>
