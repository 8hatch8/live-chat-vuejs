// パスに応じて表示するコンポーネントを切り替える（SPAの基礎）
import { createRouter, createWebHistory } from 'vue-router'
// Views
import Welcome from '../views/Welcome'
import Chatroom from '../views/Chatroom'
// Validation
import useValidate from '../auth/validate'
const { refError, validate } = useValidate()
const requireAuth = async (to, from, next) => {
  const uid         = localStorage.getItem('uid')
  const client      = localStorage.getItem('client')
  const accessToken = localStorage.getItem('access-token')

  if(!uid || !client || !accessToken){
    console.log("ログインが確認できませんでした")
    next({ name: 'Welcome' })
    return
  }
  await validate()

  if(refError.value){
    console.log('認証に失敗しました')
    next({ name: 'Welcome' })
  } else {
    next()
  }
}

const routes = [
  {
    path:         '/',
    name:         'Welcome', // ページの名前
    component:    Welcome // vueファイルの指定（上で定義）
  },
  {
    path:         '/chatroom',
    name:         'Chatroom',
    component:    Chatroom,
    beforeEnter:  requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
