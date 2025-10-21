import React from 'react';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="relative flex items-center justify-center bg-black py-20 overflow-hidden">
      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full mx-auto px-4 text-center"
      >
        {/* Card with background image and overlay */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl ml-10 mr-10 pt-10 pb-10">
          {/* Background Image */}
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop)`,
              }}
            />
            {/* Green-black overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/75 to-black/95" />
            
            {/* Animated floating shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-10 left-10 w-32 h-32 bg-lime-500/10 rounded-3xl transform rotate-12 blur-xl"
              />
              
              <motion.div
                animate={{
                  y: [0, 25, 0],
                  rotate: [0, -8, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute top-10 right-10 w-40 h-40 bg-lime-400/15 rounded-3xl transform -rotate-12 blur-xl"
              />

              <motion.div
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute bottom-10 right-20 w-36 h-36 bg-lime-500/10 rounded-3xl transform rotate-45 blur-xl"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 p-12 md:p-16">
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-anton text-4xl md:text-5xl lg:text-7xl text-white mb-4 tracking-wide"
            >
              Ready to find your <span className='text-lime-400'>Fit</span> ?
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-roboto text-gray-300 text-base md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto"
            >
                Start your free trial today and take the first step towards achieving your fitness goals with expert guidance.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {/* Primary Button */}
              <button className="group relative px-8 py-4 bg-lime-400 text-black font-bold text-base rounded-lg overflow-hidden transition-all duration-300 hover:bg-lime-500 hover:shadow-lg hover:shadow-lime-400/50 hover:scale-105">
                <span className="relative z-10 font-roboto">Get Started with FITIN</span>
                <div className="absolute inset-0 bg-gradient-to-r from-lime-300 to-lime-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}