<template>
  <h2>ログイン</h2>
  <form @submit.prevent="login">
    <input type="email" required placeholder="メールアドレス" v-model="email">
    <input type="password" required placeholder="パスワード" v-model="password">
    <button>ログイン</button>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      email:    "",
      password: "",
      error:    null,
    }
  },
  methods:{
    async login(){
      this.error = null
      try{
        const res = await axios.post('http://localhost:3000/auth/sign_in',{
          email:    this.email,
          password: this.password,
        })
        if(!res){
          throw new Error('ログインできませんでした')
        }
        console.log({ res })
        return res
      } catch(error) {
        console.log({ error })
        this.error ='メールアドレスかパスワードが違います'
      }
    },
  }
}
</script>

<style scoped>

</style>