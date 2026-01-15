import React from 'react';
import './impactcard.css';

const ImpactCard = ({ number, title, description }) => {
  return (
    <div className="impact-card">
      <div className="impact-card-number">{number}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ImpactCard;