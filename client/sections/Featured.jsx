import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Star, Pin } from 'lucide-react';

export default function FeaturedTrainers() {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef(null);
  const controls = useAnimation();

  const trainers = [
    {
      name: "Rajat Verma",
      photo: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=500&fit=crop",
      rating: 4.9,
      reviews: 110,
      gym: "Gold's Gym, Kolkata",
      specialization: "Weight Loss Coach"
    },
    {
      name: "Priya Sharma",
      photo: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=500&fit=crop",
      rating: 4.8,
      reviews: 95,
      gym: "Fitness First, Kolkata",
      specialization: "Strength & Conditioning"
    },
    {
      name: "Arjun Singh",
      photo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop",
      rating: 5.0,
      reviews: 142,
      gym: "CrossFit Box, Salt Lake",
      specialization: "Power Lifting Expert"
    },
    {
      name: "Neha Kapoor",
      photo: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&h=500&fit=crop",
      rating: 4.9,
      reviews: 128,
      gym: "Anytime Fitness, Park Street",
      specialization: "Weight Gain Specialist"
    },
    {
      name: "Vikram Mehta",
      photo: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400&h=500&fit=crop",
      rating: 4.7,
      reviews: 87,
      gym: "Iron Paradise, Ballygunge",
      specialization: "Calisthenics Master"
    },
    {
      name: "Ananya Das",
      photo: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=500&fit=crop",
      rating: 4.8,
      reviews: 103,
      gym: "Cult.fit, New Town",
      specialization: "General Fitness Coach"
    },
    {
      name: "Rahul Bose",
      photo: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=500&fit=crop",
      rating: 4.9,
      reviews: 115,
      gym: "The Gym, Jadavpur",
      specialization: "Bodybuilding Coach"
    },
    {
      name: "Sneha Roy",
      photo: "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=400&h=500&fit=crop",
      rating: 4.8,
      reviews: 98,
      gym: "FitZone, Howrah",
      specialization: "Endurance Training"
    }
  ];

  // Duplicate trainers for seamless loop
  const duplicatedTrainers = [...trainers, ...trainers];

  useEffect(() => {
    if (!isHovered) {
      const scrollWidth = scrollRef.current?.scrollWidth / 2;
      
      controls.start({
        x: -scrollWidth,
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    } else {
      controls.stop();
    }
  }, [isHovered, controls]);

  return (
    <div className="relative bg-black py-24 px-6 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #84cc16 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto mb-16">
        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-anton text-white text-5xl md:text-7xl mb-4 leading-tight">
            Top-Rated <span className="text-lime-400">Trainers</span>
          </h2>
          <h3 className="font-anton text-lime-400 text-4xl md:text-5xl mb-6">
            Near You
          </h3>
          <p className="font-roboto text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Meet our elite team of certified trainers who bring unparalleled expertise to help you achieve your fitness goals.
          </p>
        </motion.div>
      </div>

      {/* Scrolling Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>

        <div 
          className="overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            ref={scrollRef}
            animate={controls}
            className="flex gap-8 py-4"
            style={{ width: 'max-content' }}
          >
            {duplicatedTrainers.map((trainer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-zinc-900 rounded-3xl overflow-hidden cursor-pointer flex-shrink-0"
                style={{ width: '340px' }}
              >
                {/* Trainer Photo */}
                <div className="relative h-80 overflow-hidden">
                  <motion.img
                    src={trainer.photo}
                    alt={trainer.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent"></div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-full px-3 py-2 flex items-center gap-1.5">
                    <Star className="w-4 h-4 fill-lime-400 text-lime-400" />
                    <span className="font-roboto font-bold text-white text-sm">{trainer.rating}</span>
                  </div>
                </div>

                {/* Trainer Info */}
                <div className="relative p-6 pb-7">
                  {/* Name */}
                  <h4 className="font-bebas text-lime-400 text-3xl tracking-wide mb-2 group-hover:text-lime-300 transition-colors duration-300">
                    {trainer.name}
                  </h4>

                  {/* Specialization */}
                  <p className="font-roboto text-white text-lg font-semibold mb-3">
                    {trainer.specialization}
                  </p>

                  {/* Gym Location */}
                  <p className="font-roboto text-gray-400 text-sm mb-3 flex items-center gap-1">
                    <Pin className="w-4 h-4 text-red-400" /> {trainer.gym}
                  </p>

                  {/* Reviews */}
                  <p className="font-roboto text-gray-500 text-sm mb-5">
                    ({trainer.reviews} reviews)
                  </p>
                </div>

                {/* Hover Border Glow */}
                <div className="absolute inset-0 border-2 border-lime-400/0 group-hover:border-lime-400/40 rounded-3xl transition-all duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}