import React from 'react';
import Hero from '../sections/Hero';
import Navbar from '../components/Navbar';
import Categories from '../sections/Categories';
import Featured from '../sections/Featured';

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
    </div>
  );
}