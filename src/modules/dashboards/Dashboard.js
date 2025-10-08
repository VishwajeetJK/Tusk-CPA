import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [selectedCompany, setSelectedCompany] = useState('ABC Corp');

  const companies = ['ABC Corp', 'XYZ LLC', 'Smith & Associates', 'TechStart Inc'];
  
  const metrics = {
    'ABC Corp': {
      queriesHandled: 47,
      accuracyRate: 92,
      timeSaved: 24,
      clientSatisfaction: 4.8
    },
    'XYZ LLC': {
      queriesHandled: 23,
      accuracyRate: 89,
      timeSaved: 12,
      clientSatisfaction: 4.6
    },
    'Smith & Associates': {
      queriesHandled: 67,
      accuracyRate: 94,
      timeSaved: 31,
      clientSatisfaction: 4.9
    },
    'TechStart Inc': {
      queriesHandled: 15,
      accuracyRate: 87,
      timeSaved: 8,
      clientSatisfaction: 4.5
    }
  };

  const currentMetrics = metrics[selectedCompany];

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <img src="/tusk-cpa-logo.png" alt="TuskCPA" />
            </div>
            <nav className="nav">
              <Link to="/home" className="nav-link">Home</Link>
              <Link to="/dashboard" className="nav-link active">Dashboard</Link>
              <Link to="/agents" className="nav-link">Agents</Link>
            </nav>
            <div className="user-menu">
              <span className="user-name">Welcome, John</span>
              <button className="btn btn-secondary">Logout</button>
            </div>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="container">
          <div className="dashboard-header-section">
            <h1>Company Dashboard</h1>
            <div className="company-selector">
              <label htmlFor="company-select">Select Company:</label>
              <select 
                id="company-select"
                value={selectedCompany} 
                onChange={(e) => setSelectedCompany(e.target.value)}
                className="company-select"
              >
                {companies.map(company => (
                  <option key={company} value={company}>{company}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-icon">💬</div>
              <div className="metric-content">
                <h3>{currentMetrics.queriesHandled}</h3>
                <p>Queries Handled Today</p>
              </div>
            </div>
            <div className="metric-card">
              <div className="metric-icon">🎯</div>
              <div className="metric-content">
                <h3>{currentMetrics.accuracyRate}%</h3>
                <p>Accuracy Rate</p>
              </div>
            </div>
            <div className="metric-card">
              <div className="metric-icon">⏱️</div>
              <div className="metric-content">
                <h3>{currentMetrics.timeSaved}h</h3>
                <p>Time Saved</p>
              </div>
            </div>
            <div className="metric-card">
              <div className="metric-icon">⭐</div>
              <div className="metric-content">
                <h3>{currentMetrics.clientSatisfaction}</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="dashboard-content">
            <div className="recent-queries">
              <h2>Recent Queries</h2>
              <div className="queries-list">
                <div className="query-item">
                  <div className="query-status completed">✅</div>
                  <div className="query-content">
                    <h4>Tax deduction question</h4>
                    <p>Client asked about home office deductions for 2024</p>
                    <span className="query-time">2 hours ago</span>
                  </div>
                </div>
                <div className="query-item">
                  <div className="query-status pending">⏳</div>
                  <div className="query-content">
                    <h4>Payroll inquiry</h4>
                    <p>Employee asking about overtime calculation</p>
                    <span className="query-time">4 hours ago</span>
                  </div>
                </div>
                <div className="query-item">
                  <div className="query-status completed">✅</div>
                  <div className="query-content">
                    <h4>Expense categorization</h4>
                    <p>Client needs help categorizing business meals</p>
                    <span className="query-time">6 hours ago</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="agent-performance">
              <h2>Agent Performance</h2>
              <div className="performance-chart">
                <div className="chart-placeholder">
                  <div className="chart-icon">📊</div>
                  <p>Performance chart will be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
