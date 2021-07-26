

import createApp from './app'

// client-specific bootstrapping logic...

const { app } = createApp({
  // here we can pass additional arguments to app factory
})
//  app.config.compilerOptions.isCustomElement = tag => tag.startsWith('amp-')
// this assumes App.vue template root element has `id="app"`
app.mount('#app')
