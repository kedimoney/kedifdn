import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { submitVolunteer } from '../services/api';
import './donate.css';

const Donate = () => {
  const [formData, setFormData] = useState({ name: '', email: '', skills: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitVolunteer(formData);
      setMessage('Thank you for your interest in volunteering!');
      setFormData({ name: '', email: '', skills: '' });
    } catch (error) {
      setMessage('Failed to submit. Please try again.');
    }
  };

  return (
    <div>
      <Navbar />
      <section className="donate-hero">
        <h1>Donate & Volunteer</h1>
        <p>Your support helps us make a difference.</p>
      </section>
      <section className="donate-info">
        <h2>Donation Information</h2>
        <p>You can donate via bank transfer or online platforms. Contact us for details.</p>
        <p>Bank: Example Bank, Account: 123456789</p>
      </section>
      <section className="donate-volunteer">
        <h2>Volunteer with Us</h2>
        <form onSubmit={handleSubmit} className="donate-form">
          <div>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label>Skills:</label>
            <textarea name="skills" value={formData.skills} onChange={handleChange} required />
          </div>
          <button type="submit">Submit</button>
        </form>
        {message && <p className="donate-message">{message}</p>}
      </section>
      <Footer />
    </div>
  );
};

export default Donate;