import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const phoneNumber = "(555) 123-4567";
  
  return (
    <div className="contact-page">
      <section className="section-bg" style={{ padding: '60px 0' }}>
        <div className="container">
          <h1 className="section-title">Contact Us</h1>
          <p className="section-subtitle">We're here to help. Reach out for a free quote or emergency service.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            
            {/* Contact Info */}
            <div className="contact-info">
              <h2 className="mb-4">Get In Touch</h2>
              
              <div className="info-card">
                <Phone className="info-icon" />
                <div>
                  <h3>Call Us Directly</h3>
                  <p className="text-large"><a href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`}>{phoneNumber}</a></p>
                  <p className="text-accent mt-2"><strong>24/7 Emergency Line Available</strong></p>
                </div>
              </div>

              <div className="info-card">
                <Mail className="info-icon" />
                <div>
                  <h3>Email Us</h3>
                  <p><a href="mailto:info@homeservicespro.com">info@homeservicespro.com</a></p>
                </div>
              </div>

              <div className="info-card">
                <MapPin className="info-icon" />
                <div>
                  <h3>Service Area</h3>
                  <p>Serving Metro City, Northside, West End, and the South Suburbs.</p>
                </div>
              </div>

              <div className="info-card">
                <Clock className="info-icon" />
                <div>
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed (Emergencies Only)</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper card">
              <h2 className="mb-4">Send a Message</h2>
              <form 
                action="mailto:info@homeservicespro.com"
                method="GET"
                className="contact-form"
              >
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Name</label>
                  <input type="text" id="subject" name="subject" className="form-control" placeholder="Your Name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="body" className="form-label">Message (Please include your phone number)</label>
                  <textarea id="body" name="body" className="form-control" placeholder="How can we help you?" required></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-large" style={{width: '100%'}}>
                  Send Message
                </button>
              </form>
            </div>

          </div>

          {/* Map Placeholder */}
          <div className="map-container mt-8 card">
            <div className="map-placeholder">
              <MapPin size={48} color="var(--primary)" />
              <h3>Interactive Google Map</h3>
              <p>Embed code goes here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
