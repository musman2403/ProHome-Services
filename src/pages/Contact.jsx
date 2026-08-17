import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Calendar
} from 'lucide-react';
import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const phoneNumber = "(555) 123-4567";
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    // Standard mailto will trigger
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* Hero Header */}
      <section className="contact-hero">
        <div className="container text-center">
          <span className="section-pill" style={{ background: 'rgba(255,255,255,0.1)', color: '#ffffff' }}>
            Fast Response Dispatch
          </span>
          <h1 className="contact-hero-title">Contact Our On-Call Team</h1>
          <p className="contact-hero-subtitle">
            Need emergency repairs or a free in-person estimate? We're ready 24 hours a day, 7 days a week.
          </p>
        </div>
      </section>

      <section className="section contact-section-main">
        <div className="container">
          <div className="contact-main-grid">
            {/* Left: Contact Info & Emergency Call Card */}
            <div className="contact-info-column">
              {/* Emergency Priority Card */}
              <div className="priority-call-card">
                <div className="priority-card-badge">
                  <span className="status-dot"></span>
                  <span>Immediate Emergency Help</span>
                </div>
                <h3>Have an active leak or heating failure?</h3>
                <p>Don't wait for email. Call our direct dispatch line right now for immediate technician arrival.</p>
                <a href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`} className="btn btn-primary priority-dial-btn">
                  <Phone size={20} />
                  <span>Call {phoneNumber}</span>
                </a>
              </div>

              {/* Info Items List */}
              <div className="contact-details-stack">
                <div className="contact-detail-card card">
                  <div className="detail-icon-box">
                    <Mail size={20} />
                  </div>
                  <div className="detail-text">
                    <h4>Direct Email</h4>
                    <p><a href="mailto:info@homeservicespro.com">info@homeservicespro.com</a></p>
                    <span className="detail-sub">Responses within 2 hours</span>
                  </div>
                </div>

                <div className="contact-detail-card card">
                  <div className="detail-icon-box">
                    <Clock size={20} />
                  </div>
                  <div className="detail-text">
                    <h4>Working Hours</h4>
                    <p>Monday – Friday: 7:00 AM – 7:00 PM</p>
                    <p>Saturday – Sunday: 8:00 AM – 4:00 PM</p>
                    <span className="detail-sub text-orange font-bold">24/7 Emergency Line Always Active</span>
                  </div>
                </div>

                <div className="contact-detail-card card">
                  <div className="detail-icon-box">
                    <MapPin size={20} />
                  </div>
                  <div className="detail-text">
                    <h4>Main Headquarters & Dispatch</h4>
                    <p>100 Central Parkway, Suite 400<br />Metro City, MC 90210</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Rapid Estimate Form */}
            <div className="contact-form-column">
              <div className="card form-card">
                <div className="form-card-header">
                  <h2>Request Free Estimate</h2>
                  <p>Fill out this short form and an on-duty technician will contact you shortly.</p>
                </div>

                {submitted && (
                  <div className="form-success-banner">
                    <CheckCircle2 size={20} />
                    <div>
                      <strong>Thank you!</strong>
                      <p>Your mail client has been opened to send your request. We'll be in touch right away!</p>
                    </div>
                  </div>
                )}

                <form 
                  action="mailto:info@homeservicespro.com" 
                  method="GET" 
                  className="rapid-form"
                  onSubmit={handleSubmit}
                >
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Full Name & Phone Number *</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      className="form-control" 
                      placeholder="e.g. John Smith - (555) 000-1234" 
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service-type" className="form-label">Service Needed *</label>
                    <select id="service-type" className="form-control" required>
                      <option value="plumbing-emergency">Emergency Plumbing (Burst Pipe, Leak)</option>
                      <option value="water-heater">Water Heater Repair or Install</option>
                      <option value="drain-sewer">Drain Cleaning / Hydro-Jetting</option>
                      <option value="hvac-ac">Heating & Air Conditioning (HVAC)</option>
                      <option value="electrical">Electrical Repair / Panel Upgrade</option>
                      <option value="other">General Home Service Inquiry</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="body" className="form-label">Describe the Issue or Job Details *</label>
                    <textarea 
                      id="body" 
                      name="body" 
                      className="form-control form-textarea" 
                      placeholder="Please let us know your address, urgency level, and what problem you're experiencing..." 
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-large form-submit-btn">
                    <Send size={18} />
                    <span>Send Service Request</span>
                  </button>

                  <div className="form-privacy-note">
                    <ShieldCheck size={16} />
                    <span>Your information is strictly confidential. No spam, ever.</span>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Interactive Map Block */}
          <div className="map-wrapper card mt-8">
            <div className="map-mockup">
              <div className="map-marker-bubble">
                <MapPin size={24} className="map-pin-icon" />
                <div className="map-marker-text">
                  <strong>ProHome Services Dispatch</strong>
                  <span>Serving Metro City & 25-Mile Radius</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
