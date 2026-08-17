import { Droplet, Thermometer, PenTool as Tool, Wind, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

export default function Services() {
  const services = [
    {
      id: "emergency",
      icon: <Tool size={48} />,
      title: "Emergency Plumbing",
      desc: "Burst pipes, major leaks, and toilet overflows don't wait for business hours. Our 24/7 emergency response team is always ready to tackle your most urgent plumbing disasters to prevent water damage.",
      features: ["24/7 Availability", "Rapid Response Time", "Water Damage Mitigation"]
    },
    {
      id: "water-heaters",
      icon: <Thermometer size={48} />,
      title: "Water Heater Repair & Install",
      desc: "Whether you have no hot water, a leaking tank, or want to upgrade to a tankless system, our experts can diagnose, repair, or replace your water heater efficiently.",
      features: ["Tankless Upgrades", "Same-Day Replacement", "Routine Maintenance"]
    },
    {
      id: "drain-cleaning",
      icon: <Droplet size={48} />,
      title: "Professional Drain Cleaning",
      desc: "Stubborn clogs in sinks, tubs, and main sewer lines require professional equipment. We use advanced hydro-jetting and snaking techniques to clear blockages completely.",
      features: ["Camera Inspections", "Hydro-Jetting", "Main Line Clearing"]
    },
    {
      id: "hvac",
      icon: <Wind size={48} />,
      title: "HVAC Services",
      desc: "Keep your home comfortable year-round. We provide comprehensive repair, maintenance, and installation for all major brands of air conditioners and furnaces.",
      features: ["A/C Repair", "Furnace Tune-Ups", "Indoor Air Quality"]
    }
  ];

  return (
    <div className="services-page">
      <section className="section-bg" style={{ padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 className="section-title">Our Services</h1>
          <p className="section-subtitle">Expert solutions for your home. Free estimates on all major installations.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-list">
            {services.map(service => (
              <div key={service.id} className="service-detail-card card">
                <div className="service-detail-icon">
                  {service.icon}
                </div>
                <div className="service-detail-content">
                  <h2>{service.title}</h2>
                  <p className="service-detail-desc">{service.desc}</p>
                  <ul className="service-features">
                    {service.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <div className="service-detail-actions">
                    <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-bg text-center">
        <div className="container">
          <h2 className="section-title">Need Immediate Help?</h2>
          <p className="section-subtitle">Our emergency team is standing by 24/7.</p>
          <a href="tel:5551234567" className="btn btn-primary btn-large">Call (555) 123-4567</a>
        </div>
      </section>
    </div>
  );
}
