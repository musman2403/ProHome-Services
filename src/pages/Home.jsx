import { 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Star, 
  Phone, 
  Flame, 
  Droplet, 
  Thermometer, 
  Wind, 
  Zap, 
  Check, 
  Calendar 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const phoneNumber = "(555) 123-4567";

  const services = [
    { 
      title: "Emergency Plumbing", 
      desc: "Burst pipes, sewer backups, and major leaks resolved 24/7 with zero overtime fees.",
      icon: <Droplet size={22} />,
      badge: "24/7 Emergency",
      price: "Free Estimates"
    },
    { 
      title: "Water Heater Repair & Install", 
      desc: "Tankless and standard water heater repair, replacement, and annual tune-ups.",
      icon: <Thermometer size={22} />,
      badge: "Same-Day Install",
      price: "From $89"
    },
    { 
      title: "Hydro-Jet Drain Cleaning", 
      desc: "Fast clearing of tough clogs in main sewer lines, kitchen sinks, and shower drains.",
      icon: <Flame size={22} />,
      badge: "Camera Included",
      price: "From $99"
    },
    { 
      title: "HVAC & Heating Solutions", 
      desc: "Comprehensive A/C and furnace diagnostic, emergency repairs, and seasonal maintenance.",
      icon: <Wind size={22} />,
      badge: "Certified Techs",
      price: "Free Quote"
    }
  ];

  const trustPoints = [
    {
      icon: <Clock size={20} />,
      title: "Same-Day Dispatch",
      desc: "Average arrival time under 30 minutes for emergencies."
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Licensed & Insured",
      desc: "100% bonded, background-checked master technicians."
    },
    {
      icon: <CheckCircle2 size={20} />,
      title: "Upfront Flat Pricing",
      desc: "No hidden charges or surprise hourly billing. Ever."
    }
  ];

  const reviews = [
    { 
      name: "Sarah Jenkins", 
      location: "Metro City",
      date: "2 days ago",
      text: "Called at 2:30 AM for a massive burst pipe in the basement. They arrived in under 35 minutes and saved our flooring. Absolutely incredible service!",
      initial: "S"
    },
    { 
      name: "Michael Rodriguez", 
      location: "Northside",
      date: "1 week ago",
      text: "Our water heater died during winter. ProHome gave us an honest quote, had a new unit installed by 3 PM the same day. Upfront pricing with no tricks.",
      initial: "M"
    },
    { 
      name: "Emily Vance", 
      location: "West End",
      date: "2 weeks ago",
      text: "Super professional technicians. Wore shoe covers, explained every step before touching anything, and left the work area spotless.",
      initial: "E"
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              {/* Emergency Live Badge */}
              <div className="hero-badge">
                <span className="status-dot"></span>
                <span>24/7 Emergency Dispatch • 30-Min Arrival</span>
              </div>

              {/* High-Converting Headline */}
              <h1 className="hero-title">
                No Heat? No Hot Water? <br className="hero-br" />
                <span className="highlight-text">We're There Same Day.</span>
              </h1>

              <p className="hero-subtitle">
                Fast, dependable plumbing, HVAC, and emergency repairs across the Metro area. Transparent upfront pricing with a 100% satisfaction guarantee.
              </p>

              {/* Social Proof Strip */}
              <div className="hero-rating-badge">
                <div className="stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <span className="rating-text"><strong>4.9/5 Rating</strong> from 350+ Local Homeowners</span>
              </div>

              {/* Call-to-Action Buttons */}
              <div className="hero-actions">
                <a href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`} className="btn btn-primary hero-btn-call">
                  <Phone size={18} />
                  <span>Call {phoneNumber}</span>
                </a>
                <Link to="/contact" className="btn btn-secondary hero-btn-quote">
                  <Calendar size={18} />
                  <span>Get Free Estimate</span>
                </Link>
              </div>

              {/* Trust Guarantees Row */}
              <div className="hero-guarantees">
                <div className="guarantee-item">
                  <Check size={14} className="guarantee-icon" /> No Extra Weekend Fees
                </div>
                <div className="guarantee-item">
                  <Check size={14} className="guarantee-icon" /> Free In-Person Quotes
                </div>
                <div className="guarantee-item">
                  <Check size={14} className="guarantee-icon" /> 100% Guaranteed Work
                </div>
              </div>
            </div>

            {/* Desktop Hero Image / Mobile Feature Card */}
            <div className="hero-visual">
              <div className="hero-image-wrapper">
                <img 
                  src="/assets/team_photo.jpg" 
                  alt="Certified ProHome technicians" 
                  className="hero-main-img" 
                />
                <div className="hero-floating-card">
                  <div className="floating-card-icon">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <strong>15+ Years in Service</strong>
                    <p>Over 5,000+ happy homes served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Highlights Bar */}
      <section className="trust-strip">
        <div className="container">
          <div className="trust-grid">
            {trustPoints.map((item, idx) => (
              <div key={idx} className="trust-card">
                <div className="trust-card-icon">{item.icon}</div>
                <div className="trust-card-text">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-pill">Our Core Expertise</span>
            <h2 className="section-title">Emergency & Scheduled Services</h2>
            <p className="section-subtitle">
              From sudden midnight pipe bursts to full system installations, our certified techs handle it all with zero fuss.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="card service-card">
                <div className="service-card-top">
                  <div className="service-icon-box">{service.icon}</div>
                  <span className="service-badge">{service.badge}</span>
                </div>
                
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                
                <div className="service-card-footer">
                  <span className="service-price">{service.price}</span>
                  <Link to="/services" className="service-action-btn">
                    <span>Details</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="services-cta-box text-center mt-8">
            <Link to="/services" className="btn btn-outline">
              Explore All 12+ Available Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-bg why-us-section">
        <div className="container">
          <div className="why-us-grid">
            <div className="why-us-content">
              <span className="section-pill">The ProHome Difference</span>
              <h2 className="section-title">Why Metro City Homeowners Trust Us First</h2>
              <p className="section-subtitle" style={{ textAlign: 'left', marginBottom: '28px' }}>
                We believe in straightforward answers, clear prices before we touch any tool, and treating your home with utmost care.
              </p>

              <div className="benefits-stack">
                <div className="benefit-item">
                  <div className="benefit-number">01</div>
                  <div className="benefit-details">
                    <h4>Direct Phone Access to Real Technicians</h4>
                    <p>No endless robotic phone menus. You speak directly to our on-call dispatchers immediately.</p>
                  </div>
                </div>

                <div className="benefit-item">
                  <div className="benefit-number">02</div>
                  <div className="benefit-details">
                    <h4>Fixed Flat-Rate Pricing Guaranteed</h4>
                    <p>We provide a clear written quote before beginning any repair. Never any surprise hourly rates.</p>
                  </div>
                </div>

                <div className="benefit-item">
                  <div className="benefit-number">03</div>
                  <div className="benefit-details">
                    <h4>Clean Work Promise & Shoe Covers</h4>
                    <p>Our techs use heavy-duty floor covers and leave your home as clean as or cleaner than they found it.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="why-us-visual">
              <div className="why-us-image-card">
                <img 
                  src="/assets/team_photo.jpg" 
                  alt="ProHome Service Van and Team" 
                  className="why-us-img"
                />
                <div className="satisfaction-badge">
                  <CheckCircle2 size={24} className="sat-icon" />
                  <div>
                    <strong>100% Satisfaction Guarantee</strong>
                    <p>If you're not happy, we make it right at no cost.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Strip */}
      <section className="section reviews-section">
        <div className="container">
          <div className="section-header">
            <span className="section-pill">Real Homeowner Feedback</span>
            <h2 className="section-title">What Your Neighbors Are Saying</h2>
            <p className="section-subtitle">
              Verified 5-star reviews from real homeowners across the Metro area.
            </p>
          </div>

          <div className="reviews-grid">
            {reviews.map((rev, index) => (
              <div key={index} className="card review-card">
                <div className="review-card-header">
                  <div className="reviewer-avatar">{rev.initial}</div>
                  <div className="reviewer-info">
                    <h4>{rev.name}</h4>
                    <span className="reviewer-meta">{rev.location} • {rev.date}</span>
                  </div>
                  <div className="google-pill">
                    <span className="google-icon">G</span>
                  </div>
                </div>

                <div className="stars-row mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>

                <p className="review-quote">"{rev.text}"</p>
                <div className="verified-tag">
                  <CheckCircle2 size={13} /> Verified Service Customer
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Impact Bottom Conversion Banner */}
      <section className="bottom-cta-banner">
        <div className="container">
          <div className="cta-banner-inner">
            <div className="cta-banner-content">
              <span className="status-indicator" style={{ color: '#ffffff', marginBottom: '12px' }}>
                <span className="status-dot"></span> On-Call Technicians In Your Area
              </span>
              <h2>Have an Emergency or Need a Quote?</h2>
              <p>Call right now for same-day dispatch or get a rapid estimate online.</p>
            </div>
            
            <div className="cta-banner-actions">
              <a href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`} className="btn btn-primary cta-banner-btn">
                <Phone size={18} />
                <span>Call {phoneNumber}</span>
              </a>
              <Link to="/contact" className="btn btn-secondary cta-banner-btn-secondary">
                <Calendar size={18} />
                <span>Book Service Online</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
