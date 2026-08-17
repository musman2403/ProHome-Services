import { ShieldCheck, Award, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <section className="section-bg" style={{ padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 className="section-title">About Us</h1>
          <p className="section-subtitle">Your local, trusted home service experts.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split-layout">
            <div className="about-image">
              <img src="/assets/team_photo.jpg" alt="Owner and team" style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-lg)', objectFit: 'cover', aspectRatio: '3/4' }} />
            </div>
            
            <div className="about-content">
              <h2>Our Story</h2>
              <p>
                ProHome Services started with a simple mission: to provide honest, high-quality plumbing and HVAC services to our community. After working for large, impersonal corporations for over a decade, our founder realized that homeowners were tired of aggressive upselling and unreliable technicians.
              </p>
              <p className="mt-4">
                We built this business on trust, transparency, and doing the job right the first time. Today, we're proud to be the go-to experts for thousands of local families.
              </p>

              <h2 className="mt-8">Our Mission</h2>
              <p>
                To deliver fast, reliable, and professional home services with upfront pricing and guaranteed satisfaction.
              </p>

              <div className="badges-container mt-8">
                <div className="badge">
                  <ShieldCheck size={32} />
                  <span>Fully Licensed & Insured</span>
                </div>
                <div className="badge">
                  <Award size={32} />
                  <span>Master Plumbers</span>
                </div>
                <div className="badge">
                  <ThumbsUp size={32} />
                  <span>100% Satisfaction Guarantee</span>
                </div>
              </div>

              <div className="mt-8">
                <Link to="/contact" className="btn btn-primary btn-large">Ready to work with us?</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
