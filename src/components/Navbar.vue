<template>
  <nav>
    <div>
      <p>こんにちは、<span class="name">{{ name }}</span>さん</p>
      <p class="email">{{ email }}</p>
    </div>
    <button>ログアウト</button>
  </nav>
</template>

<script>
export default {
  data(){
    return{
      email:      localStorage.getItem('uid'),
      name:       localStorage.getItem('name')
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