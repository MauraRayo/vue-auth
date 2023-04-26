<template>
 <form @submit.prevent="hadleSubmit">
  <h2>Sign Up</h2>

  <div class="form-group">
    <label>First name</label>
    <input type="text" class="form-control" v-model="first_name" placeholder="First name">
  </div>

  <div class="form-group">
    <label>Last Name</label>
    <input type="text" class="form-control" v-model="last_name" placeholder="Last Name">
  </div>
 
  <div class="form-group">
    <label>Email</label>
    <input type="email" class="form-control"  v-model="email" placeholder="Email">
  </div>

  <div class="form-group">
    <label>password</label>
    <input type="password" class="form-control" v-model="password" placeholder="Password">
  </div>

  <div class="form-group">
    <label>Confirm password </label>
    <input type="password" class="form-control" v-model="password_confirm" placeholder="Confirm assword">
  </div>
 
   <button class="btn btn-primary btn-block"> Sign Up</button>
</form>

</template>

<script>
export default{
    name: 'Register',
    data(){
        return{
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            password_confirm: ''

        }

    },

    methods:{
        hadleSubmit(){
            const data = {
                first_name      : this.first_name,
                last_name       : this.last_name,
                email           :this.email,
                password        : this.password,
                password_confirm: this.password_confirm
            }


            // e.preventDefault()
            console.log(data)
        }
    }
}

</script>