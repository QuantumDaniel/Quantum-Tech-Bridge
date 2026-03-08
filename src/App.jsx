import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CoursesSection from './components/CoursesSection';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactNewsletter from './components/ContactNewsletter';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <WhyChooseUs />
      <Testimonials />
      <ContactNewsletter />
      <footer className="bg-dark text-white text-center py-4 mt-5">
        <p>&copy; 2026 Quantum TechBridge. All rights reserved.</p>
        <p className="small">Empowering the next generation of tech professionals.</p>
      </footer>
    </div>
  );
}

export default App;