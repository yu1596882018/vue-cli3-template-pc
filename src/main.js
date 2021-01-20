import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixins from './mixins/global'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/lib'

Vue.use(ElementUI)
Vue.mixin(mixins)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
