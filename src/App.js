import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import FinancingPage from './pages/FinancingPage';
import ContactPage from './pages/ContactPage';
import InquiryFormPage from './pages/InquiryFormPage';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/financing" element={<FinancingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/inquiry" element={<InquiryFormPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
