import '../CSS/HomePage.css';
import React from 'react';
import Hero from './Hero';
import Projects from './Projects';
import Recommendations from './Recommendations';
import Contact from './Contact';

const HomePage = () => {
  return (
    <>
      <div id="hero-section">
        <Hero />
      </div>
      <div id="projects-section">
        <Projects />
      </div>
      <div id="recommendations-section">
        <Recommendations />
      </div>
      <div id="contact-section">
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
