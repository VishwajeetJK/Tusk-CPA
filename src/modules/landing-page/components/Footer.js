import React from 'react';
import Logo from '../../../shared/components/Logo';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Logo size="small" />
          </div>
          <div className="footer-copyright">
            <p>© 2025 TuskCPA. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

