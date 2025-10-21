import React from 'react'
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background GIF/Image */}
      <div className="absolute inset-0">
        <video
          src="/hero_bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        ></video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-anton text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          Find Your <motion.span 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lime-400"
          >
            Fit
          </motion.span>
        </motion.h1>

        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-roboto text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
        >
          Book verified personal trainers and access customized workout plans
          tailored to your goals, location and schedule.
        </motion.p>

        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-montserrat flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-lime-400 text-black font-bold rounded-full hover:bg-lime-500 transition-all flex items-center gap-2 text-lg w-full sm:w-auto"
          >
            Browse Trainers
          </motion.button>

          {/* <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-all font-bold text-lg flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            Get Matched Instantly
            <motion.span 
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
              className="transition-transform"
            >
              <ArrowRight />
            </motion.span>
          </motion.button> */}
        </motion.div>
      </div>

      {/* Bottom Left Stats */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="font-bebas absolute bottom-8 left-4 sm:left-8 z-20 flex items-center gap-4"
      >
        <div className="flex -space-x-3">
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            src="https://i.pravatar.cc/48?img=1"
            alt="Member"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-black"
          />
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            src="https://i.pravatar.cc/48?img=2"
            alt="Member"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-black"
          />
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            src="https://i.pravatar.cc/48?img=3"
            alt="Member"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-black"
          />
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="text-white"
        >
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold">100+</p>
          <p className="text-xs sm:text-sm text-gray-600">Happy Spirits</p>
        </motion.div>
      </motion.div>

      {/* Bottom Right Join Now Button */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="font-montserrat absolute bottom-8 right-4 sm:right-8 z-20 flex items-center gap-4"
      >
      </motion.div>
    </motion.div>
  );
}