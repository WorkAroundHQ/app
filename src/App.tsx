import React from 'react'
import logo from './assets/logo.webp'
import './scss/app.scss'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h2>WorkAround</h2>
        <p>Hii, we're currently developing an application for digital nomads.</p>
        <p>While we're busy with coding, please check out our <a href="https://www.workaround.world">landing page</a></p>
        <div className="social-media">
          <a href="https://github.com/WorkAroundHQ">GitHub</a>
          <a href="https://twitter.com/WorkAroundHQ">Twitter</a>
        </div>
      </header>
    </div>
  )
}

export default App
