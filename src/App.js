import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import Header from './components/header'
import Home from './components/home'
import Events from './components/Events'
import Team from './components/team'
import './App.css'
import Footer from './components/footer'

const App = () => {
  return (
    <Router>
      <Header />
      <Home />
      <Events />
      <Team />
      <Footer />
    </Router>
  )
}

export default App