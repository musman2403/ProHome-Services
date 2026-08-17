import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Wrench, 
  Shield, 
  Clock, 
  ChevronRight, 
  Calendar, 
  Star,
  ShieldCheck,
  CheckCircle2,
  CreditCard,
  Zap,
  Award
} from 'lucide-react';
import { useState, useEffect } from 'react';
import './Layout.css';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  const serviceLinks = [
    { name: 'Emergency Plumbing', path: '/services' },
    { name: 'Water Heater Repair', path: '/services' },
    { name: 'Hydro-Jet Drain Cleaning', path: '/services' },
    { name: 'HVAC & A/C Repair', path: '/services' },
    { name: 'Electrical Panels & Wiring', path: '/services' }
  ];

  const serviceAreas = [
    'Metro City', 'Northside', 'West End', 'South Suburbs', 'East Valley', 'Oakridge'
  ];

  const phoneNumber = "(555) 123-4567";

  return (
    <div className="layout">
      {/* Top Banner (Desktop only) */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <span className="status-indicator">
              <span className="status-dot"></span>
              Emergency Techs On-Call 24/7
            </span>
            <span className="top-bar-divider">•</span>
            <span className="top-bar-item">
              <MapPin size={14} /> Serving Metro City & Surrounding Areas
            </span>
          </div>
          <div className="top-bar-right">
            <span className="top-bar-item">
              <Star size={14} fill="#f59e0b" color="#f59e0b" /> 4.9/5 Rating (350+ Reviews)
            </span>
            <span className="top-bar-divider">•</span>
            <a href="mailto:info@homeservicespro.com" className="top-bar-item">
              <Mail size={14} /> info@homeservicespro.com
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <header className="header">
        <div className="container header-content">
          {/* Logo */}
          <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
            <div className="logo-icon-wrapper">
              <Wrench size={20} className="logo-icon" />
            </div>
            <div className="logo-text-group">
              <span className="logo-title">ProHome</span>
              <span className="logo-subtitle">Services</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="header-actions">
            <a href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`} className="btn btn-primary header-call-btn">
              <Phone size={17} className="call-icon" />
              <div className="call-btn-text">
                <span className="call-label">Emergency Line</span>
                <span className="call-number">{phoneNumber}</span>
              </div>
            </a>
            
            <button 
              className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      <div className={`mobile-nav-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
        <div className="mobile-nav-drawer" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-drawer-header">
            <div className="status-indicator">
              <span className="status-dot"></span>
              24/7 Live Emergency Service
            </div>
            <button className="mobile-drawer-close" onClick={() => setIsMenuOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <div className="mobile-drawer-callout">
            <div className="drawer-callout-text">
              <h4>Need Immediate Help?</h4>
              <p>Average technician arrival time: <strong>30 mins</strong></p>
            </div>
            <a href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`} className="btn btn-primary drawer-phone-btn">
              <Phone size={18} />
              <span>Call {phoneNumber}</span>
            </a>
          </div>

          <nav className="mobile-drawer-links">
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`mobile-drawer-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{link.name}</span>
                <ChevronRight size={18} className="drawer-link-arrow" />
              </Link>
            ))}
          </nav>

          <div className="mobile-drawer-footer">
            <div className="drawer-info-item">
              <Shield size={16} /> Licensed, Bonded & Insured
            </div>
            <div className="drawer-info-item">
              <Clock size={16} /> Open 24 Hours, 7 Days a Week
            </div>
            <div className="drawer-info-item">
              <MapPin size={16} /> Serving Metro City Area
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Mobile Sticky Bottom Conversion Bar (Thumb Zone) */}
      <aside className="mobile-bottom-bar" aria-label="Quick Actions">
        <div className="mobile-bottom-bar-inner">
          <a href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`} className="mobile-bottom-btn mobile-btn-call">
            <Phone size={18} />
            <span>Call Now</span>
          </a>
          <Link to="/contact" className="mobile-bottom-btn mobile-btn-quote">
            <Calendar size={18} />
            <span>Free Quote</span>
          </Link>
        </div>
      </aside>

      {/* Rebuilt Professional Mobile-First Global Footer */}
      <footer className="footer">
        <div className="container">
          {/* 1. Mobile-Optimized Emergency Callout Card */}
          <div className="footer-emergency-card">
            <div className="footer-emergency-content">
              <div className="status-indicator footer-status">
                <span className="status-dot"></span>
                <span>On-Call Master Techs • Dispatching in 30 Mins</span>
              </div>
              <h3>Need Emergency Repairs or a Fast Quote?</h3>
              <p>Speak directly with our local master technicians. No waiting, no automated phone trees.</p>
            </div>
            <div className="footer-emergency-actions">
              <a href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`} className="btn btn-primary footer-cta-call">
                <Phone size={18} />
                <span>Call {phoneNumber}</span>
              </a>
              <Link to="/contact" className="btn btn-secondary footer-cta-quote">
                <Calendar size={18} />
                <span>Book Service Online</span>
              </Link>
            </div>
          </div>

          {/* 2. Main Footer Grid (Compact 2-Column on Mobile, 4-Column on Desktop) */}
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-col brand-col">
              <div className="logo footer-logo">
                <div className="logo-icon-wrapper">
                  <Wrench size={20} className="logo-icon" />
                </div>
                <div className="logo-text-group">
                  <span className="logo-title text-white">ProHome</span>
                  <span className="logo-subtitle text-orange">Services</span>
                </div>
              </div>
              <p className="footer-desc">
                Metro City's top-rated residential plumbing, heating, cooling, and electrical contractors. Licensed, bonded, and insured for total peace of mind.
              </p>
              
              <div className="footer-quick-contact">
                <a href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`} className="footer-contact-link">
                  <Phone size={15} className="contact-link-icon" />
                  <span>{phoneNumber} (24/7 Dispatch)</span>
                </a>
                <a href="mailto:info@homeservicespro.com" className="footer-contact-link">
                  <Mail size={15} className="contact-link-icon" />
                  <span>info@homeservicespro.com</span>
                </a>
                <div className="footer-contact-link">
                  <MapPin size={15} className="contact-link-icon" />
                  <span>100 Central Pkwy, Metro City</span>
                </div>
              </div>
            </div>
            
            {/* Navigation Links Column */}
            <div className="footer-col nav-col">
              <h4 className="footer-heading">Navigation</h4>
              <ul className="footer-links">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <Link to={link.path}>
                      <ChevronRight size={14} className="link-arrow" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services Links Column */}
            <div className="footer-col services-col">
              <h4 className="footer-heading">Our Services</h4>
              <ul className="footer-links">
                {serviceLinks.map(s => (
                  <li key={s.name}>
                    <Link to={s.path}>
                      <ChevronRight size={14} className="link-arrow" />
                      <span>{s.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Trust & Hours Column */}
            <div className="footer-col hours-col">
              <h4 className="footer-heading">Operating Hours</h4>
              <div className="footer-hours-box">
                <div className="hours-row">
                  <span className="hours-day">Mon – Fri:</span>
                  <span className="hours-time">7:00 AM – 7:00 PM</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">Saturday:</span>
                  <span className="hours-time">8:00 AM – 4:00 PM</span>
                </div>
                <div className="hours-row highlight-emergency">
                  <span className="hours-day">Emergency:</span>
                  <span className="hours-time">24 Hours / 7 Days</span>
                </div>
              </div>

              <div className="footer-badge-mini">
                <ShieldCheck size={16} className="badge-mini-icon" />
                <div>
                  <strong>State License #PL-94821</strong>
                  <span>$2,000,000 Liability Coverage</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Service Areas Tag Cloud */}
          <div className="footer-service-areas-bar">
            <span className="service-areas-label">
              <MapPin size={14} /> Service Areas Covered:
            </span>
            <div className="service-areas-chips">
              {serviceAreas.map(city => (
                <span key={city} className="city-chip">{city}</span>
              ))}
            </div>
          </div>



          {/* 5. Bottom Copyright & Disclaimer */}
          <div className="footer-bottom">
            <div className="footer-bottom-flex">
              <p>&copy; {new Date().getFullYear()} ProHome Services LLC. All rights reserved.</p>
              <div className="footer-legal-links">
                <span>Licensed Master Plumbers & HVAC Contractors</span>
                <span className="legal-dot">•</span>
                <span>Privacy Policy</span>
                <span className="legal-dot">•</span>
                <span>Terms of Service</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
