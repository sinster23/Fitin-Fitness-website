import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    {
      title: "Weight Gain",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=500&fit=crop",
    },
    {
      title: "Weight Loss",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=500&fit=crop",
    },
    {
      title: "Power Lifting",
      image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400&h=500&fit=crop",
    },
    {
      title: "Calisthenics",
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=400&h=500&fit=crop",
    },
    {
      title: "Strength & Endurance",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=500&fit=crop",
    },
    {
      title: "General Fitness",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=500&fit=crop",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative bg-black py-20 px-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #84cc16 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-25"
        >
          <h3 className="font-anton text-lime-400 text-5xl md:text-7xl mb-6 leading-tight">
            Choose Your Fitness Goal
          </h3>
          <p className="font-roboto text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Select the goal that matches your fitness aspirations and get personalized gym trainers who will help you succeed.
          </p>
        </motion.div>

        {/* Cards Grid - 2 rows x 3 columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto justify-items-center"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative w-90 h-90 rounded-3xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setActiveIndex(index)}
              whileHover={{ scale: 1.05 }}
              style={{ transformOrigin: 'center center' }}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h4 className="font-bebas text-lime-400 text-3xl md:text-4xl tracking-wide group-hover:text-white transition-colors duration-300">
                  {category.title}
                </h4>
              </div>

              {/* Green Overlay - Top Right Corner (30-40% coverage) */}
              <div className="absolute top-0 right-0 w-2/5 h-2/5 bg-lime-400 rounded-bl-full origin-top-right transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out z-20 flex items-center justify-center">
                <span className="font-anton text-black text-xl md:text-2xl tracking-wide text-end px-4">
                  FIND TRAINER
                </span>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 border-2 border-lime-400/0 group-hover:border-lime-400/50 rounded-3xl transition-all duration-300 z-20"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}