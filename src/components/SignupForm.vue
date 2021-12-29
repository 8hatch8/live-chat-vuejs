<template>
  <h2>アカウント新規登録</h2>
  <form action="">
    <input type="text" required placeholder="名前" v-model="name">
    <input type="text" required placeholder="メールアドレス" v-model="email">
    <input type="text" required placeholder="パスワード" v-model="password">
    <input type="text" required placeholder="もう一度パスワードを入力" v-model="passwordConfirmation">
    <button>登録する</button>
  </form>
</template>

<script>
export default {
  data(){
    return{
      name:                 "",
      email:                "",
      password:             "",
      passwordConfirmation: "",
    }
  }
}
</script>