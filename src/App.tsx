import React from 'react'
import logo from './assets/logo.webp'
import './scss/app.scss'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h2>WorkAround App</h2>
        <p>We're currently developing an application for digital nomads here.</p>
        <p>Come back soon...</p>
        <div className="social-media">
          <a href="https://github.com/WorkAroundHQ">GitHub</a>
          <a href="https://twitter.com/WorkAroundHQ">Twitter</a>
        </div>
      </header>
    </div>
  )
}

export default App
