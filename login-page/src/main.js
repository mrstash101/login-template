// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import App from './App'
import router from './router'
<<<<<<< HEAD
import vuetify from './plugins/vuetify'
=======
import store from './store'
import lang from '/lang'
>>>>>>> 821da11c9f2b5c595df93d7a707310cf31973097

Vue.use(VeeValidate)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  vuetify,
  template: '<App/>'
})