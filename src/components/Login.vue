<template>
<form @submit.prevent="hadleSubmit">
  <h2>Login</h2>

  <div class="form-group">
    <label>Email</label>
    <input type="email" class="form-control" v-model="email" placeholder="Email">
  </div>

  <div class="form-group">
    <label>password</label>
    <input type="password" class="form-control" v-model="password" placeholder="Password">
  </div>
 
   <button class="btn btn-primary btn-block"> Login</button>
</form>

</template>

<script>
export default {
    name: 'Login',
    data(){
      return{
        email: '',
        password: ''
      }
    },
    methods:{
      async hadleSubmit(){
        const response = await axios.post('login' ,{
          email   : this.email,
          password: this.password
        });
       localStorage.setItem('token' , response.data.token)
      }
    }
}



</script>