import React, { useState } from 'react';
import GlobalNav from '../../shared/components/GlobalNav';
import './Agents.css';

const Agents = () => {
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: 'user',
      content: 'Hello! I need help with my client\'s tax situation.',
      timestamp: '2:30 PM'
    },
    {
      id: 2,
      type: 'assistant',
      content: 'I\'d be happy to help you with your client\'s tax situation! Could you provide more details about what specific tax issue they\'re facing?',
      timestamp: '2:31 PM'
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [isDictating, setIsDictating] = useState(false);

  const [agents, setAgents] = useState([
    {
      id: 'tax-assistant',
      name: 'Tax Assistant',
      description: 'Expert in tax law, deductions, and compliance',
      icon: '🧾',
      status: 'active',
      category: 'Tax'
    },
    {
      id: 'payroll-helper',
      name: 'Payroll Helper',
      description: 'Handles payroll calculations and employee questions',
      icon: '💰',
      status: 'inactive',
      category: 'Payroll'
    },
    {
      id: 'expense-tracker',
      name: 'Expense Tracker',
      description: 'Categorizes and tracks business expenses',
      icon: '📊',
      status: 'active',
      category: 'Expenses'
    },
    {
      id: 'bookkeeping-bot',
      name: 'Bookkeeping Bot',
      description: 'Assists with general bookkeeping tasks',
      icon: '📚',
      status: 'inactive',
      category: 'Bookkeeping'
    },
    {
      id: 'audit-assistant',
      name: 'Audit Assistant',
      description: 'Helps prepare for audits and compliance',
      icon: '🔍',
      status: 'active',
      category: 'Audit'
    },
    {
      id: 'client-advisor',
      name: 'Client Advisor',
      description: 'Provides general financial advice to clients',
      icon: '💡',
      status: 'inactive',
      category: 'Advisory'
    }
  ]);

  const recentChats = [
    { id: 1, title: 'Tax Planning for ABC Corp', timestamp: '2 hours ago' },
    { id: 2, title: 'Payroll Questions - XYZ LLC', timestamp: '1 day ago' },
    { id: 3, title: 'Expense Categorization Help', timestamp: '2 days ago' },
    { id: 4, title: 'Q4 Financial Review', timestamp: '3 days ago' }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage = {
        id: chatMessages.length + 1,
        type: 'user',
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setChatMessages([...chatMessages, userMessage]);
      setNewMessage('');
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: chatMessages.length + 2,
          type: 'assistant',
          content: 'I understand your question. Let me help you with that. Based on the information provided, here\'s what I recommend...',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setChatMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleAgentStatus = (agentId) => {
    setAgents(prevAgents => 
      prevAgents.map(agent => 
        agent.id === agentId 
          ? { ...agent, status: agent.status === 'active' ? 'inactive' : 'active' }
          : agent
      )
    );
  };

  const handleFileUpload = () => {
    // File upload functionality
    console.log('File upload clicked');
  };

  const handleDictate = () => {
    setIsDictating(!isDictating);
    // Voice dictation functionality
    console.log('Dictate toggled:', !isDictating);
  };

  const toggleVoiceMode = () => {
    setIsVoiceMode(!isVoiceMode);
    console.log('Voice mode toggled:', !isVoiceMode);
  };

  return (
    <div className="agents-page">
      <GlobalNav />
      
      <div className="agents-layout">
        {/* Left Sidebar */}
        <div className="agents-sidebar">
          <div className="sidebar-header">
            <button className="new-chat-btn">
              <span className="btn-icon">+</span>
              New Chat
            </button>
          </div>

          <div className="sidebar-section">
            <div className="section-header">
              <span className="section-icon">🔍</span>
              Search Chats
            </div>
            <div className="search-box">
              <input type="text" placeholder="Search conversations..." />
            </div>
          </div>

          <div className="sidebar-section">
            <div className="section-header">
              <span className="section-icon">📚</span>
              Libraries
            </div>
            <div className="library-item">
              <span className="library-icon">📄</span>
              Tax Documents
            </div>
            <div className="library-item">
              <span className="library-icon">📊</span>
              Financial Reports
            </div>
            <div className="library-item">
              <span className="library-icon">⚖️</span>
              Legal Templates
            </div>
          </div>

          <div className="sidebar-section">
            <div className="section-header">
              <span className="section-icon">👥</span>
              My Clients
            </div>
            <div className="client-item">
              <span className="client-avatar">A</span>
              ABC Corp
            </div>
            <div className="client-item">
              <span className="client-avatar">X</span>
              XYZ LLC
            </div>
            <div className="client-item">
              <span className="client-avatar">S</span>
              Smith & Associates
            </div>
          </div>

          <div className="sidebar-section">
            <div className="section-header">
              <span className="section-icon">🤖</span>
              Tusk Agents
            </div>
            <div className="agents-list">
              {agents.map(agent => (
                <div 
                  key={agent.id} 
                  className={`agent-item ${selectedAgent === agent.id ? 'selected' : ''}`}
                  onClick={() => setSelectedAgent(agent.id)}
                >
                  <div className="agent-info">
                    <span className="agent-icon">{agent.icon}</span>
                    <div className="agent-details">
                      <span className="agent-name">{agent.name}</span>
                      <span className="agent-category">{agent.category}</span>
                    </div>
                  </div>
                  <div className="agent-controls">
                    <label className="toggle-switch">
                      <input 
                        type="checkbox" 
                        checked={agent.status === 'active'}
                        onChange={() => toggleAgentStatus(agent.id)}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <div className="section-header">
              <span className="section-icon">💬</span>
              Recent Chats
            </div>
            {recentChats.map(chat => (
              <div key={chat.id} className="chat-item">
                <span className="chat-title">{chat.title}</span>
                <span className="chat-time">{chat.timestamp}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="agents-main">
          <div className="chat-header">
            <div className="selected-agent-info">
              {selectedAgent ? (
                <>
                  <span className="agent-icon">
                    {agents.find(a => a.id === selectedAgent)?.icon}
                  </span>
                  <div className="agent-details">
                    <h2>{agents.find(a => a.id === selectedAgent)?.name}</h2>
                    <p>{agents.find(a => a.id === selectedAgent)?.description}</p>
                  </div>
                </>
              ) : (
                <div className="no-agent-selected">
                  <h2>Select an Agent</h2>
                  <p>Choose an agent from the sidebar to start a conversation</p>
                </div>
              )}
            </div>
          </div>

          <div className="chat-messages">
            {chatMessages.map(message => (
              <div key={message.id} className={`message ${message.type}`}>
                <div className="message-avatar">
                  {message.type === 'user' ? '👤' : '🤖'}
                </div>
                <div className="message-content">
                  <div className="message-text">{message.content}</div>
                  <div className="message-time">{message.timestamp}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="chat-input-area">
            <div className="input-tools">
              <button className="tool-btn" onClick={handleFileUpload}>
                <span className="tool-icon">📎</span>
                Add Files
              </button>
              <button 
                className={`tool-btn ${isDictating ? 'active' : ''}`} 
                onClick={handleDictate}
              >
                <span className="tool-icon">🎤</span>
                Dictate
              </button>
              <button 
                className={`tool-btn ${isVoiceMode ? 'active' : ''}`} 
                onClick={toggleVoiceMode}
              >
                <span className="tool-icon">🔊</span>
                Voice Mode
              </button>
            </div>
            
            <div className="input-container">
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Message your AI agent..."
                className="message-input"
                rows="1"
              />
              <button 
                className="send-btn"
                onClick={handleSendMessage}
                disabled={!newMessage.trim()}
              >
                <span className="send-icon">➤</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agents;