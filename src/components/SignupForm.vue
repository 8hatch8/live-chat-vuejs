<template>
  <h2>アカウント新規登録</h2>
  <form @submit.prevent="signUp">
    <input type="text" required placeholder="名前" v-model="name">
    <input type="email" required placeholder="メールアドレス" v-model="email">
    <input type="password" required placeholder="パスワード" v-model="password">
    <input type="password" required placeholder="もう一度パスワードを入力" v-model="passwordConfirmation">
    <button>登録する</button>

    <ul v-for="error in errors">
      <li class="error">{{ error }}</li>
    </ul>

  </form>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      name:                 "",
      email:                "",
      password:             "",
      passwordConfirmation: "",
      errors:               [],
    }
  },
  methods:{
    async signUp(){
      this.errors = []
      try{
        const res = await axios.post('http://localhost:3000/auth', {
          // パラメータ
          name:                   this.name,
          email:                  this.email,
          password:               this.password,
          password_confirmation:   this.passwordConfirmation
          // railsではpassword_confirmation:として受け取る？
        })
        if(!res){
          throw new Error('アカウントを登録できませんでした')
        }
        console.log({ res })
        return res
      } catch (error) {
        this.errors = error.response.data.errors.full_messages
      }
    }
  }
}
</script>