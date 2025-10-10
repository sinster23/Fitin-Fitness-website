import React from 'react'
import { motion } from 'framer-motion';
import { Mail, Dumbbell } from 'lucide-react';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function VerificationPage( { email } ) {
    const [isResending, setIsResending] = React.useState(false);

    const handleSubmit = async() => {
  try {
      setIsResending(true);
      
      // Add a minimum delay of 1.5 seconds to show loading state
      const [response] = await Promise.all([
        fetch(`${BACKEND_URL}/api/auth/resend-verification`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        }),
        new Promise(resolve => setTimeout(resolve, 1500))
      ]);
      
      setIsResending(false);
  } catch (error) {
      console.error('Resend verification error:', error);
      setIsResending(false);
  }  
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-6">
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
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full"
        >
          <div className=" rounded-2xl p-8  text-center">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              className="flex justify-center mb-6"
            >
              <div className="w-20 h-20 bg-lime-400/10 rounded-full flex items-center justify-center">
                <Mail className="w-10 h-10 text-lime-400" />
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-anton text-white mb-4"
            >
              You're ready to go!
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 font-roboto text-xl mb-2"
            >
              Check your email to begin.
            </motion.p>

            {/* Email Display */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 font-montserrat text-md mb-6"
            >
              Please check your email <span className="text-lime-400 font-semibold">{email}</span> and click{' '}
              <span className="text-white font-semibold">Verify your email</span> button to complete your sign up.
            </motion.p>

            {/* Open Gmail Button */}
            <motion.a
              href="https://mail.google.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 bg-white text-black font-montserrat rounded-full hover:bg-gray-100 transition-all mb-4"
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
              Open Gmail
            </motion.a>

            {/* Resend Link */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-gray-400 text-md"
            >
              Didn't receive the code?{' '}
              <button
                onClick={handleSubmit}
                disabled={isResending}
                className="text-lime-400 hover:text-lime-300 font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isResending ? 'Sending...' : 'Resend Code'}
              </button>
            </motion.p>
          </div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: 0.8 }}
            className="absolute top-20 left-20 w-72 h-72 bg-lime-400 rounded-full blur-3xl -z-10"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-lime-400 rounded-full blur-3xl -z-10"
          />
        </motion.div>
      </div>
  )
}