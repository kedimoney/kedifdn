import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './about.css';

const About = () => {
  return (
    <div>
      <Navbar />
      <section className="about-hero">
        <h1>About KEDI FOUNDATION</h1>
        <p>🌱 Who is KEDI FOUNDATION?</p>
        <p>KEDI FOUNDATION is a Rwanda-based non-profit organization dedicated to empowering rural communities—especially farmers and livestock keepers—through value addition, market access, and technology-driven solutions. We leverage digital tools, capacity building, and partnerships to create sustainable impact in agriculture, livestock development, and community economic growth.</p>
        <p>Founded in Bugesera with a grassroots mindset and a tech-enabled approach, KEDI FOUNDATION bridges the gap between small-scale producers and modern markets, while uplifting livelihoods, fostering innovation, and promoting inclusive development.</p>
      </section>
      <section className="about-section">
        <h2>🌟 Vision</h2>
        <p>"A transformed and prosperous rural Rwanda where agriculture and technology work hand-in-hand to uplift communities and create sustainable livelihoods."</p>
        <p>We envision agricultural communities that are:</p>
        <ul>
          <li>economically empowered,</li>
          <li>technologically fluent,</li>
          <li>resilient, and</li>
          <li>actively engaged in value chains from farm to market.</li>
        </ul>
      </section>
      <section className="about-section">
        <h2>🎯 Mission</h2>
        <p>"To empower farmers, livestock producers, and rural communities through value-adding initiatives, market linkages, capacity building, and technology-driven solutions, transforming agriculture into sustainable economic growth for all."</p>
        <p>Our mission focuses on:</p>
        <ul>
          <li>organizing producers and cooperatives,</li>
          <li>facilitating access to markets and fair pricing,</li>
          <li>building digital and financial skills,</li>
          <li>leveraging innovation such as KEDI AI for advisory services,</li>
          <li>enabling efficient digital networks and platforms like KEDI Money Network and KEDI Marketplace.</li>
        </ul>
      </section>
      <section className="about-section about-values">
        <h2>🌍 Core Values</h2>
        <ul>
          <li>✅ Impact-Driven: We focus on measurable, sustainable outcomes that improve livelihoods and community well-being.</li>
          <li>🤝 Partnership & Collaboration: We build strong, ethical relationships with farmers, agribusinesses, NGOs, government agencies, and technology partners.</li>
          <li>💡 Innovation: We embrace relevant technology and creative solutions to overcome traditional agricultural challenges and enhance efficiency.</li>
          <li>📘 Capacity Building: We invest in knowledge, skills, and empowerment—believing that lasting change comes from strengthened communities.</li>
          <li>🌾 Integrity & Transparency: We operate with honesty, accountability, and transparent governance in all activities and financial matters.</li>
          <li>🌱 Inclusivity: We ensure equal opportunity and participation for women, youth, and marginalized groups in all projects.</li>
        </ul>
      </section>
      <section className="about-section">
        <h2>🧠 Example Practice Statement</h2>
        <p>"At KEDI FOUNDATION, we believe that technology, market access, and community collaboration are the foundations of rural prosperity. By empowering farmers with digital tools and strategic partnerships, we unlock new income streams and build resilient agricultural systems."</p>
      </section>
      <Footer />
    </div>
  );
};

export default About;