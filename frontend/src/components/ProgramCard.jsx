import React from 'react';
import './programcard.css';

const ProgramCard = ({ icon, title, description }) => {
  return (
    <div className="program-card">
      <div className="program-card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProgramCard;