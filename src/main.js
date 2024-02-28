import './app.css'
import './prism.css'
import '../prism.js'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
})

export default app
