import React from 'react'
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom'
import Contact from '../components/Contact'
import Home from '../components/Home'

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default Routers