import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dumbbell, Eye, EyeOff, Mail, Lock, AlertCircle, X } from 'lucide-react';
import VerificationPage from '../components/VerificationPage';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [resendingVerification, setResendingVerification] = useState(false);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all the required fields.');
      return;
    }
    setLoading(true);

    try {
      const response = await fetch(`${BACKEND_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store token in memory instead of localStorage
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('user', JSON.stringify(data));
        
        // Redirect to dashboard or home
        window.location.href = '/';
      } else {
        // Check if error is about email verification
        if (data.message.toLowerCase().includes('not verified') || 
            data.message.toLowerCase().includes('verify')) {
          setShowVerificationModal(true);
        } else {
          setError(data.message || 'Invalid credentials');
        }
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleResendVerification = async () => {
    setResendingVerification(true);
    
    try {
      const response = await fetch(`${BACKEND_URL}/api/auth/resend-verification`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setShowVerificationModal(false);
      } else {
        setError(data.message || 'Failed to resend verification email');
        setShowVerificationModal(false);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      setShowVerificationModal(false);
      console.error('Resend verification error:', err);
    } finally {
      setResendingVerification(false);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="sign_bg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
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
          <span className="text-white font-bebas text-2xl tracking-wider">
            FITIN
          </span>
        </a>
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

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-5 bg-red-500/20 border border-red-500/50 rounded-lg p-3 flex items-start gap-3"
            >
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <p className="font-roboto text-red-300 text-sm">{error}</p>
            </motion.div>
          )}

          {/* Form */}
          <div className="space-y-5">
            {/* Google Sign In */}
            <a className='cursor-pointer flex justify-center items-center' href={`${BACKEND_URL}/api/auth/google`}>
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
            </a>

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
                  required
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
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
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
              disabled={loading}
              className="w-full bg-lime-400 hover:bg-lime-500 text-black font-roboto font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {loading ? 'Logging in...' : 'Log In'}
            </button>

            {/* Footer Links */}
            <div className="flex items-center justify-between text-sm">
              <a href="/signup">
                <button type="button" className="font-roboto text-lime-400 hover:text-lime-300 transition-colors cursor-pointer">
                  Create an account
                </button>
              </a>
              <button type="button" className="font-roboto text-lime-400 hover:text-lime-300 transition-colors">
                Forgot password?
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Email Verification Modal */}
      <AnimatePresence>
        {showVerificationModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setShowVerificationModal(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-zinc-900 border border-lime-400/30 rounded-2xl p-8 max-w-md w-full shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowVerificationModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-8 h-8 text-yellow-400" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center mb-6">
                <h2 className="font-anton text-white text-2xl mb-3">
                  Email Not Verified
                </h2>
                <p className="font-roboto text-gray-400 text-sm">
                  Your email address is not verified. Please verify your email to continue.
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={handleResendVerification}
                disabled={resendingVerification}
                className="w-full bg-lime-400 hover:bg-lime-500 text-black font-roboto font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {resendingVerification ? 'Sending...' : 'Verify Email Address'}
              </button>

              {/* Cancel Button */}
              <button
                onClick={() => setShowVerificationModal(false)}
                className="w-full mt-3 bg-transparent hover:bg-zinc-800 text-gray-400 hover:text-white font-roboto py-3 px-4 rounded-lg transition-all duration-300"
              >
                Cancel
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}