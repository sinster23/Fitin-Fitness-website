import React from 'react'
import { Dumbbell } from 'lucide-react';


export default function Navbar() {
  return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-gray-800">
        <div className=" mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Dumbbell className="w-8 h-8 text-lime-400" />
              <span className="text-white font-montserrat text-2xl font-bold">FITIN</span>
            </div>

            {/* Navigation Links */}
            <div className="font-montserrat hidden md:flex items-center gap-8">
              <a href="/" className="text-gray-300 hover:text-lime-400 transition-colors">
                Home
              </a>
              <a href="/trainers" className="text-gray-300 hover:text-lime-400 transition-colors">
                Browse Trainers
              </a>
              <a href="/about" className="text-gray-300 hover:text-lime-400 transition-colors">
                About
              </a>
              <a href="/contact" className="text-gray-300 hover:text-lime-400 transition-colors">
                Contact
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="font-montserrat flex items-center gap-4">
              <a href='/signin'>
              <button className="hidden md:block px-6 py-2 text-lime-400 border border-lime-400 rounded-full hover:bg-lime-400/10 transition-all">
                Sign In
              </button></a>
              <a href="/signup">
              <button className="px-6 py-2 bg-lime-400 text-black font-semibold rounded-full hover:bg-lime-500 transition-all">
                Get Started
              </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
  )
}
