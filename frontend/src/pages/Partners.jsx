import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PartnerLogo from '../components/PartnerLogo';
import './partners.css';

const Partners = () => {
  const partners = [
    { src: 'https://via.placeholder.com/100', alt: 'Partner 1' },
    { src: 'https://via.placeholder.com/100', alt: 'Partner 2' },
    { src: 'https://via.placeholder.com/100', alt: 'Partner 3' },
    { src: 'https://via.placeholder.com/100', alt: 'Partner 4' },
  ];

  return (
    <div>
      <Navbar />
      <section className="partners-hero">
        <h1>Our Partners</h1>
        <p>Collaborating with organizations to amplify our impact.</p>
      </section>
      <section className="partners-logos">
        {partners.map((partner, index) => (
          <PartnerLogo key={index} src={partner.src} alt={partner.alt} />
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default Partners;