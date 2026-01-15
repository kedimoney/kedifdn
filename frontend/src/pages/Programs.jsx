import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProgramCard from '../components/ProgramCard';
import { getPrograms } from '../services/api';
import './programs.css';

const Programs = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await getPrograms();
        setPrograms(response.data);
      } catch (err) {
        setError('Failed to fetch programs');
      } finally {
        setLoading(false);
      }
    };
    fetchPrograms();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Navbar />
      <section className="programs-hero">
        <h1>Our Programs</h1>
        <p>Discover the initiatives we are proud to support.</p>
      </section>
      <section className="programs-list">
        {programs.map((program) => (
          <ProgramCard
            key={program.id}
            icon={program.icon}
            title={program.name}
            description={program.description}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default Programs;