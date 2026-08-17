import { Outlet, Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, Wrench, Shield, Clock, ChevronRight, Calendar, Star } from 'lucide-react';
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

      {/* Global Footer */}
      <footer className="footer">
        <div className="container footer-grid">
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
              Your certified local experts for emergency plumbing, heating, cooling, and electrical solutions. Guaranteed upfront pricing.
            </p>
            <div className="footer-trust-badges">
              <div className="trust-pill">
                <Shield size={14} /> Licensed & Insured
              </div>
              <div className="trust-pill">
                <Star size={14} fill="#f59e0b" color="#f59e0b" /> 5-Star Rated
              </div>
            </div>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {navLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">Emergency Plumbing</Link></li>
              <li><Link to="/services">Water Heater Install</Link></li>
              <li><Link to="/services">Drain Jetting & Cleaning</Link></li>
              <li><Link to="/services">HVAC Repair & A/C</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Emergency Contact</h4>
            <div className="footer-contact">
              <a href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`} className="footer-phone-highlight">
                <Phone size={18} />
                <div>
                  <strong>{phoneNumber}</strong>
                  <span>24/7 Dispatch Team</span>
                </div>
              </a>
              <p className="footer-contact-item"><Mail size={15} /> info@homeservicespro.com</p>
              <p className="footer-contact-item"><MapPin size={15} /> Serving Greater Metro Area</p>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>&copy; {new Date().getFullYear()} ProHome Services LLC. All rights reserved. Upfront estimates, no hidden charges.</p>
        </div>
      </footer>
    </div>
  );
}
