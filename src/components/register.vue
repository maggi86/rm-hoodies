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
</template>
<script>
export default {
    data(){
        return {
            userFname: '',
            userLname:'',
            email : '',
            password: '',
            phoneNumber: '',
        }
    },
    methods:{
      register(){
        let user = {
          userFname: this.userFname,
            userLname:this.userLname,
            email : this.email,
            password: this.password,
            phoneNumber: this.phoneNumber,
        }
        this.$store.dispatch('register',user)
      }
    }
}
</script>