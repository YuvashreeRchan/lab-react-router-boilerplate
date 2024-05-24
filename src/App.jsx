
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contacts" element={<Contacts/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
