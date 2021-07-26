import createApp from './app'

export default function() {
  const { app } = createApp({
    /*...*/
  })
// app.config.compilerOptions.isCustomElement = tag => tag.startsWith('amp-')
  return {
    app
  }
}
