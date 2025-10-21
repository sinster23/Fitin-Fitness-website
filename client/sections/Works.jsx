import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Dumbbell } from 'lucide-react';

export default function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const steps = [
    {
      step: "01",
      title: "Set Your Goal",
      category: "STEP ONE",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=600&fit=crop",
      description: "Choose your fitness objective",
      details: "Define your path to success",
      icon: Target
    },
    {
      step: "02",
      title: "Find Your Trainer",
      category: "STEP TWO",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=600&fit=crop",
      description: "Match with expert trainers",
      details: "Get personalized guidance",
      icon: Users
    },
    {
      step: "03",
      title: "Start Training",
      category: "STEP THREE",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&h=600&fit=crop",
      description: "Begin your transformation",
      details: "Achieve your fitness goals",
      icon: Dumbbell
    }
  ];

  const getCardPosition = (index) => {
    const isActive = index === (hoveredIndex !== null ? hoveredIndex : activeIndex);
    
    if (index === 0) {
      return {
        transform: 'translateX(-410px) scale(' + (isActive ? '1' : '0.85') + ')',
        opacity: isActive ? 1 : 0.6,
        zIndex: isActive ? 3 : 1
      };
    } else if (index === 1) {
      return {
        transform: 'translateX(0) scale(' + (isActive ? '1' : '0.85') + ')',
        opacity: isActive ? 1 : 0.6,
        zIndex: isActive ? 3 : 1
      };
    } else {
      return {
        transform: 'translateX(410px) scale(' + (isActive ? '1' : '0.85') + ')',
        opacity: isActive ? 1 : 0.6,
        zIndex: isActive ? 3 : 1
      };
    }
  };

  const css = `
  .works-carousel {
    width: 100%;
    height: 550px;
    padding-bottom: 80px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 1200px;
  }
  
  .works-carousel .work-slide {
    background-position: center;
    background-size: cover;
    width: 380px;
    height: 450px;
    position: absolute;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }

  .pagination-dot {
    background-color: #a1a1aa !important;
    opacity: 0.5;
  }

  .pagination-dot-active {
    background-color: #84cc16 !important;
    opacity: 1 !important;
  }
  `;

  return (
    <section className="relative py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      <style>{css}</style>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #84cc16 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Gradient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-20 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-20 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-anton text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            How It{" "}
            <span className="font-anton text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-500">
              Works
            </span>
          </h2>
          <p className="font-roboto text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Three simple steps to transform your fitness journey and achieve your goals with expert guidance.
          </p>
        </motion.div>

        {/* Coverflow Carousel */}
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="relative w-full max-w-6xl mx-auto px-5"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <div className="works-carousel relative">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const position = getCardPosition(index);
                
                return (
                  <div 
                    key={index} 
                    className="work-slide"
                    style={position}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-black shadow-2xl">
                      <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.95)), url(${step.image})`,
                        }}
                      />

                      <div className="relative h-full flex flex-col justify-between p-6">
                        {/* Step Number */}
                        <div className="flex items-start justify-between">
                          <div className="text-lime-400/30 text-8xl font-bold leading-none">
                            {step.step}
                          </div>
                          <Icon className="w-12 h-12 text-lime-400" strokeWidth={1.5} />
                        </div>

                        {/* Content */}
                        <div>
                          <div className="mb-3">
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-lime-400/20 border border-lime-400 text-lime-400 tracking-wider">
                              {step.category}
                            </span>
                          </div>

                          <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                            {step.title}
                          </h3>
                          <p className="text-lime-400 font-semibold mb-2 text-base">
                            {step.description}
                          </p>
                          <p className="text-gray-300 text-sm">
                            {step.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Pagination Dots */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center justify-center gap-2 mt-4"
        >
          {steps.map((_, index) => (
            <button
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === (hoveredIndex !== null ? hoveredIndex : activeIndex)
                  ? 'pagination-dot-active w-8'
                  : 'pagination-dot w-2'
              }`}
            />
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}