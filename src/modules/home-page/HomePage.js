import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <img src="/tusk-cpa-logo.png" alt="TuskCPA" />
            </div>
            <nav className="nav">
              <Link to="/home" className="nav-link active">Home</Link>
              <Link to="/dashboard" className="nav-link">Dashboard</Link>
              <Link to="/agents" className="nav-link">Agents</Link>
            </nav>
            <div className="user-menu">
              <span className="user-name">Welcome, John</span>
              <button className="btn btn-secondary">Logout</button>
            </div>
          </div>
        </div>
      </header>

      <main className="home-main">
        <div className="container">
          <div className="welcome-section">
            <h1>Welcome to TuskCPA</h1>
            <p>Your AI-powered accounting practice management platform</p>
          </div>

          <div className="quick-actions">
            <div className="action-card">
              <div className="action-icon">📊</div>
              <h3>View Dashboard</h3>
              <p>Monitor your practice performance and metrics</p>
              <Link to="/dashboard" className="btn btn-primary">Go to Dashboard</Link>
            </div>

            <div className="action-card">
              <div className="action-icon">🤖</div>
              <h3>Manage Agents</h3>
              <p>Configure and monitor your AI agents</p>
              <Link to="/agents" className="btn btn-primary">Manage Agents</Link>
            </div>

            <div className="action-card">
              <div className="action-icon">📈</div>
              <h3>Analytics</h3>
              <p>View detailed reports and insights</p>
              <button className="btn btn-secondary">View Analytics</button>
            </div>
          </div>

          <div className="recent-activity">
            <h2>Recent Activity</h2>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon">✅</div>
                <div className="activity-content">
                  <h4>Tax question answered</h4>
                  <p>AI agent responded to client query about Q4 deductions</p>
                  <span className="activity-time">2 hours ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">📋</div>
                <div className="activity-content">
                  <h4>Task completed</h4>
                  <p>Monthly financial review for ABC Corp</p>
                  <span className="activity-time">1 day ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">🔗</div>
                <div className="activity-content">
                  <h4>Integration updated</h4>
                  <p>QuickBooks connection refreshed successfully</p>
                  <span className="activity-time">3 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
