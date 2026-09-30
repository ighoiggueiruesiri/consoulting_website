import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource-variable/bricolage-grotesque/wdth.css'
import '@fontsource-variable/hanken-grotesk'
import App from './App.jsx'
import './styles/tokens.css'
import './styles/base.css'
import './styles/sections.css'
import './styles/cookie.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
