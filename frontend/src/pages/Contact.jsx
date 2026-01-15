import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { submitContact } from '../services/api';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitContact(formData);
      setMessage('Thank you for contacting us!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setMessage('Failed to submit. Please try again.');
    }
  };

  return (
    <div>
      <Navbar />
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you.</p>
      </section>
      <section className="contact-info">
        <h2>Get in Touch</h2>
        <p><strong>Phone:</strong> +250 795 772 698</p>
        <p><strong>Email:</strong> kedimoneynetwork@gmail.com</p>
      </section>
      <section className="contact-form-section">
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label>Message:</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required />
          </div>
          <button type="submit">Submit</button>
        </form>
        {message && <p className="contact-message">{message}</p>}
      </section>
      <Footer />
    </div>
  );
};

export default Contact;