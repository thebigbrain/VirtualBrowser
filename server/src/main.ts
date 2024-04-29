import Vue from 'vue'
import Clipboard from 'v-clipboard'
import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import App from './App.vue'
import SvgIcon from './components/SvgIcon/index.vue' // svg component

import store from './store'
import router from './router'

import i18n from './lang' // internationalization
import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' // global filters
import { createApp } from 'vue'

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}
const app = createApp(App)

app.use(Clipboard)
app.use(ElementPlus)
app.use(i18n)
app.use(store)
app.use(router)

app.component('SvgIcon', SvgIcon)

app.mount('#app')
