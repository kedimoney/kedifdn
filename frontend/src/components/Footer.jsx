import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>KEDI FOUNDATION empowers rural communities in Rwanda through agriculture, technology, and sustainable development.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/programs">Programs</a></li>
            <li><a href="/impact">Impact</a></li>
            <li><a href="/partners">Partners</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: kedimoneynetwork@gmail.com</p>
          <p>Phone: +250 795 772 698</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 KEDIFDN. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;