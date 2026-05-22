import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesPage.css';

function ServicesPage() {
  const services = [
    { id: 1, title: 'AC Installation', icon: '❄️', description: 'Professional air conditioning system installation with quality equipment and expert workmanship.', details: ['Energy-efficient system selection', 'Professional installation', 'System testing and calibration', 'Warranty included'] },
    { id: 2, title: 'AC Repair & Maintenance', icon: '🔧', description: 'Quick and reliable air conditioning repairs and preventive maintenance services.', details: ['Emergency repair service', 'System diagnostics', 'Regular maintenance plans', 'Parts warranty'] },
    { id: 3, title: 'Heating System Installation', icon: '🔥', description: 'Complete heating solutions for residential and commercial properties.', details: ['Furnace installation', 'Heat pump systems', 'Boiler services', 'Professional setup'] },
    { id: 4, title: 'Heating Repair & Service', icon: '🛠️', description: 'Expert heating system repairs and maintenance available year-round.', details: ['24/7 emergency service', 'System inspections', 'Seasonal maintenance', 'Efficiency optimization'] },
    { id: 5, title: 'Ventilation Systems', icon: '🌬️', description: 'Improve indoor air quality with professional ventilation solutions.', details: ['System installation', 'Air duct cleaning', 'Indoor air quality assessment', 'Filter replacement service'] },
    { id: 6, title: 'Maintenance Plans', icon: '📋', description: 'Customized maintenance plans to keep your systems running smoothly.', details: ['Regular inspections', 'Priority service calls', 'Discounted repairs', 'Spring & fall tune-ups'] }
  ];

  return (
    <div className="services-page">
      <section className="page-header">
        <div className="container">
          <h1>Our HVAC Services</h1>
          <p>Comprehensive heating, cooling, and ventilation solutions for your needs</p>
        </div>
      </section>

      <section className="services-section section-padding">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card-detailed">
                <div className="service-icon-lg">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.details.map((detail, index) => (
                    <li key={index}>✓ {detail}</li>
                  ))}
                </ul>
                <Link to="/inquiry" className="btn-primary">Get Quote</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-process section-padding">
        <div className="container">
          <h2>Our Service Process</h2>
          <div className="process-steps">
            <div className="step"><div className="step-number">1</div><h4>Contact Us</h4><p>Call or submit an online inquiry form</p></div>
            <div className="step-arrow">→</div>
            <div className="step"><div className="step-number">2</div><h4>Scheduling</h4><p>We schedule a convenient time for you</p></div>
            <div className="step-arrow">→</div>
            <div className="step"><div className="step-number">3</div><h4>Inspection</h4><p>Professional assessment of your system</p></div>
            <div className="step-arrow">→</div>
            <div className="step"><div className="step-number">4</div><h4>Service</h4><p>Expert service with quality workmanship</p></div>
            <div className="step-arrow">→</div>
            <div className="step"><div className="step-number">5</div><h4>Follow-up</h4><p>Warranty and ongoing support</p></div>
          </div>
        </div>
      </section>

      <section className="cta-services">
        <div className="container">
          <h2>Need HVAC Service?</h2>
          <p>Contact us today for professional service and competitive pricing</p>
          <div className="cta-buttons">
            <Link to="/inquiry" className="btn-primary">Get Free Quote</Link>
            <Link to="/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
