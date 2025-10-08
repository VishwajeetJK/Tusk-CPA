import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    firmSize: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="signup" className="signup section">
        <div className="container">
          <div className="signup-content">
            <div className="success-message">
              <div className="success-icon">🎉</div>
              <h2>Welcome to the Private Beta!</h2>
              <p>
                Thank you for joining TuskCPA's private beta program. We'll be in touch soon 
                with your early access credentials and exclusive launch discounts.
              </p>
              <div className="success-benefits">
                <div className="benefit-item">
                  <span className="benefit-icon">💰</span>
                  <span>Up to 50% off at launch</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🚀</span>
                  <span>Early access to new features</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">👥</span>
                  <span>Direct line to our development team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="signup" className="signup section">
      <div className="container">
        <div className="signup-content">
          <div className="signup-text">
            <h2 className="signup-title">
              Be the First to <span className="highlight">Automate Your Firm</span>
            </h2>
            <p className="signup-subtitle">
              Join our private beta and be among the first accounting professionals 
              to experience the future of practice management.
            </p>
            <div className="signup-benefits">
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>Significant launch discounts for early users</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>Priority support and feature requests</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>Exclusive access to beta features</span>
              </div>
            </div>
          </div>
          
          <div className="signup-form-container">
            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>Join the Private Beta</h3>
                <p>Get early access and exclusive discounts</p>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="company">Company/Firm Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your company name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="firmSize">Firm Size</label>
                <select
                  id="firmSize"
                  name="firmSize"
                  value={formData.firmSize}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select firm size</option>
                  <option value="solo">Solo Practitioner</option>
                  <option value="2-5">2-5 employees</option>
                  <option value="6-20">6-20 employees</option>
                  <option value="21-50">21-50 employees</option>
                  <option value="50+">50+ employees</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                />
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Joining Beta...' : 'Join Private Beta'}
              </button>
              
              <p className="form-disclaimer">
                By joining the beta, you agree to receive updates about TuskCPA. 
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
