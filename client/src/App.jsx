import React from 'react';
import Hero from '../sections/Hero';
import Navbar from '../components/Navbar';
import Categories from '../sections/Categories';
import Featured from '../sections/Featured';
import Why from '../sections/Why';
import Testimonials from '../sections/Testimonials';
import Footer from '../components/Footer';
import Works from '../sections/Works';
import AboutUs from '../sections/About';
import CTASection from '../sections/Cta';

export default function FitFusionHero() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* How It Works Section */}
      <Works />

      {/* Categories Section */}
      <Categories />

      {/* About Us Section */}
      <AboutUs />

      {/* Featured Section */}
      <Featured />

      {/* Why Choose Us Section */}
      <Why />
      
      {/* Testimonials Section */}
      <Testimonials />

      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}