// パスに応じて表示するコンポーネントを切り替える（SPAの基礎）
import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Welcome from '../views/Welcome'
import Chatroom from '../views/Chatroom'

const routes = [
  {
    path:       '/',
    name:       'Welcome', // ページの名前
    component:  Welcome // vueファイルの指定（上で定義）
  },
  {
    path:       '/chatroom',
    name:       'Chatroom',
    component:  Chatroom
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
