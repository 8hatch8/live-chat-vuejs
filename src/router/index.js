// パスに応じて表示するコンポーネントを切り替える（SPA）
import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Welcome from '../views/Welcome'

const routes = [
  {
    path:       '/',
    name:       'Welcome', // ページの名前
    component:  Welcome // vueファイルの指定（上で定義）
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
