// main.js: エントリーポイント
// 各ファイルから読み込みを行う
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 共通CSS
import "./assets/main.css"
// いいねアイコン
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart} from '@fortawesome/free-solid-svg-icons'

// Vueインスタンスの生成
library.add(faHeart)
createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
