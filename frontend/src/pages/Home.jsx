import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ProgramCard from '../components/ProgramCard';
import CallToAction from '../components/CallToAction';
import './home.css';

const Home = () => {
  // Sample data for focus areas
  const focusAreas = [
    { icon: '📚', title: 'Education', description: 'Providing quality education to underprivileged children.' },
    { icon: '🌱', title: 'Sustainability', description: 'Promoting sustainable development practices.' },
    { icon: '🤝', title: 'Community', description: 'Building strong community networks.' },
  ];

  // Sample featured programs
  const featuredPrograms = [
    { icon: '🎓', title: 'Scholarship Program', description: 'Helping students achieve their dreams.' },
    { icon: '🏥', title: 'Health Initiative', description: 'Improving access to healthcare.' },
  ];

  const handleHeroButton = () => {
    // Navigate to about or something
    window.location.href = '/about';
  };

  const handleCTA = () => {
    window.location.href = '/donate';
  };

  return (
    <div>
      <Navbar />
      <Hero
        title="Empowering Communities Through Education and Development"
        subtitle="Join us in making a difference in the lives of many."
        buttonText="Learn More"
        onClick={handleHeroButton}
      />
      <section className="home-about">
        <h2>About KEDI FOUNDATION</h2>
        <p>KEDI FOUNDATION is a Rwanda-based non-profit organization dedicated to empowering rural communities—especially farmers and livestock keepers—through value addition, market access, and technology-driven solutions. We leverage digital tools, capacity building, and partnerships to create sustainable impact in agriculture, livestock development, and community economic growth.</p>
        <p>Founded in Bugesera with a grassroots mindset and a tech-enabled approach, KEDI FOUNDATION bridges the gap between small-scale producers and modern markets, while uplifting livelihoods, fostering innovation, and promoting inclusive development.</p>
      </section>
      <section className="home-focus-areas">
        <h2>Focus Areas</h2>
        <div className="cards-container">
          {focusAreas.map((area, index) => (
            <ProgramCard key={index} icon={area.icon} title={area.title} description={area.description} />
          ))}
        </div>
      </section>
      <section className="home-featured-programs">
        <h2>Featured Programs</h2>
        <div className="cards-container">
          {featuredPrograms.map((program, index) => (
            <ProgramCard key={index} icon={program.icon} title={program.title} description={program.description} />
          ))}
        </div>
      </section>
      <CallToAction
        title="Ready to Make a Difference?"
        buttonText="Donate Now"
        onClick={handleCTA}
      />
      <Footer />
    </div>
  );
};

export default Home;