<template>
    <form @submit.prevent="register">
      <input
        type="text"
        placeholder="Please enter Name "
        name="email"
        id="email"
        v-model="userFname"
      />
      <input
        type="text"
        placeholder="Please enter Surname "
        name="email"
        id="email"
        v-model="userSname"
      />
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
      <input
        type="text"
        placeholder="Please enter email "
        name="email"
        id="email"
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
            userSname:'',
            email : '',
            password: '',
            phoneNumber: '',
        }
    },
    
}
</script>