import Vue from 'vue'
import App from './App'
import * as Api from './api'

import './assets/css/iconfont.css';

Vue.prototype.$api = Api

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
