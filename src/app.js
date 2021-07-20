// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
import { createSSRApp } from 'vue'
// import { renderToString } from '@vue/server-renderer'
import App from './App.vue'

// Vue.config.productionTip = false

/* eslint-disable no-new */

/*
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
*/
/*
const app = createSSRApp({
  el: '#app',
  components: { App },
  template: '<App/>'
})
*/

export default function() {
  const app = createSSRApp(App)

  return {
    app
  }
}


// const appContent = await renderToString(app)

/*

"serve": "vue-cli-service serve",
"build": "vue-cli-service build",
"lint": "vue-cli-service lint"

*/
