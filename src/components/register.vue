<template>
  <form @submit.prevent="register">
    <input
      type="text"
      placeholder="Please enter Name"
      name="name"
      id="userFname"
      v-model="userFname"
    />
    <input
      type="text"
      placeholder="Please enter Surname"
      name="surname"
      id="userLname"
      v-model="userLname"
    />
    <input
      type="text"
      placeholder="Please enter email"
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
    <input
      type="text"
      placeholder="Please enter phoneNumber "
      name="phone"
      id="phoneNumber"
      v-model="phoneNumber"
    />
    <br />
    <div>
      <button class="btn form-control" type="submit">Register</button>
    </div>
  </form>
  <div class="container">
    <div class="row">
      <h1><i class="fa fa-lock" aria-hidden="true"></i> Sign-in</h1>
    </div>
    <br />
    <br />
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text"><i class="fas fa-user-tie"></i></span>
      </div>
      <input
        type="text"
        name=""
        class="form-control"
        placeholder="Username or Email"
      />
    </div>
    <br />
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text"><i class="fa fa-key icon"></i></span>
      </div>
      <input
        type="Password"
        name=""
        class="form-control"
        placeholder="Password"
      />
    </div>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text"><i class="fa fa-key icon"></i></span>
      </div>
      <input
        type="Password"
        name=""
        class="form-control"
        placeholder="Confirm Password"
      />
    </div>
    <br />
    <div class="checkbox">
      <label><input type="checkbox" />Remember me</label>
    </div>
    <br />
    <center>
      <div style="border: 1px solid black; height: 1px; width: 300px"></div>
    </center>
    <br />
    <button type="submit" class="btn btn-danger">
      <span class="glyphicon glyphicon-off"></span> Sign-up
    </button>
    <br />
  </div>
</template>

<style scoped>
.container {
  border: 2px solid #b9154a;
  text-align: center;
  height: 500px;
  width: 400px;
}
body {
  padding: 70px;
}
h1 {
  margin: auto;
}
.row {
  height: 90px;
  width: 396px;
  background-color: #b9154a;
}
</style>
<script>
export default {
  data() {
    return {
      userFname: "",
      userLname: "",
      email: "",
      password: "",
      phoneNumber: "",
    };
  },
  methods: {
    register() {
      let user = {
        userFname: this.userFname,
        userLname: this.userLname,
        email: this.email,
        password: this.password,
        phoneNumber: this.phoneNumber,
      };
      this.$store.dispatch("register", user);
    },
  },
};
</script>
