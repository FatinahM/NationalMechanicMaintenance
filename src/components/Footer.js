import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>National Mechanic Maintenance</h3>
            <p>Professional HVAC services for your home and business. We're here 24/7 for emergency repairs.</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">📱 Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦 Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📸 Instagram</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/financing">Financing</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">HVAC Installation</a></li>
              <li><a href="#services">HVAC Repair</a></li>
              <li><a href="#services">Maintenance</a></li>
              <li><a href="#services">Emergency Service</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📞 Phone: (555) 123-4567</p>
            <p>📧 Email: info@nationalmechanic.com</p>
            <p>📍 Address: 123 Main St, City, State 12345</p>
            <p className="hours">⏰ Available 24/7</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} National Mechanic Maintenance. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <span>|</span>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
