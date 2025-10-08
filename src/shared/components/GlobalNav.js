import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import './GlobalNav.css';

const GlobalNav = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="global-nav">
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo">
            <Link to="/home">
              <Logo size="small" />
            </Link>
          </div>
          
          <nav className="nav-links">
            <Link 
              to="/home" 
              className={`nav-link ${isActive('/home') ? 'active' : ''}`}
            >
              Dashboard
            </Link>
            <Link 
              to="/agents" 
              className={`nav-link ${isActive('/agents') ? 'active' : ''}`}
            >
              Agents
            </Link>
          </nav>
          
          <div className="user-menu">
            <button 
              className="user-icon"
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            >
              <span className="user-initials">JD</span>
            </button>
            
            {isUserMenuOpen && (
              <div className="user-dropdown">
                <div className="dropdown-item">
                  <span className="dropdown-icon">👤</span>
                  Profile Settings
                </div>
                <div className="dropdown-item">
                  <span className="dropdown-icon">🔗</span>
                  Integrations Management
                </div>
                <div className="dropdown-item">
                  <span className="dropdown-icon">💳</span>
                  Billing
                </div>
                <div className="dropdown-divider"></div>
                <div className="dropdown-item">
                  <span className="dropdown-icon">🚪</span>
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default GlobalNav;
