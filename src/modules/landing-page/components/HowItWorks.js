import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: '🔗',
      title: 'Integrate Your Tools',
      description: 'Securely connect QuickBooks, TurboTax, Gusto, and more in minutes.'
    },
    {
      number: '02',
      icon: '🤖',
      title: 'Deploy Your AI Agent',
      description: 'Give clients a dedicated chatroom or WhatsApp assistant that instantly answers their questions.'
    },
    {
      number: '03',
      icon: '📊',
      title: 'Manage Tasks Smarter',
      description: 'Review AI-assisted answers and manage complex requests from one streamlined dashboard.'
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Focus on What Matters in <span className="highlight">3 Simple Steps</span>
          </h2>
        </div>
        
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="process-flow">
          <div className="flow-line"></div>
          <div className="flow-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

