import React from 'react';
import './partnerlogo.css';

const PartnerLogo = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} className="partner-logo" />
  );
};

export default PartnerLogo;