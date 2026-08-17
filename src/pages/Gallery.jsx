import './Gallery.css';

export default function Gallery() {
  const jobs = [
    { title: "Water Heater Replacement", location: "Metro City", type: "Plumbing", image: "/assets/gallery_plumbing.jpg" },
    { title: "Main Line Clearing", location: "Northside", type: "Drain Cleaning", image: "/assets/gallery_plumbing.jpg" },
    { title: "A/C Condenser Install", location: "West End", type: "HVAC", image: "/assets/gallery_hvac.jpg" },
    { title: "Repiping Job", location: "South Suburbs", type: "Plumbing", image: "/assets/gallery_plumbing.jpg" },
    { title: "Furnace Repair", location: "Metro City", type: "HVAC", image: "/assets/gallery_hvac.jpg" },
    { title: "Electrical Panel Upgrade", location: "Northside", type: "Electrical", image: "/assets/gallery_electrical.jpg" }
  ];

  return (
    <div className="gallery-page">
      <section className="section-bg" style={{ padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 className="section-title">Our Work</h1>
          <p className="section-subtitle">See the quality of our craftsmanship for yourself.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {jobs.map((job, index) => (
              <div key={index} className="gallery-item card">
                <div className="gallery-img">
                  <img src={job.image} alt={job.title} style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
                </div>
                <div className="gallery-info">
                  <h3>{job.title}</h3>
                  <p>{job.type} &bull; {job.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="upsell-section text-center mt-8 card section-bg">
            <h3>Don't have professional photos yet?</h3>
            <p className="mt-4 text-muted">
              High-quality before and after photos drastically increase conversion rates for home service websites. 
              Ask about our photo-shoot add-on to build trust with real, local job site images instead of stock photos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
