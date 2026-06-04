import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const heroSlides = [
  '/images/house222222.png',
  '/images/HVAC.png',
  '/images/feauture_1_img_1-2.jpg',
];

/* ── inline SVG icons (no external dependency) ── */
const IconSnowflake = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/>
    <polyline points="6 6 12 2 18 6"/><polyline points="6 18 12 22 18 18"/>
    <polyline points="2 9 6 6 2 15"/><polyline points="22 9 18 6 22 15"/>
  </svg>
);
const IconFlame = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 3z"/>
  </svg>
);
const IconWind = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/>
  </svg>
);
const IconTool = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
  </svg>
);

const services = [
  {
    icon: <IconSnowflake />,
    title: 'AC Installation & Repair',
    description: 'Professional air conditioning installation, maintenance, and emergency repair services available 24/7.',
  },
  {
    icon: <IconFlame />,
    title: 'Heating Systems',
    description: 'Complete heating solutions including installation, repairs, and seasonal maintenance for comfort year-round.',
  },
  {
    icon: <IconWind />,
    title: 'Ventilation Systems',
    description: 'Improve your indoor air quality with our professional ventilation system services and maintenance.',
  },
  {
    icon: <IconTool />,
    title: 'Maintenance Plans',
    description: 'Preventive maintenance programs to keep your HVAC system running efficiently and reduce repair costs.',
  },
];

function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-slideshow">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide})` }}
            />
          ))}
          <div className="hero-overlay" />
        </div>

        <div className="hero-content">
          <h1>Professional HVAC Services</h1>
          <p>Expert heating, cooling, and ventilation solutions for your home and business</p>
          <div className="hero-buttons">
            <Link to="/inquiry" className="btn-primary">Get Free Quote</Link>
            <Link to="/services" className="btn-secondary">View Services</Link>
          </div>
        </div>

        <div className="hero-dots">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* ── SERVICES — Option 3 ── */}
      <section className="featured-services section-padding">
        <div className="container">
          <div className="services-heading">
            <span className="services-eyebrow">What We Do</span>
            <h2>Our Services</h2>
          </div>
          <div className="services-grid">
            {services.map((svc, i) => (
              <div className="service-card" key={i}>
                <div className="service-card-accent" />
                <div className="service-icon-circle" aria-hidden="true">
                  {svc.icon}
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.description}</p>
                <Link to="/services" className="service-card-btn">
                  Learn More <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-choose-us section-padding">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature"><h3>✅ Licensed & Insured</h3><p>Fully licensed and insured technicians with years of experience</p></div>
            <div className="feature"><h3>⏰ 24/7 Emergency Service</h3><p>We're available around the clock for emergency repairs</p></div>
            <div className="feature"><h3>💰 Competitive Pricing</h3><p>Transparent pricing with financing options available</p></div>
            <div className="feature"><h3>⭐ Expert Technicians</h3><p>Highly trained and certified HVAC professionals</p></div>
            <div className="feature"><h3>✨ Quality Guarantee</h3><p>All work backed by comprehensive warranty</p></div>
            <div className="feature"><h3>🚀 Fast Response</h3><p>Quick response times and same-day service available</p></div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today for a free quote or emergency service</p>
          <div className="cta-buttons">
            <Link to="/inquiry" className="btn-primary">Request Quote</Link>
            <Link to="/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>

      <section className="testimonials section-padding">
        <div className="container">
          <h2>What Our Customers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="stars">⭐⭐⭐⭐⭐</p>
              <p>"Great service! Fast response and professional work. Highly recommended!"</p>
              <p className="author">- John Smith</p>
            </div>
            <div className="testimonial-card">
              <p className="stars">⭐⭐⭐⭐⭐</p>
              <p>"The technicians were knowledgeable and friendly. They fixed my AC on the same day!"</p>
              <p className="author">- Sarah Johnson</p>
            </div>
            <div className="testimonial-card">
              <p className="stars">⭐⭐⭐⭐⭐</p>
              <p>"Excellent customer service and competitive prices. Will definitely use again!"</p>
              <p className="author">- Mike Davis</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;