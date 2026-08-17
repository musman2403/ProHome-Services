import { 
  Droplet, 
  Thermometer, 
  Flame, 
  Wind, 
  Zap, 
  Check, 
  ArrowRight, 
  Phone, 
  Calendar,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

export default function Services() {
  const phoneNumber = "(555) 123-4567";

  const services = [
    {
      id: "emergency-plumbing",
      icon: <Droplet size={28} />,
      title: "Emergency Plumbing & Pipe Repairs",
      tag: "24/7 Priority Dispatch",
      startingPrice: "Free Inspection With Repair",
      desc: "Plumbing emergencies can quickly cause thousands of dollars in water damage. Our master plumbers arrive with fully stocked trucks ready to fix leaks, frozen pipes, and sewer backups immediately.",
      benefits: [
        "Rapid 30-min average response time",
        "Zero overtime or late-night surge rates",
        "Advanced leak detection technology",
        "Complete clean-up and moisture mitigation"
      ]
    },
    {
      id: "water-heaters",
      icon: <Thermometer size={28} />,
      title: "Water Heater Repair & Replacement",
      tag: "Same-Day Installation",
      startingPrice: "From $89 (Diagnostic)",
      desc: "Whether your water heater is making strange noises, leaking water, or simply blowing cold air, we offer rapid repairs and same-day replacements for both tankless and conventional systems.",
      benefits: [
        "High-efficiency tankless conversions",
        "All major brands (Rheem, Bradford White, AO Smith)",
        "Same-day replacement guarantee",
        "Up to 10-year manufacturer warranty support"
      ]
    },
    {
      id: "drain-cleaning",
      icon: <Flame size={28} />,
      title: "Hydro-Jetting & Sewer Line Cleaning",
      tag: "Free Camera Inspection",
      startingPrice: "From $99",
      desc: "Don't let stubborn clogs back up into your home. We use heavy-duty snakes and high-pressure hydro-jetting to completely scour grease, roots, and debris from your plumbing lines.",
      benefits: [
        "High-definition video pipe inspection",
        "Hydro-jetting up to 4000 PSI",
        "Main line and branch clearing",
        "Safe for all PVC, cast iron, and copper pipes"
      ]
    },
    {
      id: "hvac-heating",
      icon: <Wind size={28} />,
      title: "Heating, Furnace & A/C Service",
      tag: "EPA Certified Techs",
      startingPrice: "From $79 (Tune-up)",
      desc: "Stay comfortable in any season. We provide complete diagnostics, refrigerant recharge, compressor repair, and seasonal tune-ups to extend your HVAC system's lifespan.",
      benefits: [
        "Emergency furnace and AC breakdown repairs",
        "Comprehensive 21-point safety inspection",
        "Ductwork inspection and air quality check",
        "Transparent pricing with written estimates"
      ]
    },
    {
      id: "electrical-service",
      icon: <Zap size={28} />,
      title: "Electrical Panels, Outlets & Wiring",
      tag: "Licensed Master Electricians",
      startingPrice: "From $95",
      desc: "Protect your family from electrical hazards. From circuit breaker replacements to EV charger installs and whole-home rewiring, our licensed electricians handle every job safely.",
      benefits: [
        "200 Amp breaker panel upgrades",
        "GFCI and modern outlet installations",
        "Dedicated circuits for heavy appliances",
        "Whole-home surge protection"
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="services-hero">
        <div className="container text-center">
          <span className="section-pill" style={{ background: 'rgba(255,255,255,0.1)', color: '#ffffff' }}>
            Upfront Pricing • Guaranteed Work
          </span>
          <h1 className="services-hero-title">Expert Home Solutions</h1>
          <p className="services-hero-subtitle">
            Every service includes clear upfront pricing, licensed master technicians, and a 100% satisfaction guarantee.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section services-content-section">
        <div className="container">
          <div className="services-stack">
            {services.map((service, idx) => (
              <div key={service.id} className="card service-block">
                <div className="service-block-header">
                  <div className="service-icon-bubble">
                    {service.icon}
                  </div>
                  <div className="service-block-title-group">
                    <div className="service-pill-row">
                      <span className="service-tag">{service.tag}</span>
                      <span className="service-price-tag">{service.startingPrice}</span>
                    </div>
                    <h2>{service.title}</h2>
                  </div>
                </div>

                <p className="service-block-desc">{service.desc}</p>

                <div className="service-benefits-grid">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="service-benefit-item">
                      <Check size={16} className="benefit-check" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="service-block-actions">
                  <Link to="/contact" className="btn btn-primary">
                    <Calendar size={16} />
                    <span>Request Service</span>
                  </Link>
                  <a href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`} className="btn btn-secondary">
                    <Phone size={16} />
                    <span>Call For Estimate</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Assurance Banner */}
      <section className="emergency-assurance">
        <div className="container">
          <div className="assurance-box">
            <div className="assurance-text">
              <span className="status-indicator" style={{ color: '#ffffff', marginBottom: '8px' }}>
                <span className="status-dot"></span> 24/7 Live Emergency Line
              </span>
              <h3>Don't See Your Specific Issue Listed?</h3>
              <p>We handle all custom plumbing, heating, cooling, and electrical repairs. Call our on-call tech directly.</p>
            </div>
            <a href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`} className="btn btn-primary assurance-btn">
              <Phone size={18} />
              <span>Call (555) 123-4567</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
