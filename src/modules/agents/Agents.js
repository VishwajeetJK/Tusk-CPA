import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Agents.css';

const Agents = () => {
  const [agents] = useState([
    {
      id: 1,
      name: 'Tax Assistant',
      status: 'active',
      queriesHandled: 156,
      accuracy: 94,
      lastActive: '2 minutes ago',
      description: 'Handles tax-related questions and provides accurate guidance'
    },
    {
      id: 2,
      name: 'Payroll Helper',
      status: 'active',
      queriesHandled: 89,
      accuracy: 91,
      lastActive: '15 minutes ago',
      description: 'Assists with payroll calculations and employee inquiries'
    },
    {
      id: 3,
      name: 'Expense Tracker',
      status: 'inactive',
      queriesHandled: 67,
      accuracy: 88,
      lastActive: '2 hours ago',
      description: 'Helps categorize and track business expenses'
    }
  ]);

  const [selectedAgent, setSelectedAgent] = useState(null);

  return (
    <div className="agents">
      <header className="agents-header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <img src="/tusk-cpa-logo.png" alt="TuskCPA" />
            </div>
            <nav className="nav">
              <Link to="/home" className="nav-link">Home</Link>
              <Link to="/dashboard" className="nav-link">Dashboard</Link>
              <Link to="/agents" className="nav-link active">Agents</Link>
            </nav>
            <div className="user-menu">
              <span className="user-name">Welcome, John</span>
              <button className="btn btn-secondary">Logout</button>
            </div>
          </div>
        </div>
      </header>

      <main className="agents-main">
        <div className="container">
          <div className="agents-header-section">
            <h1>AI Agents Management</h1>
            <button className="btn btn-primary">Create New Agent</button>
          </div>

          <div className="agents-grid">
            {agents.map(agent => (
              <div 
                key={agent.id} 
                className={`agent-card ${agent.status} ${selectedAgent === agent.id ? 'selected' : ''}`}
                onClick={() => setSelectedAgent(agent.id)}
              >
                <div className="agent-header">
                  <div className="agent-icon">🤖</div>
                  <div className="agent-info">
                    <h3>{agent.name}</h3>
                    <span className={`status-badge ${agent.status}`}>
                      {agent.status}
                    </span>
                  </div>
                </div>
                
                <div className="agent-description">
                  <p>{agent.description}</p>
                </div>
                
                <div className="agent-metrics">
                  <div className="metric">
                    <span className="metric-value">{agent.queriesHandled}</span>
                    <span className="metric-label">Queries</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">{agent.accuracy}%</span>
                    <span className="metric-label">Accuracy</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">{agent.lastActive}</span>
                    <span className="metric-label">Last Active</span>
                  </div>
                </div>
                
                <div className="agent-actions">
                  <button className="btn btn-sm btn-secondary">Configure</button>
                  <button className="btn btn-sm btn-primary">View Logs</button>
                </div>
              </div>
            ))}
          </div>

          {selectedAgent && (
            <div className="agent-details">
              <div className="details-header">
                <h2>Agent Details</h2>
                <button 
                  className="btn btn-secondary"
                  onClick={() => setSelectedAgent(null)}
                >
                  Close
                </button>
              </div>
              
              <div className="details-content">
                <div className="detail-section">
                  <h3>Configuration</h3>
                  <div className="config-form">
                    <div className="form-group">
                      <label>Agent Name</label>
                      <input type="text" defaultValue="Tax Assistant" />
                    </div>
                    <div className="form-group">
                      <label>Description</label>
                      <textarea defaultValue="Handles tax-related questions and provides accurate guidance"></textarea>
                    </div>
                    <div className="form-group">
                      <label>Response Style</label>
                      <select>
                        <option>Professional</option>
                        <option>Friendly</option>
                        <option>Concise</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="detail-section">
                  <h3>Recent Activity</h3>
                  <div className="activity-list">
                    <div className="activity-item">
                      <div className="activity-time">2 min ago</div>
                      <div className="activity-text">Responded to tax deduction question</div>
                    </div>
                    <div className="activity-item">
                      <div className="activity-time">15 min ago</div>
                      <div className="activity-text">Helped with expense categorization</div>
                    </div>
                    <div className="activity-item">
                      <div className="activity-time">1 hour ago</div>
                      <div className="activity-text">Updated knowledge base</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Agents;
