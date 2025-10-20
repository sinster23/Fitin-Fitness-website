import React from 'react';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section className="relative flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1920&h=1080&fit=crop)`,
          }}
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/70" />
        
        {/* Lime glow effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-20 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-20 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
          >
            <span className="text-lime-400">ABOUT</span>{" "}
            <span className="text-white">US</span>
          </motion.h1>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Gym is very important to maintain our health toplas an fugi, sed quia cuuntur magni dolores eos qui rat ne volupra.
            </p>
            
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-24 h-1 bg-gradient-to-r from-lime-400 to-lime-500 origin-left"
            />
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10"
          >
            <button className="group relative px-8 py-4 bg-lime-400 text-black font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:bg-lime-500 hover:shadow-lg hover:shadow-lime-400/50">
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-gradient-to-r from-lime-300 to-lime-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}