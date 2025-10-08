import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GlobalNav from '../../shared/components/GlobalNav';
import './HomePage.css';

const HomePage = () => {
  const [aiQueries] = useState([
    {
      id: 1,
      clientName: 'ABC Corp',
      query: 'What documents do I need for my Q4 tax return?',
      aiAnswer: 'For your Q4 tax return, you will need: W-2s, 1099s, receipts for business deductions, and any other income documents. Based on your QuickBooks data, I can see you have $15,000 in business expenses that qualify for deductions.',
      dataSources: ['QuickBooks', 'Previous Returns'],
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      clientName: 'XYZ LLC',
      query: 'How do I calculate overtime for my employees?',
      aiAnswer: 'Overtime is calculated at 1.5x the regular hourly rate for hours worked over 40 in a workweek. For salaried employees, divide annual salary by 2080 hours to get hourly rate, then multiply by 1.5 for overtime hours.',
      dataSources: ['Gusto', 'ADP'],
      timestamp: '4 hours ago'
    },
    {
      id: 3,
      clientName: 'Smith & Associates',
      query: 'Can I deduct home office expenses?',
      aiAnswer: 'Yes, you can deduct home office expenses if you use part of your home exclusively and regularly for business. You can use either the simplified method ($5/sq ft up to 300 sq ft) or actual expenses method.',
      dataSources: ['Expensify', 'Previous Returns'],
      timestamp: '6 hours ago'
    }
  ]);

  const [kanbanTickets] = useState({
    created: [
      { id: 1, title: 'Review Q4 financial statements', client: 'ABC Corp', priority: 'high', created: '2 hours ago' },
      { id: 2, title: 'Process payroll for December', client: 'XYZ LLC', priority: 'medium', created: '4 hours ago' }
    ],
    inProgress: [
      { id: 3, title: 'Tax planning consultation', client: 'Smith & Associates', priority: 'high', created: '1 day ago' }
    ],
    completed: [
      { id: 4, title: 'Monthly reconciliation', client: 'ABC Corp', priority: 'low', created: '2 days ago' }
    ]
  });

  const [clients] = useState([
    { id: 1, name: 'ABC Corp', logo: '🏢', revenue: '$125,000', status: 'active' },
    { id: 2, name: 'XYZ LLC', logo: '🏭', revenue: '$89,000', status: 'active' },
    { id: 3, name: 'Smith & Associates', logo: '🏪', revenue: '$156,000', status: 'active' },
    { id: 4, name: 'TechStart Inc', logo: '💻', revenue: '$67,000', status: 'active' }
  ]);

  const handleApproveQuery = (queryId) => {
    console.log('Approving query:', queryId);
    // Move to completed and notify client
  };

  const handleEscalateQuery = (queryId) => {
    console.log('Escalating query:', queryId);
    // Move to Kanban board as new ticket
  };

  return (
    <div className="home-page">
      <GlobalNav />
      
      <main className="dashboard-main">
        <div className="container">
          <div className="dashboard-header">
            <h1>Dashboard</h1>
            <p>Welcome back, John. Here's what's happening with your practice today.</p>
          </div>

          {/* Overall Analytics */}
          <div className="analytics-section">
            <h2>Overall Analytics</h2>
            <div className="analytics-grid">
              <div className="analytics-card">
                <div className="analytics-icon">👥</div>
                <div className="analytics-content">
                  <h3>24</h3>
                  <p>Total Active Clients</p>
                  <span className="analytics-change positive">+3 this month</span>
                </div>
              </div>
              <div className="analytics-card">
                <div className="analytics-icon">💰</div>
                <div className="analytics-content">
                  <h3>$437,000</h3>
                  <p>YTD Revenue</p>
                  <span className="analytics-change positive">+12% vs last year</span>
                </div>
              </div>
              <div className="analytics-card">
                <div className="analytics-icon">🎫</div>
                <div className="analytics-content">
                  <h3>8 / 47</h3>
                  <p>Open vs Closed Tickets</p>
                  <span className="analytics-change positive">85% completion rate</span>
                </div>
              </div>
              <div className="analytics-card">
                <div className="analytics-icon">🤖</div>
                <div className="analytics-content">
                  <h3>156</h3>
                  <p>AI-Handled Queries</p>
                  <span className="analytics-change positive">94% accuracy</span>
                </div>
              </div>
            </div>
          </div>

          <div className="dashboard-content">
            {/* AI Answered Review Board */}
            <div className="ai-review-section">
              <h2>AI Answered Review Board</h2>
              <div className="review-board">
                {aiQueries.map(query => (
                  <div key={query.id} className="review-item">
                    <div className="review-header">
                      <div className="client-info">
                        <span className="client-name">{query.clientName}</span>
                        <span className="query-time">{query.timestamp}</span>
                      </div>
                    </div>
                    <div className="query-content">
                      <div className="query-question">
                        <strong>Query:</strong> {query.query}
                      </div>
                      <div className="ai-answer">
                        <strong>AI Answer:</strong> {query.aiAnswer}
                      </div>
                      <div className="data-sources">
                        <strong>Data Sources:</strong> {query.dataSources.join(', ')}
                      </div>
                    </div>
                    <div className="review-actions">
                      <button 
                        className="btn btn-primary"
                        onClick={() => handleApproveQuery(query.id)}
                      >
                        Approve
                      </button>
                      <button 
                        className="btn btn-secondary"
                        onClick={() => handleEscalateQuery(query.id)}
                      >
                        Escalate
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Management Dashboard */}
            <div className="kanban-section">
              <h2>Project Management Dashboard</h2>
              <div className="kanban-board">
                <div className="kanban-column">
                  <div className="column-header">
                    <h3>Created</h3>
                    <span className="ticket-count">{kanbanTickets.created.length}</span>
                  </div>
                  <div className="tickets-list">
                    {kanbanTickets.created.map(ticket => (
                      <div key={ticket.id} className="ticket-card">
                        <div className="ticket-header">
                          <span className={`priority-badge ${ticket.priority}`}>{ticket.priority}</span>
                          <span className="ticket-time">{ticket.created}</span>
                        </div>
                        <h4>{ticket.title}</h4>
                        <p className="ticket-client">{ticket.client}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="kanban-column">
                  <div className="column-header">
                    <h3>In Progress</h3>
                    <span className="ticket-count">{kanbanTickets.inProgress.length}</span>
                  </div>
                  <div className="tickets-list">
                    {kanbanTickets.inProgress.map(ticket => (
                      <div key={ticket.id} className="ticket-card">
                        <div className="ticket-header">
                          <span className={`priority-badge ${ticket.priority}`}>{ticket.priority}</span>
                          <span className="ticket-time">{ticket.created}</span>
                        </div>
                        <h4>{ticket.title}</h4>
                        <p className="ticket-client">{ticket.client}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="kanban-column">
                  <div className="column-header">
                    <h3>Completed</h3>
                    <span className="ticket-count">{kanbanTickets.completed.length}</span>
                  </div>
                  <div className="tickets-list">
                    {kanbanTickets.completed.map(ticket => (
                      <div key={ticket.id} className="ticket-card completed">
                        <div className="ticket-header">
                          <span className={`priority-badge ${ticket.priority}`}>{ticket.priority}</span>
                          <span className="ticket-time">{ticket.created}</span>
                        </div>
                        <h4>{ticket.title}</h4>
                        <p className="ticket-client">{ticket.client}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Client List */}
          <div className="clients-section">
            <h2>Client List</h2>
            <div className="clients-grid">
              {clients.map(client => (
                <Link 
                  key={client.id} 
                  to={`/dashboard?client=${client.id}`}
                  className="client-card"
                >
                  <div className="client-logo">{client.logo}</div>
                  <div className="client-info">
                    <h3>{client.name}</h3>
                    <p className="client-revenue">{client.revenue} YTD</p>
                    <span className={`client-status ${client.status}`}>{client.status}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
