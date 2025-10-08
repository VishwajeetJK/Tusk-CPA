import React, { useState, useEffect } from 'react';
import Logo from '../../../shared/components/Logo';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo-container">
            <Logo size="small" />
          </div>
          
          <nav className="nav">
            <button 
              className="nav-link"
              onClick={() => scrollToSection('how-it-works')}
            >
              How It Works
            </button>
            <button 
              className="nav-link"
              onClick={() => scrollToSection('features')}
            >
              Features
            </button>
            <button 
              className="nav-link"
              onClick={() => scrollToSection('integrations')}
            >
              Integrations
            </button>
          </nav>
          
          <div className="header-cta">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('signup')}
            >
              Join Private Beta
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

