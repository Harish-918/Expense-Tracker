import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import AddExpense from './components/AddExpense';
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EditExpense from './components/EditExpense';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addexpense" element={<AddExpense />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/editexpense/:title" element={<EditExpense/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
