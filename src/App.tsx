import React from 'react'
import './scss/app.scss'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App
