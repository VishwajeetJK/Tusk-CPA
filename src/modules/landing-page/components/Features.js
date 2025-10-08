import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      id: 'ai-agent',
      title: 'The AI Agent',
      subtitle: 'Your 24/7 Frontline Support',
      description: 'Our intelligent AI agent acts as your first line of defense, handling routine client queries with precision and care. It understands context, provides accurate answers, and knows when to escalate complex issues to you.',
      benefits: [
        'Instant responses to common tax questions',
        'Natural language understanding',
        'Automatic escalation for complex issues',
        'Multi-channel support (chat, WhatsApp, email)'
      ],
      illustration: (
        <div className="ai-agent-illustration">
          <div className="chat-interface">
            <div className="chat-header">
              <div className="agent-avatar">🤖</div>
              <div className="agent-info">
                <div className="agent-name">TuskCPA Assistant</div>
                <div className="agent-status">Online</div>
              </div>
            </div>
            <div className="chat-messages">
              <div className="message client">
                <div className="message-content">
                  "What documents do I need for my tax return?"
                </div>
                <div className="message-time">2:34 PM</div>
              </div>
              <div className="message agent">
                <div className="message-content">
                  "For your tax return, you'll typically need: W-2s, 1099s, receipts for deductions, and any other income documents. I can help you organize these based on your specific situation."
                </div>
                <div className="message-time">2:34 PM</div>
              </div>
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'dashboard',
      title: 'The Dashboard',
      subtitle: 'Your Command Center',
      description: 'Take control of your practice with our comprehensive dashboard. Track key metrics, review AI responses, and manage complex client requests through an intuitive Kanban-style interface.',
      benefits: [
        'Real-time performance metrics',
        'AI response review and approval',
        'Task management with Kanban boards',
        'Client communication history'
      ],
      illustration: (
        <div className="dashboard-illustration">
          <div className="dashboard-mockup">
            <div className="dashboard-header">
              <h3>Practice Dashboard</h3>
              <div className="dashboard-stats">
                <div className="stat">
                  <span className="stat-value">47</span>
                  <span className="stat-label">Queries Today</span>
                </div>
                <div className="stat">
                  <span className="stat-value">92%</span>
                  <span className="stat-label">Accuracy</span>
                </div>
              </div>
            </div>
            <div className="dashboard-content">
              <div className="kanban-board">
                <div className="kanban-column">
                  <div className="column-header">To Review</div>
                  <div className="task-card">
                    <div className="task-priority high"></div>
                    <div className="task-title">Complex tax question from John Smith</div>
                    <div className="task-meta">2 hours ago</div>
                  </div>
                </div>
                <div className="kanban-column">
                  <div className="column-header">In Progress</div>
                  <div className="task-card">
                    <div className="task-priority medium"></div>
                    <div className="task-title">Review Q1 financial statements</div>
                    <div className="task-meta">1 day ago</div>
                  </div>
                </div>
                <div className="kanban-column">
                  <div className="column-header">Completed</div>
                  <div className="task-card completed">
                    <div className="task-priority low"></div>
                    <div className="task-title">Client onboarding - ABC Corp</div>
                    <div className="task-meta">2 days ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            A <span className="highlight">Smarter Way</span> to Run Your Practice
          </h2>
        </div>
        
        <div className="features-container">
          {features.map((feature, index) => (
            <div key={feature.id} className={`feature-item ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="feature-content">
                <div className="feature-text">
                  <h3 className="feature-title">{feature.title}</h3>
                  <h4 className="feature-subtitle">{feature.subtitle}</h4>
                  <p className="feature-description">{feature.description}</p>
                  <ul className="feature-benefits">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="benefit-item">
                        <span className="benefit-icon">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="feature-illustration">
                {feature.illustration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

