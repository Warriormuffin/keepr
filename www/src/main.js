// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import io from 'socket.io-client'

Vue.config.productionTip = false

let socket = io('http://localhost:3000')

socket.on('CONNECTED', function (data) {
  console.log(data)
  socket.emit('update', {})
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
