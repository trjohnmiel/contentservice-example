import Vue from 'vue'
import App from './App.vue'
import ContentService from "vue-contentservice"

// Froala (rich text editor) requires jQuery.
const $ = require('jquery')
window.$ = $
window.jQuery = $

require('font-awesome/css/font-awesome.min.css')
require('bulma/css/bulma.min.css')
require('vue-contentservice/dist/vue-contentservice.css')

Vue.use(ContentService, {
  //protocol: 'https',
  host: 'uat.crowdhound.io',
  //port: 443,
  version: '2.0',
  apikey: 'API10O0X1NS8FWUTO3FXKN15ZOR09',
  //froalaActivationKey: FroalaKey
  defaultIconPack: 'fa',
  debug: true
});


console.log('Main JS');
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
