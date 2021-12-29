// main.js: エントリーポイント
// 各ファイルから読み込みを行う
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "./assets/main.css"

// Vueインスタンスの生成
createApp(App).use(router).mount('#app')
