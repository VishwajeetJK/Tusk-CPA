import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  DndContext,
  DragOverlay,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import GlobalNav from '../../shared/components/GlobalNav';
import './HomePage.css';

// Sortable Ticket Component
const SortableTicket = ({ ticket }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: ticket.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`ticket-card ${ticket.isCompleted ? 'completed' : ''}`}
    >
      <div className="ticket-header">
        <span className={`priority-badge ${ticket.priority}`}>
          <span className="priority-icon">
            {ticket.priority === 'high' ? '🔴' : ticket.priority === 'medium' ? '🟡' : '🟢'}
          </span>
          {ticket.priority}
        </span>
        <span className="ticket-time">{ticket.created}</span>
      </div>
      <h4>{ticket.title}</h4>
      <div className="ticket-client">
        <span className="client-icon">🏢</span>
        {ticket.client}
      </div>
    </div>
  );
};

const HomePage = () => {
  const [aiQueries] = useState([
    {
      id: 1,
      clientName: 'ABC Corp',
      query: 'What documents do I need for my Q4 tax return?',
      aiAnswer: 'For your Q4 tax return, you will need: W-2s, 1099s, receipts for business deductions, and any other income documents. Based on your QuickBooks data, I can see you have $15,000 in business expenses that qualify for deductions.',
      dataSources: ['QuickBooks', 'Previous Returns'],
      timestamp: '2 hours ago',
      agentType: 'chat'
    },
    {
      id: 2,
      clientName: 'XYZ LLC',
      query: 'How do I calculate overtime for my employees?',
      aiAnswer: 'Overtime is calculated at 1.5x the regular hourly rate for hours worked over 40 in a workweek. For salaried employees, divide annual salary by 2080 hours to get hourly rate, then multiply by 1.5 for overtime hours.',
      dataSources: ['Gusto', 'ADP'],
      timestamp: '4 hours ago',
      agentType: 'call'
    },
    {
      id: 3,
      clientName: 'Smith & Associates',
      query: 'Can I deduct home office expenses?',
      aiAnswer: 'Yes, you can deduct home office expenses if you use part of your home exclusively and regularly for business. You can use either the simplified method ($5/sq ft up to 300 sq ft) or actual expenses method.',
      dataSources: ['Expensify', 'Previous Returns'],
      timestamp: '6 hours ago',
      agentType: 'voice'
    },
    {
      id: 4,
      clientName: 'TechStart Inc',
      query: 'What are the tax implications of our recent funding round?',
      aiAnswer: 'For your Series A funding, you\'ll need to consider equity dilution, stock option grants, and potential AMT implications. The $2M raised will be recorded as paid-in capital, and you should consult with your tax advisor about 83(b) elections for employee stock options.',
      dataSources: ['Cap Table', 'Previous Returns', 'Legal Docs'],
      timestamp: '1 hour ago',
      agentType: 'call'
    },
    {
      id: 5,
      clientName: 'Retail Plus',
      query: 'Help me understand sales tax requirements for our new location',
      aiAnswer: 'For your new store in California, you\'ll need to register for a seller\'s permit, collect 7.25% state sales tax plus local district taxes. You should also consider nexus implications if you\'re selling online to California customers.',
      dataSources: ['State Tax Database', 'Previous Returns'],
      timestamp: '30 minutes ago',
      agentType: 'voice'
    }
  ]);

  const [kanbanTickets, setKanbanTickets] = useState({
    created: [
      { id: 1, title: 'Review Q4 financial statements', client: 'ABC Corp', priority: 'high', created: '2 hours ago' },
      { id: 2, title: 'Process payroll for December', client: 'XYZ LLC', priority: 'medium', created: '4 hours ago' }
    ],
    inProgress: [
      { id: 3, title: 'Tax planning consultation', client: 'Smith & Associates', priority: 'high', created: '1 day ago' }
    ],
    completed: [
      { id: 4, title: 'Monthly reconciliation', client: 'ABC Corp', priority: 'low', created: '2 days ago', isCompleted: true }
    ]
  });

  const [activeId, setActiveId] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setActiveId(null);

    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    // Find which column the active item is in
    let activeColumn = null;
    let activeIndex = -1;
    
    for (const [columnId, tickets] of Object.entries(kanbanTickets)) {
      const index = tickets.findIndex(ticket => ticket.id === activeId);
      if (index !== -1) {
        activeColumn = columnId;
        activeIndex = index;
        break;
      }
    }

    if (activeColumn === null) return;

    // Find which column the over item is in
    let overColumn = null;
    let overIndex = -1;
    
    for (const [columnId, tickets] of Object.entries(kanbanTickets)) {
      const index = tickets.findIndex(ticket => ticket.id === overId);
      if (index !== -1) {
        overColumn = columnId;
        overIndex = index;
        break;
      }
    }

    // If dropping on a column (not a specific ticket), add to the end
    if (overColumn === null) {
      // Check if overId is a column name
      if (['created', 'inProgress', 'completed'].includes(overId)) {
        overColumn = overId;
        overIndex = kanbanTickets[overColumn].length;
      } else {
        return;
      }
    }

    if (activeColumn === overColumn) {
      // Moving within the same column
      setKanbanTickets(prev => ({
        ...prev,
        [activeColumn]: arrayMove(prev[activeColumn], activeIndex, overIndex)
      }));
    } else {
      // Moving between columns
      const activeTicket = kanbanTickets[activeColumn][activeIndex];
      
      // Add isCompleted flag based on target column
      const updatedTicket = {
        ...activeTicket,
        isCompleted: overColumn === 'completed'
      };
      
      setKanbanTickets(prev => ({
        ...prev,
        [activeColumn]: prev[activeColumn].filter(ticket => ticket.id !== activeId),
        [overColumn]: [
          ...prev[overColumn].slice(0, overIndex),
          updatedTicket,
          ...prev[overColumn].slice(overIndex)
        ]
      }));
    }
  };

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

          {/* Project Management Dashboard */}
          <div className="kanban-section">
            <div className="section-header">
              <h2>
                <span className="section-icon">📋</span>
                Project Management Dashboard
              </h2>
              <p>Track and manage your active tasks and projects</p>
            </div>
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            >
              <div className="kanban-board">
                <div className="kanban-column">
                  <div className="column-header">
                    <div className="column-title">
                      <span className="column-icon">➕</span>
                      <h3>Created</h3>
                    </div>
                    <span className="ticket-count">{kanbanTickets.created.length}</span>
                  </div>
                  <SortableContext 
                    id="created" 
                    items={kanbanTickets.created.map(ticket => ticket.id)}
                    strategy={verticalListSortingStrategy}
                  >
                    <div className="tickets-list">
                      {kanbanTickets.created.map(ticket => (
                        <SortableTicket key={ticket.id} ticket={ticket} />
                      ))}
                    </div>
                  </SortableContext>
                </div>

                <div className="kanban-column">
                  <div className="column-header">
                    <div className="column-title">
                      <span className="column-icon">⚡</span>
                      <h3>In Progress</h3>
                    </div>
                    <span className="ticket-count">{kanbanTickets.inProgress.length}</span>
                  </div>
                  <SortableContext 
                    id="inProgress" 
                    items={kanbanTickets.inProgress.map(ticket => ticket.id)}
                    strategy={verticalListSortingStrategy}
                  >
                    <div className="tickets-list">
                      {kanbanTickets.inProgress.map(ticket => (
                        <SortableTicket key={ticket.id} ticket={ticket} />
                      ))}
                    </div>
                  </SortableContext>
                </div>

                <div className="kanban-column">
                  <div className="column-header">
                    <div className="column-title">
                      <span className="column-icon">✅</span>
                      <h3>Completed</h3>
                    </div>
                    <span className="ticket-count">{kanbanTickets.completed.length}</span>
                  </div>
                  <SortableContext 
                    id="completed" 
                    items={kanbanTickets.completed.map(ticket => ticket.id)}
                    strategy={verticalListSortingStrategy}
                  >
                    <div className="tickets-list">
                      {kanbanTickets.completed.map(ticket => (
                        <SortableTicket key={ticket.id} ticket={{...ticket, isCompleted: true}} />
                      ))}
                    </div>
                  </SortableContext>
                </div>
              </div>
              
              <DragOverlay>
                {activeId ? (
                  <div className="ticket-card dragging">
                    {(() => {
                      const ticket = [...kanbanTickets.created, ...kanbanTickets.inProgress, ...kanbanTickets.completed]
                        .find(t => t.id === activeId);
                      return ticket ? (
                        <>
                          <div className="ticket-header">
                            <span className={`priority-badge ${ticket.priority}`}>
                              <span className="priority-icon">
                                {ticket.priority === 'high' ? '🔴' : ticket.priority === 'medium' ? '🟡' : '🟢'}
                              </span>
                              {ticket.priority}
                            </span>
                            <span className="ticket-time">{ticket.created}</span>
                          </div>
                          <h4>{ticket.title}</h4>
                          <div className="ticket-client">
                            <span className="client-icon">🏢</span>
                            {ticket.client}
                          </div>
                        </>
                      ) : null;
                    })()}
                  </div>
                ) : null}
              </DragOverlay>
            </DndContext>
          </div>

          {/* AI Answered Review Board */}
          <div className="ai-review-section">
            <div className="section-header">
              <h2>
                <span className="section-icon">🤖</span>
                AI Answered Review Board
              </h2>
              <p>Review and approve AI-generated responses before sending to clients</p>
            </div>
            <div className="review-board">
              {aiQueries.map(query => (
                <div key={query.id} className="review-item">
                  <div className="review-header">
                    <div className="client-info">
                      <div className="client-avatar">
                        <span className="client-initial">{query.clientName.charAt(0)}</span>
                      </div>
                      <div className="client-details">
                        <span className="client-name">{query.clientName}</span>
                        <span className="query-time">
                          <span className="time-icon">🕒</span>
                          {query.timestamp}
                        </span>
                      </div>
                    </div>
                    <div className="query-status">
                      <span className={`agent-type-badge ${query.agentType}`}>
                        {query.agentType === 'chat' ? '💬 Chat Agent' : 
                         query.agentType === 'call' ? '📞 Call Agent' : 
                         query.agentType === 'voice' ? '🎤 Voice Agent' : '🤖 AI Agent'}
                      </span>
                      <span className="status-badge pending">Pending Review</span>
                    </div>
                  </div>
                  <div className="query-content">
                    <div className="query-question">
                      <div className="content-label">
                        <span className="label-icon">❓</span>
                        Client Query
                      </div>
                      <p>{query.query}</p>
                    </div>
                    <div className="ai-answer">
                      <div className="content-label">
                        <span className="label-icon">🤖</span>
                        AI Response
                      </div>
                      <p>{query.aiAnswer}</p>
                    </div>
                    <div className="data-sources">
                      <div className="content-label">
                        <span className="label-icon">📊</span>
                        Data Sources
                      </div>
                      <div className="sources-tags">
                        {query.dataSources.map((source, index) => (
                          <span key={index} className="source-tag">{source}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="review-actions">
                    <button 
                      className="btn btn-primary approve-btn"
                      onClick={() => handleApproveQuery(query.id)}
                    >
                      <span className="btn-icon">✅</span>
                      Approve & Send
                    </button>
                    <button 
                      className="btn btn-secondary escalate-btn"
                      onClick={() => handleEscalateQuery(query.id)}
                    >
                      <span className="btn-icon">⬆️</span>
                      Escalate to Manual
                    </button>
                  </div>
                </div>
              ))}
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
