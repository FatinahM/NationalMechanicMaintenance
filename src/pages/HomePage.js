import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const heroSlides = [
  '/images/house222222.png',
  '/images/HVAC.png',
  '/images/feauture_1_img_1-2.jpg',
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

        {/* Slideshow background */}
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

        {/* Hero content — unchanged */}
        <div className="hero-content">
          <h1>Professional HVAC Services</h1>
          <p>Expert heating, cooling, and ventilation solutions for your home and business</p>
          <div className="hero-buttons">
            <Link to="/inquiry" className="btn-primary">Get Free Quote</Link>
            <Link to="/services" className="btn-secondary">View Services</Link>
          </div>
        </div>

        {/* Dot controls */}
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

      <section className="featured-services section-padding">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">❄️</div>
              <h3>AC Installation & Repair</h3>
              <p>Professional air conditioning installation, maintenance, and emergency repair services available 24/7.</p>
              <Link to="/services">Learn More →</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">🔥</div>
              <h3>Heating Systems</h3>
              <p>Complete heating solutions including installation, repairs, and seasonal maintenance for comfort year-round.</p>
              <Link to="/services">Learn More →</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">🌬️</div>
              <h3>Ventilation Systems</h3>
              <p>Improve your indoor air quality with our professional ventilation system services and maintenance.</p>
              <Link to="/services">Learn More →</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">🛠️</div>
              <h3>Maintenance Plans</h3>
              <p>Preventive maintenance programs to keep your HVAC system running efficiently and reduce repair costs.</p>
              <Link to="/services">Learn More →</Link>
            </div>
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