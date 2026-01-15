import React from 'react';
import './hero.css';

const Hero = ({ title, subtitle, buttonText, onClick }) => {
  return (
    <section className="hero">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <button onClick={onClick}>{buttonText}</button>
    </section>
  );
};

export default Hero;