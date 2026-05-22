# National Mechanic Maintenance - HVAC Website

A professional React-based website for an HVAC business offering heating, cooling, and ventilation services.

## 🌐 Features

- **Responsive Design**: Mobile-first approach, works on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Multiple Pages**: Home, Services, Financing, Contact, Inquiry Form
- **Key Features**: 24/7 service, emergency support, financing options, service inquiry forms, testimonials

## 🚀 Getting Started

### Installation

```bash
npm install
npm start
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.js & Navigation.css
│   ├── Footer.js & Footer.css
├── pages/
│   ├── HomePage.js & HomePage.css
│   ├── ServicesPage.js & ServicesPage.css
│   ├── FinancingPage.js & FinancingPage.css
│   ├── ContactPage.js & ContactPage.css
│   ├── InquiryFormPage.js & InquiryFormPage.css
├── App.js, App.css, index.js, index.css
```

## 🎨 Color Scheme

- Primary Blue: #0066cc
- Secondary Orange: #ff6b35
- Dark Blue: #004a99

## 🔧 Customization

Update business info in:
- `src/components/Footer.js` - Contact details
- `src/pages/ContactPage.js` - Business information
- Replace emoji logo in `Navigation.js` with your actual logo

## 🚢 Build for Production

```bash
npm run build
```

This creates an optimized build in the `build/` folder.

## 📦 Dependencies

- react ^18.2.0
- react-dom ^18.2.0
- react-router-dom ^6.8.0
- react-scripts 5.0.1

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: Below 768px
