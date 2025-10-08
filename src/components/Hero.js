import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSignup = () => {
    const element = document.getElementById('signup');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-pattern"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Stop Answering Repetitive Client Questions. 
              <span className="highlight"> Start Advising.</span>
            </h1>
            <p className="hero-subtitle">
              TuskCPA is an AI-powered agent that automates routine client queries 
              and manages your tasks, so you can focus on growing your firm.
            </p>
            <div className="hero-cta">
              <button 
                className="btn btn-primary hero-btn"
                onClick={scrollToSignup}
              >
                Join the Private Beta
              </button>
              <p className="hero-microcopy">
                Early beta users get significant discounts at launch.
              </p>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-illustration">
              <div className="dashboard-mockup">
                <div className="mockup-header">
                  <div className="mockup-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="mockup-title">TuskCPA Dashboard</div>
                </div>
                <div className="mockup-content">
                  <div className="mockup-sidebar">
                    <div className="sidebar-item active">Dashboard</div>
                    <div className="sidebar-item">AI Agent</div>
                    <div className="sidebar-item">Tasks</div>
                    <div className="sidebar-item">Analytics</div>
                  </div>
                  <div className="mockup-main">
                    <div className="stats-grid">
                      <div className="stat-card">
                        <div className="stat-number">47</div>
                        <div className="stat-label">Queries Handled</div>
                      </div>
                      <div className="stat-card">
                        <div className="stat-number">92%</div>
                        <div className="stat-label">Accuracy Rate</div>
                      </div>
                    </div>
                    <div className="recent-activity">
                      <div className="activity-item">
                        <div className="activity-icon">🤖</div>
                        <div className="activity-text">
                          <div className="activity-title">AI responded to tax question</div>
                          <div className="activity-time">2 minutes ago</div>
                        </div>
                      </div>
                      <div className="activity-item">
                        <div className="activity-icon">✅</div>
                        <div className="activity-text">
                          <div className="activity-title">Task completed: Review Q1 reports</div>
                          <div className="activity-time">15 minutes ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
