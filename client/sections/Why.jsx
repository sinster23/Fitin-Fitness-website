import React from 'react';
import { motion } from 'framer-motion';
import { Check, Target, Smartphone, ShieldCheck, Clock, TrendingUp } from 'lucide-react';

export default function WhyChooseFitin() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Certified & Experienced Trainers",
      description: "Guided by experts to train you safely and effectively."
    },
    {
      icon: Target,
      title: "Goal-Based Matching",
      description: "Browse by fitness goals and get the right coach for your journey."
    },
    {
      icon: Check,
      title: "Simple Booking",
      description: "Book directly or connect via WhatsApp in one click."
    },
    {
      icon: Smartphone,
      title: "Supportive & Friendly Community",
      description: "Encouragement and connection that keeps you going."
    },
    {
      icon: Clock,
      title: "Flexible Training Times",
      description: "Morning or evening — fitness that fits your schedule."
    },
    {
      icon: TrendingUp,
      title: "Real Progress, Real Results",
      description: "Every session gets you one step closer to your goals."
    }
  ];

  return (
    <div className="relative bg-black py-24 px-6 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #84cc16 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 mx-auto">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="/why1.png"
                alt="Fitness motivation"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            </div>
          </motion.div>

          {/* Right Side - Features Grid */}
          <div>
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="font-anton text-white text-5xl md:text-6xl mb-6 leading-tight">
                Turn Your Workout into <br />
                <span className="text-lime-400">a Lifestyle That Moves</span> <br />
                You Forward
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-lime-400/30 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-lime-400/10 flex items-center justify-center group-hover:bg-lime-400/20 transition-colors duration-300">
                          <Icon className="w-6 h-6 text-lime-400" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bebas text-white text-xl tracking-wide mb-2 group-hover:text-lime-400 transition-colors duration-300">
                          {feature.title}
                        </h4>
                        <p className="font-roboto text-gray-400 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}