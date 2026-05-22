import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitStatus('success');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We're here to help! Get in touch with our team</p>
        </div>
      </section>

      <section className="contact-info-section section-padding">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Phone</h3>
              <p><a href="tel:5551234567">(555) 123-4567</a></p>
              <p className="small">Available 24/7 for emergencies</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p><a href="mailto:info@nationalmechanic.com">info@nationalmechanic.com</a></p>
              <p className="small">Response within 24 hours</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Address</h3>
              <p>P.O. Box 133286</p>
              <p>Atlanta,Ga 30333</p>
            </div>
            <div className="info-card">
              <div className="info-icon">⏰</div>
              <h3>Hours</h3>
              <p>Mon - Sun: 24/7</p>
              <p className="small">Emergency service always available</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section section-padding">
        <div className="container">
          <div className="form-wrapper">
            <div className="form-intro">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              {submitStatus === 'success' && (
                <div className="success-message">
                  ✓ Thank you! We've received your message and will contact you soon.
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="John Smith"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What is this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="emergency-cta section-padding">
        <div className="container">
          <h2>Need Emergency Service?</h2>
          <p>Call us immediately at <strong>(404) 901-6779</strong></p>
          <p className="small-text">Available 24/7 for emergency HVAC repairs</p>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
