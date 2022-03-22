import Vue from 'vue'
import './monitorConfigure'
import EventBus from '@yu1596882018/web-sdk/es/lib/eventBus'
import request from './request'
import directive from './directive'

Vue.use(EventBus)
Vue.use(request)
Vue.use(directive)
