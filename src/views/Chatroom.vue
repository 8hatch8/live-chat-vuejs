<template>
  <div class="container">
    <Navbar />
    <ChatWindow :messages="messages" />
    <NewChatForm />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import ChatWindow from "../components/ChatWindow.vue"
import axios from 'axios'
import NewChatForm from '../components/NewChatForm.vue'

export default {
  components:{ Navbar, ChatWindow, NewChatForm },
  data(){
    return{
      messages:     [],
    }
  },
  methods:{
    async getMessages(){
      try {
        const res = await axios.get("http://localhost:3000/messages", {
          headers:{
            uid:              localStorage.getItem('uid'),
            "access-token":   localStorage.getItem('access-token'),
            client:           localStorage.getItem('client')
          }
        })
        if(!res){
          throw new Error('メッセージ一覧を取得できませんでした')
        }
        this.messages = res.data
      } catch(err) {
        console.log(err)
      }
    },
  },
  mounted(){ // ライフサイクルフック:mounted -> ページが表示される直前
    this.getMessages()
  },
}
</script>

<style scoped>
  
</style>