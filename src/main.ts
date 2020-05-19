import Vue from 'vue'

import '@/styles/index.scss'
import SvgIcon from 'vue-svgicon'
import '@/plugins/axios'
import '@/plugins/element.js'
import '@/icons/components'

import App from './App.vue'
import router from '@/router'
import store from './store'
// import common from '@/utils/common'
import './registerServiceWorker'
import '@/permission'

import LicenseKeyboard from 'vue-license-keyboard';
import 'vue-license-keyboard/lib/vue-license-keyboard.css';
Vue.use(LicenseKeyboard);

Vue.config.productionTip = false

Vue.use(SvgIcon, {
    tagName: 'svg-icon',
    defaultWidth: '1em',
    defaultHeight: '1em'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
