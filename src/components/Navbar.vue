<template>
  <nav>
    <div>
      <p>Hello, UserNameさん</p>
      <p class="email">ログイン：test@email.com</p>
    </div>
    <button>ログアウト</button>
  </nav>
</template>

<script>
export default {
  date(){
    return{

    }
  }
}
</script>

<style scoped>
  nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444; 
  }
  nav p.email {
    font-size: 14px;
    color: #999;
  }
</style>