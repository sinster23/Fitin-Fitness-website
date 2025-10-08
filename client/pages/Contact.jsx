import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
  };

  return (
    <div className="min-h-screen md:h-screen bg-gray-900 md:overflow-hidden overflow-auto">
      {/* Navigation */}
      <Navbar/>

      <div className="h-full flex flex-col md:flex-row md:pt-20 pt-16">
        {/* Left Side - Contact Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 md:px-24 py-12 md:py-0">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-xl"
          >
            {/* Main Heading */}
            <h1 className="text-white text-5xl md:text-9xl font-anton leading-tight mb-6 md:mb-10">
              Let's get<br />
              <span className='text-lime-400'>in touch</span>
            </h1>

            {/* Subheading */}
            <h2 className="text-white text-lg md:text-2xl font-roboto leading-tight mb-5 md:mb-12">
              Have questions or want to start your journey?<br />
              We’re here to help you every step of the way!
            </h2>

            {/* Contact Details */}
            <div className="space-y-6 md:space-y-8">
              {/* Phone */}
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-gray-500 font-montserrat text-xs uppercase tracking-wider mb-2 flex gap-3">
                  <Phone className='w-4 h-4 text-lime-400' />Phone
                </p>
                <a href="tel:+912578365379" className="text-white font-roboto text-base md:text-lg font-semibold hover:text-lime-400 transition-colors duration-300">
                  +(2) 578-365-379
                </a>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <p className="text-gray-500 font-montserrat text-xs uppercase tracking-wider mb-2 flex gap-3">
                  <Mail className='w-4 h-4 text-lime-400' />Email
                </p>
                <a href="mailto:hello@slabs.com" className="text-white font-roboto text-base md:text-lg font-semibold hover:text-lime-400 transition-colors duration-300">
                  hello@slabs.com
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex flex-col">
          {/* Top Section - Arrow and Text */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="px-6 md:px-16 py-8 md:py-12 flex items-center"
          >
            <div className="flex items-start gap-4 md:gap-6">
              <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-lime-400 mt-1 flex-shrink-0" />
              <p className="text-white font-montserrat text-sm md:text-base leading-relaxed max-w-md">
                Reach out for memberships, training plans, or partnership inquiries — the FITIN team’s got your back.
.
              </p>
            </div>
          </motion.div>

          {/* Bottom Section - Contact Form */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 bg-black px-6 md:px-16 py-8 md:py-12 flex flex-col justify-center"
          >
            <h3 className="text-white text-lg md:text-xl font-bold mb-8 md:mb-10">Get in Touch</h3>
            
            <div className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-700 focus:border-white text-white py-3 px-0 outline-none transition-colors duration-300 placeholder-gray-500 text-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-700 focus:border-white text-white py-3 px-0 outline-none transition-colors duration-300 placeholder-gray-500 text-sm"
                  />
                </div>
              </div>

              {/* Phone and Subject Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-700 focus:border-white text-white py-3 px-0 outline-none transition-colors duration-300 placeholder-gray-500 text-sm"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-700 focus:border-white text-white py-3 px-0 outline-none transition-colors duration-300 placeholder-gray-500 text-sm"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your fitness goals or inquiry"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-transparent border-b border-gray-700 focus:border-white text-white py-3 px-0 outline-none transition-colors duration-300 placeholder-gray-500 resize-none text-sm"
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={handleSubmit}
                className="w-full bg-lime-400 hover:bg-lime-500 text-black font-bold text-sm py-4 transition-all duration-300 mt-6"
              >
                Send to us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}