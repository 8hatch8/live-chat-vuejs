<template>
  <div class="container">
    <Navbar />
    <ChatWindow :messages="messages" />
    <NewChatForm />
  </div>
</template>

<script>
import axios from 'axios'
import ActionCable from 'actioncable'
// Components
import Navbar from "../components/Navbar.vue"
import ChatWindow from "../components/ChatWindow.vue"
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
    // RailsのActionCableとコネクションを確立
    const cable = ActionCable.createConsumer('ws://localhost:3000/cable')
    // RoomChannelというチャネルと接続
    this.messageChannel = cable.subscriptions.create('RoomChannel', {
      // 接続時の処理
      connected: () => {
        this.getMessages()
      },
      // データ受信時
      received: () => {
        this.getMessages()
      }
    })
  },
  beforeUnmount(){ // ページ遷移・ブラウザを閉じた時（インスタンス削除前:Vue3）
    // コネクションを切断
    this.messageChannel.unsubscribe()
  }
}
</script>

<style scoped>
  
</style>