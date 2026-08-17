import { useState } from 'react';
import { MapPin, CheckCircle2, Sparkles, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Gallery.css';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Plumbing', 'HVAC', 'Electrical'];

  const jobs = [
    { 
      title: "50-Gal High-Efficiency Water Heater Replacement", 
      location: "Metro City", 
      type: "Plumbing", 
      image: "/assets/gallery_plumbing.jpg",
      time: "Same-Day Job",
      badge: "Before & After"
    },
    { 
      title: "Commercial-Grade Sewer Hydro-Jetting", 
      location: "Northside", 
      type: "Plumbing", 
      image: "/assets/gallery_plumbing.jpg",
      time: "Emergency Callout",
      badge: "Main Line Cleaned"
    },
    { 
      title: "High-SEER2 Outdoor A/C Condenser Unit", 
      location: "West End", 
      type: "HVAC", 
      image: "/assets/gallery_hvac.jpg",
      time: "Completed in 4 hrs",
      badge: "Energy Rebate Approved"
    },
    { 
      title: "Whole-Home PEX Water Line Repiping", 
      location: "South Suburbs", 
      type: "Plumbing", 
      image: "/assets/gallery_plumbing.jpg",
      time: "2-Day Project",
      badge: "Zero Wall Damage"
    },
    { 
      title: "Gas Furnace Heat Exchanger Overhaul", 
      location: "Metro City", 
      type: "HVAC", 
      image: "/assets/gallery_hvac.jpg",
      time: "Emergency Repair",
      badge: "Heat Restored"
    },
    { 
      title: "200-Amp Main Breaker Panel Modernization", 
      location: "Northside", 
      type: "Electrical", 
      image: "/assets/gallery_electrical.jpg",
      time: "Code-Compliant Upgrade",
      badge: "Pass 1st Inspection"
    }
  ];

  const filteredJobs = activeFilter === 'All' 
    ? jobs 
    : jobs.filter(j => j.type === activeFilter);

  return (
    <div className="gallery-page">
      {/* Hero Header */}
      <section className="gallery-hero">
        <div className="container text-center">
          <span className="section-pill" style={{ background: 'rgba(255,255,255,0.1)', color: '#ffffff' }}>
            Real Local Jobs • Real Proof
          </span>
          <h1 className="gallery-hero-title">Our Recent Job Portfolio</h1>
          <p className="gallery-hero-subtitle">
            See the standard of master-level craftsmanship we bring to every home. No shortcuts, ever.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="gallery-filter-bar">
        <div className="container">
          <div className="filter-pills-row">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-pill-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="section gallery-content-section">
        <div className="container">
          <div className="gallery-grid">
            {filteredJobs.map((job, index) => (
              <div key={index} className="card gallery-item-card">
                <div className="gallery-img-container">
                  <img src={job.image} alt={job.title} className="gallery-real-img" />
                  <span className="gallery-overlay-badge">{job.badge}</span>
                  <span className="gallery-time-badge">{job.time}</span>
                </div>
                <div className="gallery-card-body">
                  <div className="gallery-card-meta">
                    <span className="gallery-type-tag">{job.type}</span>
                    <span className="gallery-loc">
                      <MapPin size={13} /> {job.location}
                    </span>
                  </div>
                  <h3>{job.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Upsell / Contractor Photo Add-On Box */}
          <div className="contractor-upsell-box card mt-8">
            <div className="upsell-icon-bubble">
              <Sparkles size={28} />
            </div>
            <div className="upsell-text">
              <h3>Are You a Local Home Services Business Owner?</h3>
              <p>
                Real job-site photography like this increases customer conversion rates by over <strong>300%</strong> compared to generic stock templates. Ask our web team about adding on-site photo branding packages to your website.
              </p>
            </div>
            <div className="upsell-action">
              <Link to="/contact" className="btn btn-primary">
                <span>Inquire About Add-Ons</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
