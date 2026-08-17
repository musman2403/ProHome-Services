import { Outlet, Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, Wrench } from 'lucide-react';
import { useState } from 'react';
import './Layout.css';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  const phoneNumber = "(555) 123-4567";

  return (
    <div className="layout">
      {/* Top Bar for Trust & Contact (Desktop only) */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-item">
            <MapPin size={16} /> Serving the Greater Metro Area
          </div>
          <div className="top-bar-item">
            <Mail size={16} /> info@homeservicespro.com
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <header className="header">
        <div className="container header-content">
          {/* Logo */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <Wrench size={32} className="logo-icon" />
            <span className="logo-text">ProHome Services</span>
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

          {/* CTA & Mobile Toggle */}
          <div className="header-actions">
            <a href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`} className="btn btn-primary cta-btn">
              <Phone size={20} />
              <span className="cta-text">{phoneNumber}</span>
            </a>
            
            <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="mobile-nav">
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-col">
            <div className="logo footer-logo">
              <Wrench size={24} className="logo-icon" />
              <span className="logo-text">ProHome Services</span>
            </div>
            <p className="footer-desc">
              Your trusted local experts for all home service needs. Licensed, insured, and ready to help 24/7.
            </p>
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
            <h4 className="footer-heading">Service Areas</h4>
            <ul className="footer-links">
              <li>Metro City</li>
              <li>Northside</li>
              <li>West End</li>
              <li>South Suburbs</li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="footer-contact">
              <p><Phone size={16} /> {phoneNumber}</p>
              <p><Mail size={16} /> info@homeservicespro.com</p>
              <p className="emergency-note">24/7 Emergency Service Available</p>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>&copy; {new Date().getFullYear()} ProHome Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
