import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Menu from './pages/Menu'
import Reservations from './pages/Reservations'
import './App.css';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
      </Router>
  );
}

export default App;
