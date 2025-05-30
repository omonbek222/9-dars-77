import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services'; 
import Rooms from '../components/Rooms';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services /> 
      <Rooms/>
      <Cards/>
      <Footer/>
    </>
  );
}
