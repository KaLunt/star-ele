import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'

// vant组件的引入
import { Button , Tabbar, TabbarItem} from 'vant'
Vue.use(Button).use(Tabbar).use(TabbarItem)




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
