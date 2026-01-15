import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImpactCard from '../components/ImpactCard';
import './impact.css';

const Impact = () => {
  const statistics = [
    { number: '5000+', title: 'Students Educated', description: 'Children receiving quality education.' },
    { number: '200+', title: 'Communities Served', description: 'Areas impacted by our programs.' },
    { number: '100+', title: 'Volunteers', description: 'Dedicated individuals making a difference.' },
  ];

  const testimonials = [
    { name: 'John Doe', text: 'KEDIFDN changed my life through education.' },
    { name: 'Jane Smith', text: 'Amazing organization doing great work.' },
  ];

  return (
    <div>
      <Navbar />
      <section className="impact-hero">
        <h1>Our Impact</h1>
        <p>Measuring the difference we make in communities.</p>
      </section>
      <section className="impact-section impact-statistics">
        <h2>Statistics</h2>
        <div className="cards-container">
          {statistics.map((stat, index) => (
            <ImpactCard key={index} number={stat.number} title={stat.title} description={stat.description} />
          ))}
        </div>
      </section>
      <section className="impact-section impact-beneficiaries">
        <h2>Beneficiaries</h2>
        <p>Our programs have reached thousands of individuals, providing them with tools for a better future.</p>
      </section>
      <section className="impact-section impact-testimonials">
        <h2>Testimonials</h2>
        {testimonials.map((testimonial, index) => (
          <blockquote key={index}>
            "{testimonial.text}" - {testimonial.name}
          </blockquote>
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default Impact;