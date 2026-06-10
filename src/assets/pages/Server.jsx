import React from 'react';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import Dash from '../components/Dash';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    title: "On-Premise Server Hubs",
    desc: "We build the physical brain of your business, ensuring your data lives exactly where you can control it.",
    icon: "🏗️",
    img: "https://images.unsplash.com/photo-1558494949-ef010bbbb317?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Enterprise Storage Arrays",
    desc: "Vault-level security for your files. We ensure your data is redundant, backed up, and immune to failure.",
    icon: "💾",
    img: "https://images.unsplash.com/photo-1597733336794-12d05321d51b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Hybrid Cloud Sync",
    desc: "The best of both worlds: fast local access coupled with global, secure cloud redundancy.",
    icon: "☁️",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
  }
];



const SectionHeading = ({ title, subtitle }) => (
  <div className="text-center mb-5 animate-fade-in">
    <span className="text-primary font-weight-bold text-uppercase tracking-widest small d-block mb-2" style={{ color: '#2563eb', letterSpacing: '2px' }}>
      {subtitle}
    </span>
    <h3 className="font-weight-bold text-dark display-5" style={{ fontWeight: '800' }}>{title}</h3>
  </div>
);

const Server = () => {


  return (
    <>
      <Navbar />
      <div className="bg-light min-vh-100">

        <Dash />
        {/* 1. HERO SECTION */}
        <header className="py-5 text-white shadow-sm" style={{ background: 'linear-gradient(135deg, #001f3f 0%, #0066FF 100%)' }}>
          <div className="container py-5 text-center">
            <h1 className="display-2 fw-bolder mb-4">The Backbone of Your Business.</h1>
            <p className="lead opacity-75 mb-5 max-width-700">
              eCROWN Technologies O2 is the industry leader in server and storage architecture.
              We turn chaotic data into organized, secure, and lightning-fast digital assets.
            </p>
            <a href="#education" className="btn btn-light btn-lg px-5 shadow">Understand Our Tech</a>
          </div>
        </header>

        {/* 2. EDUCATION LAYER */}
        <section id="education" className="py-5 bg-white">
          <div className="container">
            <SectionHeading title=" SERVER " subtitle="Think of your business as a giant, busy library." />
            <div className="row align-items-center">
              <div className="col-md-6">
                <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80" className="img-fluid rounded-4 shadow" alt="Library Analogy" />
              </div>
              <div className="col-md-6 p-4">
                <h3 className="text-primary fw-bold">The Server is the Librarian</h3>
                <p className="fs-5">Without a librarian, your library is just a pile of books on the floor. Customers can't find anything, and books go missing. <strong>A Server is that super-fast, super-smart librarian.</strong> It knows exactly where every single piece of information is, and it hands it to your employees the second they ask for it.</p>
                <h3 className="text-primary fw-bold">Storage is the Vault</h3>
                <p className="fs-5">If the server is the librarian, <strong>Storage is the giant, indestructible vault</strong> where the books live. We make sure that even if the library has a flood or a fire, the vault stays locked, safe, and dry.</p>
              </div>
            </div>
          </div>
        </section>



        <section className="bg-white py-5 border-top border-bottom">
          <div className="container py-4">
            <div className="text-center mx-auto mb-5" style={{ maxWidth: '700px' }}>
              <span className="text-primary text-uppercase fw-bold tracking-wide small d-block mb-1">.</span>
              <h2 className="fw-bold text-dark display-6">Our Technical Specialization</h2>
              <p className="text-muted">We don't do 'general' IT, We focus purely on heavy duty infrastructure.</p>
            </div>

            <div className="row g-4">
              {/* Product 1 */}
              <div className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 shadow-sm overflow-hidden border custom-product-card">
                  <div style={{ height: '200px', overflow: 'hidden' }}>
                    <img src="https://www.wowza.com/wp-content/uploads/UPDCloudBlog-BlogHeadernotext-c.png" alt="On-Premise Server Hubs infrastructure deployment
" className="w-100 h-100 object-fit-cover transition-img" />
                  </div>
                  <div className="p-4">
                    <h5 className="fw-bold text-dark">On-Premise Server Hubs</h5>
                    <p className="small text-muted mb-0">We build the physical brain of your business, ensuring your data lives exactly where you can control it.</p>
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 shadow-sm overflow-hidden border custom-product-card">
                  <div style={{ height: '200px', overflow: 'hidden' }}>
                    <img src="https://d2qt3hjxf3fk7j.cloudfront.net/wp-content/uploads/2020/10/26113206/network-attached-storage-1024x631.jpg" alt="
Enterprise Storage Arrays infrastructure deployment" className="w-100 h-100 object-fit-cover transition-img" />
                  </div>
                  <div className="p-4">
                    <h5 className="fw-bold text-dark">Enterprise Storage Arrays</h5>
                    <p className="small text-muted mb-0">ault-level security for your files. We ensure your data is redundant, backed up, and immune to failure.</p>
                  </div>
                </div>
              </div>

              {/* Product 3 */}
              <div className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 shadow-sm overflow-hidden border custom-product-card">
                  <div style={{ height: '200px', overflow: 'hidden' }}>
                    <img src="https://miro.medium.com/1*sq1QVCr10vwK282fcfy7dQ.jpeg" alt="High-Lumen Projectors" className="w-100 h-100 object-fit-cover transition-img" />
                  </div>
                  <div className="p-4">
                    <h5 className="fw-bold text-dark">Hybrid Cloud Sync</h5>
                    <p className="small text-muted mb-0">The best of both worlds: fast local access coupled with global, secure cloud redundancy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* 4. METHODOLOGY */}
        <section className="py-5 bg-dark text-white">
          <div className="container">
            <SectionHeading title="The eCROWN Methodology" subtitle="How we build systems that last a decade, not a year." />
            <div className="row">
              {[
                { step: "01. Architecture", text: "We map your data flow, identifying bottlenecks before we even pick up a screwdriver.", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" },
                { step: "02. Hardware Tuning", text: "We select components designed for 24/7 stress, avoiding consumer-grade equipment.", img: "https://www.computerwissen.de/fileadmin/_processed_/5/4/csm_CPU_Hardware_Tuning_21fb5f3514.jpeg" },
                { step: "03. The Clean Build", text: "Cable management isn't just aesthetic; it's physics. We organize for airflow.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKGgbhtQZ9snVDxanvXq9VteX3c0-tw5Ulw&s" },
                { step: "04. Stress Test", text: "We simulate crashes. If your data doesn't survive our worst-case scenario, we aren't finished.", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80" }
              ].map((item, i) => (
                <div key={i} className="col-md-3">
                  <img src={item.img} className="img-fluid rounded-2 mb-3" alt={item.step} />
                  <h3 className="text-primary fw-bold">{item.step}</h3>
                  <p className="text-white-50">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CASE STUDIES */}
        <section className="py-5 bg-white">
          <div className="container">
            <SectionHeading title="Success Stories" subtitle="Evidence of our engineering excellence." />
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm p-4">
                  <h4 className="text-primary fw-bold">Global Retail Chain</h4>
                  <p className="text-muted small text-uppercase">The Problem: High latency and data bottlenecks during peak sales.</p>
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" className="img-fluid rounded-3 my-3" alt="Retail Analytics" />
                  <p className="fw-bold">The eCROWN Solution:</p>
                  <p>We deployed high-speed flash-storage arrays. This cut latency by 60%, allowing 10,000+ simultaneous transactions.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm p-4">
                  <h4 className="text-primary fw-bold">Logistics Firm</h4>
                  <p className="text-muted small text-uppercase">The Problem: Frequent data loss due to hardware failure.</p>
                  <img src="https://www.mettel.net/wp-content/uploads/2025/01/blog-hybrid-network-feature-1-1024x675.png" className="img-fluid rounded-3 my-3" alt="Hybrid Network" />
                  <p className="fw-bold">The eCROWN Solution:</p>
                  <p>We implemented a Hybrid-Cloud architecture. Local servers handle daily operations, while an automated cloud-vault ensures data safety. Result: 99.99% uptime.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. EXPERT FAQ */}
        <section className="py-5 bg-light">
          <div className="container">
            <SectionHeading title="Expert Insights" subtitle="Common questions answered." />
            <div className="row">
              <div className="col-md-6">
                <div className="p-4 bg-white rounded shadow-sm h-100">
                  <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" className="img-fluid rounded-3 mb-3" alt="Hardware" />
                  <h5 className="fw-bold">What if a drive fails?</h5>
                  <p className="text-muted">We use RAID redundancy. Your data is mirrored across multiple drives. If one fails, the system runs as normal while we swap the hardware.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-4 bg-white rounded shadow-sm h-100">
                  <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80" className="img-fluid rounded-3 mb-3" alt="Cloud" />
                  <h5 className="fw-bold">Cloud vs. On-Premise?</h5>
                  <p className="text-muted">The best answer is Hybrid. On-premise for daily speed and low latency, cloud-vaults for off-site disaster recovery and compliance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FOOTER & CTA */}
        <section id="contact" className="py-5 text-center bg-primary text-white">
          <div className="container">
            <h2 className="display-4 fw-bold mb-4">Ready to secure your data?</h2>
            <p className="lead mb-4">Join the businesses that have stopped worrying about their storage and started scaling their operations.</p>
            <Link to="/request" >
              <button className="btn btn-outline-light btn-lg px-5">Request Service</button>
            </Link>
          </div>
        </section>

        <style>{`
        .hover-lift { transition: transform 0.3s ease; }
        .hover-lift:hover { transform: translateY(-10px); }
        .max-width-700 { max-width: 700px; margin: 0 auto; }
      `}</style>
      </div>

      <Footer />
      <Button />

    </>

  );
};

export default Server;