<template>
  <div v-if="messages" class="chat-window">
    <div class="messages">
      <ul v-for="message in messages" :key="message.id">
        <li :class="{ received: message.email !==uid, send: message.email === uid }">
          <span class="name">{{ message.name }}</span>
          <div class="message" @dblclick="createLike(message.id)">
            {{ message.content }}
            {{ message.likes.length }}
          </div>
          <span class="created-at">{{ message.created_at }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props:['messages'],
  data(){
    return{
      uid:            localStorage.getItem('uid')
    }
  },
  methods:{
    async createLike(messageId){
      try{
        // axiosのPOSTメソッドでは引数(URL, パラメータ, ヘッダー情報)
        const res = await axios.post(`http://localhost:3000/messages/${messageId}/likes`, {}, {
          headers: {
            uid:            this.uid,
            "access-token": localStorage.getItem('access-token'),
            client:         localStorage.getItem('client')
          }
        })

        if(!res){
          throw new Error('いいねできませんでした')
        }

      } catch(err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
  .chat-window {
    background: white;
    padding: 30px 20px;
    border-bottom: 1px solid #eee;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  ul li {
    display: inline-block;
    clear: both;
  }
  .received {
    float: left;
  }
  .received .message {
    background: #eee;
    padding: 10px;
    display: inline-block;
    border-radius: 30px;
    margin-bottom: 2px;
    max-width: 400px;
  }
  .send {
    float: right;
  }
  .send .message {
    background: #677bb4;
    color: white;
    padding: 10px;
    display: inline-block;
    border-radius: 30px;
    margin-bottom: 2px;
    max-width: 400px;
  }
  .name {
    position: relative;
    margin-right: 6px;
    display: block;
    font-style: 13px;
  }
  .created-at {
    display: block;
    color: #999;
    font-style: 12px;
    margin-bottom: 20px;
    margin-left: 4px;
  }
  .messages {
    max-height: 400px;
    overflow: auto;
  }
</style>