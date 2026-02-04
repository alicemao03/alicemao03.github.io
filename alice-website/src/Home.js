import React from 'react';
import Landing from './components/Landing';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const target = document.querySelector(location.hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  }, [location]);
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Works />
      <Contact />
    </>
  );
}

export default Home;
