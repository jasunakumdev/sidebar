import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import About from './About'
import Apps from './components/Apps'

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/apps" element={<Apps />} />
      </Routes>
    </Router>
  )
}

export default RouterComponent
