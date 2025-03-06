// src/App.js

import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addexpense" element={<h2>Add Expense Page</h2>} />
          <Route path="/dashboard" element={<h2>Dashboard Page</h2>} />
          <Route path="/editexpense/:title" element={<h2>Edit Expense Page</h2>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
