import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FinancingPage.css';

function FinancingPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const financingOptions = [
    { 
      id: 1, 
      title: 'Personal Loans', 
      rate: '6.99% APR*', 
      color: '#e30613',
      terms: ['Up to $50,000', 'Flexible terms', '5-10 year options', 'Fast approval'],
      ratesDesc: 'Competitive rates with flexible repayment options.',
      applicationDesc: 'Apply online or with us using a secure credit application.',
      paymentsDesc: 'Monthly payments tailored to fit your budget.'
    },
    { 
      id: 2, 
      title: 'Credit Card', 
      rate: 'Promotional Rate', 
      color: '#1a5f8c',
      terms: ['12-24 months 0% APR', 'No money down', 'Quick approval', 'Immediate funds'],
      ratesDesc: 'Special promotional financing with 0% interest periods.',
      applicationDesc: 'Quick and secure online application process.',
      paymentsDesc: 'Convenient monthly payments that work for you.'
    },
    { 
      id: 3, 
      title: 'Home Equity Line', 
      rate: 'Prime + 1%*', 
      color: '#0066cc',
      terms: ['Large amounts', 'Low interest', 'Tax deductible', 'Flexible draws'],
      ratesDesc: 'Low rates on larger loan amounts.',
      applicationDesc: 'Easy application with fast approval.',
      paymentsDesc: 'Flexible payment options to match your budget.'
    },
    { 
      id: 4, 
      title: 'Rebates & Incentives', 
      rate: 'Save Up To', 
      color: '#e55a2b',
      terms: ['ENERGY STAR rebates', 'Tax credits', 'Utility rebates', 'Manufacturer offers'],
      ratesDesc: 'Maximize your savings with available incentives.',
      applicationDesc: 'We help you claim all eligible rebates and credits.',
      paymentsDesc: 'Lower your overall project cost significantly.'
    }
  ];

  const faq = [
    { question: 'What financing options do you offer?', answer: 'We offer flexible financing options including personal loans, credit cards, home equity lines, and work with multiple lenders to find the best rates for your situation.' },
    { question: 'How long does approval take?', answer: 'Approval typically takes 24-48 hours. In some cases, we can provide same-day approval for qualified customers.' },
    { question: 'Are there any hidden fees?', answer: 'No hidden fees! All financing terms are transparent and clearly outlined in your agreement. We believe in honest pricing.' },
    { question: 'Can I pay off my loan early?', answer: 'Yes! Most of our financing options allow early payoff without penalty. Check with your lender for specific terms.' }
  ];

  return (
    <div className="financing-page">
      <section className="page-header">
        <div className="container">
          <h1>Financing Options</h1>
          <p>Flexible payment plans to fit your budget</p>
        </div>
      </section>

      <section className="financing-section section-padding">
        <div className="container">
          <h2>Affordable Financing Solutions</h2>
          <p className="section-intro">We partner with leading lenders to offer flexible financing options for your HVAC needs.</p>
          
          <div className="financing-grid">
            {financingOptions.map((option) => (
              <div key={option.id} className="financing-card">
                {/* Logo Area */}
                <div className="logo-section">
                  <div 
                    className="brand-logo" 
                    style={{ backgroundColor: option.color }}
                  >
                    <span className="brand-text">{option.title.split(' ')[0]}</span>
                  </div>
                </div>

                <h3 className="card-title">{option.title}</h3>
                <div className="rate" style={{ color: option.color }}>{option.rate}</div>

                <button className="apply-today-btn">APPLY TODAY</button>

                {/* Trane-style Benefits */}
                <div className="benefits">
                  <div className="benefit">
                    <h4>Competitive Rates</h4>
                    <p>{option.ratesDesc}</p>
                  </div>
                  <div className="benefit">
                    <h4>Easy Application</h4>
                    <p>{option.applicationDesc}</p>
                  </div>
                  <div className="benefit">
                    <h4>Convenient Payments</h4>
                    <p>{option.paymentsDesc}</p>
                  </div>
                </div>

                <Link to="/inquiry" className="btn-primary">Learn More & Apply</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of your sections remain unchanged */}
      <section className="why-finance section-padding">
        <div className="container">
          <h2>Why Finance With Us?</h2>
          <div className="benefits-grid">
            <div className="benefit-item"><div className="benefit-icon">💰</div><h4>Low Interest Rates</h4><p>Competitive rates starting as low as 6.99% APR</p></div>
            <div className="benefit-item"><div className="benefit-icon">⚡</div><h4>Fast Approval</h4><p>Get approved in as little as 24 hours</p></div>
            <div className="benefit-item"><div className="benefit-icon">✅</div><h4>No Hidden Fees</h4><p>Transparent terms with no surprise charges</p></div>
            <div className="benefit-item"><div className="benefit-icon">🎯</div><h4>Flexible Terms</h4><p>Choose payment plans that work for you</p></div>
            <div className="benefit-item"><div className="benefit-icon">📋</div><h4>Easy Application</h4><p>Simple online application process</p></div>
            <div className="benefit-item"><div className="benefit-icon">💳</div><h4>All Credit Types</h4><p>We work with all credit profiles</p></div>
          </div>
        </div>
      </section>

      <section className="faq-section section-padding">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-container">
            {faq.map((item, index) => (
              <div key={index} className="faq-item">
                <button className="faq-question" onClick={() => setOpenFAQ(openFAQ === index ? null : index)}>
                  <span>{item.question}</span>
                  <span className="faq-arrow">{openFAQ === index ? '▼' : '▶'}</span>
                </button>
                {openFAQ === index && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <p className="disclaimer">*Terms and conditions apply. APR rates subject to credit approval. Ask about current promotional offers.</p>
    </div>
  );
}

export default FinancingPage;
