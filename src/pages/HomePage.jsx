import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import EducationSection from '../components/EducationSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Irsyad</title>
        <meta
          name="description"
          content="Portfolio of Irsyad, an ambitious student with passion for web development, design, and innovation. Explore my projects, skills, and achievements."
        />
      </Helmet>

      <div className="min-h-screen bg-slate-950">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;