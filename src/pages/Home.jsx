import { ArrowRight, ShieldCheck, Clock, CheckCircle2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const phoneNumber = "(555) 123-4567";

  const services = [
    { title: "Emergency Plumbing", desc: "Burst pipes, major leaks, and overflows handled 24/7." },
    { title: "Water Heaters", desc: "Repair, replacement, and maintenance for all models." },
    { title: "Drain Cleaning", desc: "Fast clearing of tough clogs in sinks, tubs, and main lines." },
    { title: "HVAC Repair", desc: "A/C and furnace repairs to keep your home comfortable." }
  ];

  const reviews = [
    { name: "Sarah M.", text: "Called at 2 AM for a burst pipe. They were here in 45 minutes and fixed it fast. Lifesavers!" },
    { name: "John D.", text: "Very professional, upfront pricing, and they left the work area cleaner than they found it." },
    { name: "Emily R.", text: "Honest assessment of my water heater. Didn't try to upsell me on a new one when a simple fix worked." }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">No Heat? No Hot Water? <span className="highlight">We're There Same Day.</span></h1>
            <p className="hero-subtitle">Fast, reliable home services when you need them most. Licensed experts serving the local area.</p>
            <div className="hero-actions">
              <a href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`} className="btn btn-primary btn-large">
                Call {phoneNumber}
              </a>
              <Link to="/contact" className="btn btn-outline btn-large bg-white">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar">
        <div className="container trust-container">
          <div className="trust-item">
            <Star className="trust-icon" /> Over 15 Years in Business
          </div>
          <div className="trust-item">
            <ShieldCheck className="trust-icon" /> Fully Licensed & Insured
          </div>
          <div className="trust-item">
            <CheckCircle2 className="trust-icon" /> Serving the Metro Area
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Expert Services</h2>
          <p className="section-subtitle">Comprehensive solutions for your home's most critical systems.</p>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="card service-card">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <Link to="/services" className="service-link">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-bg">
        <div className="container">
          <div className="split-layout">
            <div className="split-content">
              <h2 className="section-title" style={{textAlign: 'left'}}>Why Choose ProHome?</h2>
              <ul className="benefits-list">
                <li>
                  <Clock className="benefit-icon" />
                  <div>
                    <h4>Lightning Fast Response</h4>
                    <p>We know emergencies can't wait. We dispatch our nearest tech immediately.</p>
                  </div>
                </li>
                <li>
                  <CheckCircle2 className="benefit-icon" />
                  <div>
                    <h4>Upfront, Honest Pricing</h4>
                    <p>No hidden fees or surprise charges. You approve the price before we start.</p>
                  </div>
                </li>
                <li>
                  <ShieldCheck className="benefit-icon" />
                  <div>
                    <h4>Licensed & Vetted Techs</h4>
                    <p>Our technicians are background-checked, highly trained, and fully licensed.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="split-image">
              <img src="/assets/team_photo.jpg" alt="Our team of professionals" style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-lg)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <div key={index} className="card review-card">
                <div className="stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--accent)" color="var(--accent)" />)}
                </div>
                <p className="review-text">"{review.text}"</p>
                <p className="review-author">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section section-bg text-center">
        <div className="container">
          <h2 className="section-title">Ready to fix your home's issues?</h2>
          <p className="section-subtitle">Don't wait for a small problem to become a disaster.</p>
          <a href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`} className="btn btn-primary btn-large">
            Call Now: {phoneNumber}
          </a>
        </div>
      </section>
    </div>
  );
}
