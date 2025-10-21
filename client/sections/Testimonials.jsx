import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Ritika M.",
      role: "Group Training Enthusiast",
      location: "Kolkata",
      text: "I found my trainer within minutes on FITIN. Love how easy it is!",
      image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=300&h=400&fit=crop",
      rating: 5
    },
    {
      name: "Akash B.",
      role: "Fitness Transformation",
      location: "Salt Lake",
      text: "Way better than scrolling through Instagram or hunting for referrals.",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=300&h=400&fit=crop",
      rating: 5
    },
    {
      name: "Chris A",
      role: "Strength & Conditioning",
      location: "Miami, USA",
      text: "Best fitness platform I've ever used. The workout plans are challenging yet achievable. I've gained muscle mass and confidence. Highly recommend to anyone serious about fitness!",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=400&fit=crop",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleIndices = () => {
    const prev = (activeIndex - 1 + testimonials.length) % testimonials.length;
    const next = (activeIndex + 1) % testimonials.length;
    return { prev, current: activeIndex, next };
  };

  const visible = getVisibleIndices();

  return (
    <div className="relative bg-black py-12 md:py-20 overflow-hidden">
      {/* Background Gradient Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 max-w-7xl mx-auto"
        >
          <h2 className="font-anton text-white text-4xl md:text-5xl lg:text-7xl mb-2 leading-tight">
            Your Success Stories,{' '}
            <span className="text-lime-400">Our Inspiration</span>
          </h2>
          <p className="font-roboto text-gray-400 text-base md:text-lg lg:text-xl mt-4 px-4">
            See How Our Customers Have Achieved Their Goals And Let Their Journeys Inspire Yours!
          </p>
        </motion.div>

        {/* Testimonials Section - Mobile Layout */}
        <div className="relative w-full max-w-7xl mx-auto md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`mobile-${activeIndex}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-6"
            >
              {/* Image */}
              <div className="relative w-full max-w-sm">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-full h-auto object-cover grayscale rounded-lg"
                />
              </div>

              {/* Quote Card */}
              <div className="bg-zinc-900/95 backdrop-blur-md border border-zinc-800 rounded-2xl p-6 shadow-2xl w-full max-w-sm">
                {/* Testimonial Text */}
                <p className="font-roboto text-gray-300 text-base leading-relaxed mb-6">
                  "{testimonials[activeIndex].text}"
                </p>
                
                {/* Profile Section */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bebas text-white text-xl tracking-wide">
                      - {testimonials[activeIndex].name}
                    </h4>
                    <p className="font-roboto text-gray-400 text-sm">
                      {testimonials[activeIndex].location}
                    </p>
                  </div>
                
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons - Mobile */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-2 border-gray-700 bg-black/50 backdrop-blur-sm flex items-center justify-center hover:border-lime-400 hover:bg-lime-400/10 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-lime-400" />
            </button>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-2 border-gray-700 bg-black/50 backdrop-blur-sm flex items-center justify-center hover:border-lime-400 hover:bg-lime-400/10 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-lime-400" />
            </button>
          </div>
        </div>

        {/* Testimonials Section - Desktop Layout */}
        <div className="relative w-full max-w-7xl mx-auto hidden md:block">
          <div className="relative flex items-center justify-between gap-8">
            {/* Left Side - Main Featured Image */}
            <div className="relative flex-shrink-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`main-${activeIndex}`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-80 lg:w-96 xl:w-[500px] h-auto object-cover grayscale"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Center - Quote Card (Overlapping) */}
            <div className="absolute left-64 lg:left-80 xl:left-96 top-1/2 -translate-y-1/2 z-20 w-full max-w-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`quote-${activeIndex}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="bg-zinc-900/95 backdrop-blur-md border border-zinc-800 rounded-2xl p-8 shadow-2xl"
                >
                  {/* Testimonial Text */}
                  <p className="font-roboto text-gray-300 text-lg leading-relaxed mb-6">
                    "{testimonials[activeIndex].text}"
                  </p>
                  
                  {/* Profile Section */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bebas text-white text-2xl tracking-wide">
                        - {testimonials[activeIndex].name}
                      </h4>
                      <p className="font-roboto text-gray-400 text-sm">
                        {testimonials[activeIndex].location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Side - Preview Images Stacked Vertically */}
            <div className="flex-shrink-0 ml-auto flex flex-col gap-6 items-end">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`prev-${visible.prev}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="relative cursor-pointer group"
                  onClick={prevTestimonial}
                >
                  <img
                    src={testimonials[visible.prev].image}
                    alt={testimonials[visible.prev].name}
                    className="w-32 lg:w-40 xl:w-48 h-auto object-cover grayscale opacity-50 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 origin-center">
                    <p className="text-lime-400 text-xl lg:text-2xl font-bebas tracking-widest whitespace-nowrap">
                      {testimonials[visible.prev].name}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`next-${visible.next}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="relative cursor-pointer group"
                  onClick={nextTestimonial}
                >
                  <img
                    src={testimonials[visible.next].image}
                    alt={testimonials[visible.next].name}
                    className="w-32 lg:w-40 xl:w-48 h-auto object-cover grayscale opacity-50 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 origin-center">
                    <p className="text-lime-400 text-xl lg:text-2xl font-bebas tracking-widest whitespace-nowrap">
                      {testimonials[visible.next].name}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Buttons - Desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-12 flex gap-4 z-30">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-2 border-gray-700 bg-black/50 backdrop-blur-sm flex items-center justify-center hover:border-lime-400 hover:bg-lime-400/10 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-lime-400" />
            </button>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-2 border-gray-700 bg-black/50 backdrop-blur-sm flex items-center justify-center hover:border-lime-400 hover:bg-lime-400/10 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-lime-400" />
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-2 mt-12 md:mt-16"
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-lime-400 w-8'
                  : 'bg-zinc-700 hover:bg-zinc-600 w-2'
              }`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}