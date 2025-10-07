import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function FitinFooter() {
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Privacy Policy', href: '#privacy' }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { name: 'WhatsApp', icon: Phone, href: '#', color: 'hover:text-green-500' }
  ];

  return (
    <footer className="bg-black text-white py-16 px-6 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              
              <h2 className="font-anton text-3xl text-lime-400">Fitin</h2>
            </div>
            <p className="font-roboto text-gray-400 text-sm leading-relaxed max-w-xs">
              Your Go-To For Getting Personalised Trainers For Perfect Goals.
            </p>
            
            {/* Social Media */}
            <div>
              <h3 className="font-bebas text-lg tracking-wide mb-4 text-lime-400">Follow Us On</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 hover:border-lime-400 ${social.color} transition-all duration-300 hover:scale-110`}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bebas text-2xl tracking-wide mb-6 text-lime-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-roboto text-gray-400 hover:text-lime-400 transition-colors duration-300 inline-flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-lime-400 group-hover:w-6 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bebas text-2xl tracking-wide mb-6 text-lime-400">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center flex-shrink-0 border border-zinc-800 group-hover:border-lime-400 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-lime-400" />
                </div>
                <div>
                  <p className="font-roboto text-xs text-gray-500 mb-1">E-mail</p>
                  <a href="mailto:hello@fitin.in" className="font-roboto text-gray-300 hover:text-lime-400 transition-colors duration-300">
                    hello@fitin.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center flex-shrink-0 border border-zinc-800 group-hover:border-lime-400 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-lime-400" />
                </div>
                <div>
                  <p className="font-roboto text-xs text-gray-500 mb-1">Phone</p>
                  <a href="tel:+91XXXXXXXXXX" className="font-roboto text-gray-300 hover:text-lime-400 transition-colors duration-300">
                    +91-XXXXXXXXXX
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center flex-shrink-0 border border-zinc-800 group-hover:border-lime-400 transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-lime-400" />
                </div>
                <div>
                  <p className="font-roboto text-xs text-gray-500 mb-1">Location</p>
                  <p className="font-roboto text-gray-300">Kolkata, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-roboto text-sm text-gray-500">
              © 2025 Fitin. All rights reserved.
            </p>
            <p className="font-roboto text-sm text-gray-500">
              Made with <span className="text-lime-400">❤</span> in Kolkata
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}