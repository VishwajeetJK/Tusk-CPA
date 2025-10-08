import React from 'react';
import './Integrations.css';

const Integrations = () => {
  const integrations = [
    { name: 'Intuit QuickBooks', logo: '📊' },
    { name: 'Xero', logo: '📈' },
    { name: 'Zoho Books', logo: '📋' },
    { name: 'Intuit TurboTax', logo: '📄' },
    { name: 'Drake Tax', logo: '🧾' },
    { name: 'Gusto', logo: '💰' },
    { name: 'ADP', logo: '🏢' },
    { name: 'Expensify', logo: '💳' },
    { name: 'Bill.com', logo: '📝' },
    { name: 'Ramp', logo: '💼' }
  ];

  // Duplicate the integrations array for seamless scrolling
  const duplicatedIntegrations = [...integrations, ...integrations];

  return (
    <section id="integrations" className="integrations section-sm">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Works With the <span className="highlight">Tools You Already Use</span>
          </h2>
          <p className="section-subtitle">
            Seamlessly integrate with your existing accounting and business tools
          </p>
        </div>
        
        <div className="integrations-marquee">
          <div className="marquee-track">
            {duplicatedIntegrations.map((integration, index) => (
              <div key={index} className="integration-item">
                <div className="integration-logo">{integration.logo}</div>
                <div className="integration-name">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="integration-benefits">
          <div className="benefit-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🔒</div>
              <h3>Secure Integration</h3>
              <p>Bank-level security with encrypted data transmission and OAuth authentication</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Real-time Sync</h3>
              <p>Automatic data synchronization keeps your information up-to-date across all platforms</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🛠️</div>
              <h3>Easy Setup</h3>
              <p>Connect your tools in minutes with our guided integration process</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
