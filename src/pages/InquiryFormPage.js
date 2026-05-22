import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './InquiryFormPage.css';

function InquiryFormPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    propertyType: '',
    serviceType: '',
    systemAge: '',
    urgency: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    description: '',
    agreeTerms: false
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }
    console.log('Inquiry Form submitted:', formData);
    setSubmitStatus('success');
    setFormData({
      firstName: '', lastName: '', email: '', phone: '', propertyType: '', serviceType: '', systemAge: '', urgency: '', address: '', city: '', state: '', zipCode: '', description: '', agreeTerms: false
    });
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <div className="inquiry-form-page">
      <section className="page-header">
        <div className="container">
          <h1>Request a Free Quote</h1>
          <p>Tell us about your HVAC needs and we'll provide a customized quote</p>
        </div>
      </section>

      <section className="form-section section-padding">
        <div className="container">
          <div className="form-container">
            <div className="form-info">
              <h2>Why Submit an Inquiry?</h2>
              <ul className="benefits-list">
                <li>✓ Free, no-obligation quote</li>
                <li>✓ Expert assessment of your needs</li>
                <li>✓ Personalized service recommendations</li>
                <li>✓ Available financing options</li>
                <li>✓ Quick response time (24 hours)</li>
                <li>✓ Licensed and insured technicians</li>
              </ul>
            </div>

            <form className="inquiry-form" onSubmit={handleSubmit}>
              {submitStatus === 'success' && (
                <div className="success-message">
                  ✓ Thank you! We've received your inquiry. Our team will contact you within 24 hours with a free quote.
                </div>
              )}

              <fieldset className="form-fieldset">
                <legend>Personal Information</legend>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required placeholder="John" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required placeholder="Smith" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="john@example.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone *</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required placeholder="(555) 123-4567" />
                  </div>
                </div>
              </fieldset>

              <fieldset className="form-fieldset">
                <legend>Property Information</legend>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="propertyType">Property Type *</label>
                    <select id="propertyType" name="propertyType" value={formData.propertyType} onChange={handleInputChange} required>
                      <option value="">Select Property Type</option>
                      <option value="residential">Residential Home</option>
                      <option value="apartment">Apartment</option>
                      <option value="commercial">Commercial Building</option>
                      <option value="industrial">Industrial</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="systemAge">Current System Age *</label>
                    <select id="systemAge" name="systemAge" value={formData.systemAge} onChange={handleInputChange} required>
                      <option value="">Select System Age</option>
                      <option value="new">Less than 5 years</option>
                      <option value="mid">5-10 years</option>
                      <option value="old">10-15 years</option>
                      <option value="very-old">15+ years</option>
                      <option value="no-system">No current system</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="address">Street Address *</label>
                    <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} required placeholder="123 Main Street" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">City *</label>
                    <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} required placeholder="City" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">State *</label>
                    <input type="text" id="state" name="state" value={formData.state} onChange={handleInputChange} required placeholder="State" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="zipCode">Zip Code *</label>
                    <input type="text" id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleInputChange} required placeholder="12345" />
                  </div>
                </div>
              </fieldset>

              <fieldset className="form-fieldset">
                <legend>Service Information</legend>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="serviceType">Service Type *</label>
                    <select id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleInputChange} required>
                      <option value="">Select Service Type</option>
                      <option value="installation">New Installation</option>
                      <option value="repair">Emergency Repair</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="replacement">System Replacement</option>
                      <option value="upgrade">System Upgrade</option>
                      <option value="inspection">Inspection</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="urgency">Urgency Level *</label>
                    <select id="urgency" name="urgency" value={formData.urgency} onChange={handleInputChange} required>
                      <option value="">Select Urgency</option>
                      <option value="emergency">Emergency (Today)</option>
                      <option value="urgent">Urgent (This Week)</option>
                      <option value="soon">Soon (This Month)</option>
                      <option value="flexible">Flexible (Planning Ahead)</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="description">Project Description *</label>
                  <textarea id="description" name="description" value={formData.description} onChange={handleInputChange} required rows="5" placeholder="Tell us about your HVAC needs..."></textarea>
                </div>
              </fieldset>

              <div className="form-terms">
                <label className="checkbox-label">
                  <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleInputChange} required />
                  <span>I agree to be contacted via phone or email and have read the privacy policy *</span>
                </label>
              </div>

              <button type="submit" className="btn-primary btn-large">Submit Inquiry for Free Quote</button>
            </form>
          </div>
        </div>
      </section>

      <section className="additional-info section-padding">
        <div className="container">
          <h2>What Happens Next?</h2>
          <div className="steps-grid">
            <div className="step-item">
              <div className="step-number">1</div>
              <h4>We Review Your Inquiry</h4>
              <p>Our team reviews your information and assesses your needs.</p>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <h4>Quick Response</h4>
              <p>We contact you within 24 hours with initial recommendations.</p>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <h4>Schedule Appointment</h4>
              <p>We schedule a convenient time for an in-home assessment.</p>
            </div>
            <div className="step-item">
              <div className="step-number">4</div>
              <h4>Free Quote</h4>
              <p>You receive a detailed, no-obligation quote for your project.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InquiryFormPage;
