import React, { useState } from 'react';
import './Support.css';

function Support() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  
  const toggleFaq = (index) => {
    if (expandedFaq === index) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(index);
    }
  };
  
  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page. You will receive an email with instructions to reset your password."
    },
    {
      question: "How do I upgrade my subscription?",
      answer: "To upgrade your subscription, go to your Dashboard, navigate to the Billing section, and click on 'Upgrade Plan'. You will see all available plans and can select the one that suits your needs."
    },
    {
      question: "Can I change my email address?",
      answer: "Yes, you can change your email address in your Profile settings. Go to the Profile page, click on the Personal Info tab, and update your email address. Don't forget to save your changes."
    },
    {
      question: "How can I cancel my subscription?",
      answer: "To cancel your subscription, go to the Dashboard, navigate to the Billing section, and click on 'Cancel Subscription'. Follow the instructions to complete the cancellation process."
    }
  ];

  return (
    <div className="support-page">
      <div className="support-header">
        <h2>Support Center</h2>
        <p>We're here to help you with any questions or issues</p>
      </div>
      
      <div className="support-content">
        <div className="faq-section">
          <h3>Frequently Asked Questions</h3>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${expandedFaq === index ? 'expanded' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  <h4>{faq.question}</h4>
                  <span className="faq-toggle">{expandedFaq === index ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="contact-section">
          <h3>Still Need Help?</h3>
          <p>Fill out the form below and we'll get back to you as soon as possible.</p>
          
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select id="subject">
                <option value="">Select a topic</option>
                <option value="account">Account Issue</option>
                <option value="billing">Billing Question</option>
                <option value="technical">Technical Support</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                placeholder="Please describe your issue in detail"
              ></textarea>
            </div>
            
            <div className="form-group">
              <label htmlFor="attachment">Attachment (optional)</label>
              <div className="file-input">
                <button type="button" className="file-button">Choose File</button>
                <span className="file-name">No file chosen</span>
              </div>
            </div>
            
            <div className="form-actions">
              <button type="submit" className="btn btn-primary">Send Message</button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="support-footer">
        <div className="support-card">
          <div className="support-card-icon">📱</div>
          <h4>Phone Support</h4>
          <p>+1 (555) 123-4567</p>
          <p className="support-hours">Mon-Fri, 9AM-5PM PT</p>
        </div>
        
        <div className="support-card">
          <div className="support-card-icon">💬</div>
          <h4>Live Chat</h4>
          <p>Chat with our support team in real-time</p>
          <button className="btn btn-secondary">Start Chat</button>
        </div>
        
        <div className="support-card">
          <div className="support-card-icon">📚</div>
          <h4>Knowledge Base</h4>
          <p>Browse our detailed guides and tutorials</p>
          <button className="btn btn-secondary">View Articles</button>
        </div>
      </div>
    </div>
  );
}

export default Support; 