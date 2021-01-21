import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import services from './services'
import mixins from './mixins/global'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/lib'

Vue.use(ElementUI)
Vue.use(services)
Vue.mixin(mixins)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
