import { 
  ShieldCheck, 
  Award, 
  ThumbsUp, 
  HeartHandshake, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Phone, 
  Star 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
  const phoneNumber = "(555) 123-4567";

  const stats = [
    { number: "15+", label: "Years in Service" },
    { number: "5,000+", label: "Homes Repaired" },
    { number: "4.9★", label: "Google Rating" },
    { number: "100%", label: "Satisfaction Guarantee" }
  ];

  const values = [
    {
      icon: <HeartHandshake size={24} />,
      title: "Honesty Before Profit",
      desc: "If a simple $50 part will fix your system safely, we'll never try to sell you a $5,000 replacement."
    },
    {
      icon: <Clock size={24} />,
      title: "Respect for Your Time",
      desc: "We give precise 2-hour arrival windows and call 30 minutes ahead so you aren't stuck waiting all day."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Master-Level Craftsmanship",
      desc: "All technicians are rigorously vetted, state-licensed, drug-tested, and undergo weekly code training."
    }
  ];

  const serviceAreas = [
    "Metro City (Downtown)", "Northside Suburbs", "West End & Highlands", 
    "South Valley", "East Pine Ridge", "Oakridge District", "Silver Lake Area"
  ];

  return (
    <div className="about-page">
      {/* Hero Header */}
      <section className="about-hero">
        <div className="container text-center">
          <span className="section-pill" style={{ background: 'rgba(255,255,255,0.1)', color: '#ffffff' }}>
            Locally Owned & Operated Since 2011
          </span>
          <h1 className="about-hero-title">Built On Trust, Not Upsells</h1>
          <p className="about-hero-subtitle">
            We started ProHome Services to bring old-school honesty, upfront pricing, and master-level expertise back to home services.
          </p>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <div className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story & Team Section */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-visual">
              <div className="about-img-frame">
                <img 
                  src="/assets/team_photo.jpg" 
                  alt="ProHome founder and team" 
                  className="about-main-img" 
                />
                <div className="about-trust-tag">
                  <Star size={16} fill="#f59e0b" color="#f59e0b" />
                  <span>Licensed Master Plumbers & HVAC Specialists</span>
                </div>
              </div>
            </div>

            <div className="about-text-content">
              <span className="section-pill">Our Origin</span>
              <h2>A Contractor You Can Finally Recommend to Your Family</h2>
              <p className="lead-p">
                After spending over a decade watching large regional contractors push unnecessary $10,000 system replacements on elderly homeowners, our founder decided enough was enough.
              </p>
              <p>
                ProHome Services was established with a singular code of conduct: diagnose honestly, fix problems properly the first time, and quote fixed prices before touching a single wrench. Today, our fleet handles over 500 emergency calls every single month with a stellar 4.9-star rating.
              </p>

              <div className="trust-certifications-row">
                <div className="cert-item">
                  <ShieldCheck size={20} className="cert-icon" />
                  <span>State License #PL-94821</span>
                </div>
                <div className="cert-item">
                  <Award size={20} className="cert-icon" />
                  <span>EPA Clean Air Certified</span>
                </div>
                <div className="cert-item">
                  <ThumbsUp size={20} className="cert-icon" />
                  <span>$2M Liability Protection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section section-bg">
        <div className="container">
          <div className="section-header">
            <span className="section-pill">Our Core Standards</span>
            <h2 className="section-title">What Guides Every Service Call</h2>
            <p className="section-subtitle">
              We treat your home and wallet with the exact same care we'd give our own families.
            </p>
          </div>

          <div className="values-grid">
            {values.map((v, idx) => (
              <div key={idx} className="card value-card">
                <div className="value-icon-box">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="section">
        <div className="container">
          <div className="service-area-box card">
            <div className="service-area-header">
              <div className="service-area-icon">
                <MapPin size={24} />
              </div>
              <div>
                <h2>Our Coverage & Service Territory</h2>
                <p>Same-day and 24/7 emergency dispatch available across all listed areas:</p>
              </div>
            </div>

            <div className="service-areas-pills">
              {serviceAreas.map((area, i) => (
                <div key={i} className="area-pill">
                  <CheckCircle2 size={14} className="area-check" />
                  <span>{area}</span>
                </div>
              ))}
            </div>

            <div className="service-area-footer">
              <span>Outside this zone? Call us to check technician availability!</span>
              <a href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`} className="btn btn-primary">
                <Phone size={16} />
                <span>Call {phoneNumber}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
