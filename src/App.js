import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import modules
import LandingPage from './modules/landing-page/LandingPage';
import HomePage from './modules/home-page/HomePage';
import Dashboard from './modules/dashboards/Dashboard';
import Agents from './modules/agents/Agents';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Authenticated routes */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/agents" element={<Agents />} />
          
          {/* Catch all route */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;