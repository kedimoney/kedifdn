import React from 'react';
import './calltoaction.css';

const CallToAction = ({ title, buttonText, onClick }) => {
  return (
    <section className="call-to-action">
      <h2>{title}</h2>
      <button onClick={onClick}>{buttonText}</button>
    </section>
  );
};

export default CallToAction;