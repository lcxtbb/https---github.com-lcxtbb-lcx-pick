import { createApp } from 'vue'
import App from '@/App.vue'

//引入ele插件和样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//配置ele国际化
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)

app.use(ElementPlus, {
    locale: zhCn,
})

app.mount('#app')

