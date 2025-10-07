import React from 'react';
import Hero from '../sections/Hero';
import Navbar from '../components/Navbar';
import Categories from '../sections/Categories';
import Featured from '../sections/Featured';
import Why from '../sections/Why';
import Testimonials from '../sections/Testimonials';
import Footer from '../components/Footer';

export default function FitFusionHero() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <Categories />

      {/* Featured Section */}
      <Featured />

      {/* Why Choose Us Section */}
      <Why />
      
      {/* Testimonials Section */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </div>
  );
}