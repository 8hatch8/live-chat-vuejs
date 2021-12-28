// パスに応じて表示するコンポーネントを切り替える（SPA）
import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const routes = []

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
