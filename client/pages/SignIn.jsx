import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Eye, EyeOff, Mail, Lock } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="video.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Logo - Top Left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-8 left-8 z-100 flex items-center gap-2 cursor-pointer"
      >
        <Dumbbell className="w-7 h-7 text-lime-400" />
        <a href="/">
        <span className="text-white font-bebas text-2xl tracking-wider">FITIN</span></a>
      </motion.div>

      {/* Login Card - Centered */}
      <div className="relative z-10 h-full flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-md bg-zinc-900/40 backdrop-blur-xl rounded-2xl p-8 border border-lime-400/20 shadow-2xl"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-anton text-white text-3xl mb-2">Log In</h1>
            <p className="font-roboto text-gray-400 text-sm">
              Welcome back! Please sign in to your account
            </p>
          </div>

          {/* Form */}
          <div className="space-y-5">
            {/* Google Sign In */}
            <button
              type="button"
              className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-roboto py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 border border-lime-400/40 hover:border-lime-400"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span>Sign in with Google</span>
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-zinc-700"></div>
              <span className="font-roboto text-gray-400 text-sm">OR</span>
              <div className="flex-1 h-px bg-zinc-700"></div>
            </div>

            {/* Email Input */}
            <div>
              <label className="font-roboto text-gray-300 text-sm mb-2 block">
                Email address <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-zinc-800/60 text-white font-roboto py-3 pl-12 pr-4 rounded-lg border border-zinc-700 focus:border-lime-400 focus:outline-none transition-all duration-300 placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="font-roboto text-gray-300 text-sm mb-2 block">
                Password <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full bg-zinc-800/60 text-white font-roboto py-3 pl-12 pr-12 rounded-lg border border-zinc-700 focus:border-lime-400 focus:outline-none transition-all duration-300 placeholder:text-gray-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-lime-400 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-lime-400 hover:bg-lime-500 text-black font-roboto font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
            >
              Log In
            </button>

            {/* Footer Links */}
            <div className="flex items-center justify-between text-sm">
              <a href='/signup'>  
              <button className="font-roboto text-lime-400 hover:text-lime-300 transition-colors cursor-pointer">
                Create an account
              </button></a>
              <button className="font-roboto text-lime-400 hover:text-lime-300 transition-colors">
                Forgot password?
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}