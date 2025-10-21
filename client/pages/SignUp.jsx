import React, { useState, useEffect } from 'react';
import { Dumbbell, ChevronLeft, ChevronRight, Zap, Loader2 } from 'lucide-react';

// Mock Verification Page Component
function VerificationPage({ email }) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-white text-3xl font-bold mb-4">Check Your Email</h1>
        <p className="text-gray-400">We've sent a verification link to {email}</p>
      </div>
    </div>
  );
}

export default function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showVerificationPage, setShowVerificationPage] = useState(false);
  const [error, setError] = useState('');

  const BACKEND_URL = 'https://api.example.com';

  const slides = [
    {
      text: "Personalized workouts and meal plans, powered by expert trainers.",
      author: "Transform your fitness journey",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=1600&fit=crop"
    },
    {
      text: "Connect with certified trainers who understand your goals and push you beyond limits.",
      author: "Elite training experience",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=1600&fit=crop"
    },
    {
      text: "Track progress, get real-time feedback, and achieve results faster than ever.",
      author: "Smarter fitness, faster results",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=1600&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!agreedToTerms) {
      setError('Please agree to the Terms of use and Privacy Policy');
      return;
    }

    if (!name || !email || !password) {
      setError('Please fill in all the required fields.');
      return;
    }

    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setShowVerificationPage(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (showVerificationPage) {
    return <VerificationPage email={email} />;
  }

  return (
    <div className="min-h-screen bg-black flex overflow-auto">
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 overflow-y-auto scrollbar-hide">
        <div className="w-full max-w-md py-4">
          <div className="flex items-center gap-2 mb-8">
            <Dumbbell className="w-7 h-7 text-lime-400" />
            <span className="font-bebas text-white text-2xl tracking-wider">
              FITIN
            </span>
          </div>

          <div className="mb-6">
            <h1 className="font-anton text-white text-3xl md:text-4xl mb-2 leading-tight">
              Find. Train. Achieve.
            </h1>
            <h2 className="font-anton text-lime-400 text-3xl md:text-4xl mb-3 leading-tight">
              Trainers Tailored for You
            </h2>
            <p className="font-roboto text-gray-400 text-sm">
              Welcome champ, please enter your details
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <div className="space-y-4">
            <button
              type="button"
              onClick={() => window.location.href = `${BACKEND_URL}/api/auth/google`}
              className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-roboto py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 border border-zinc-800 hover:border-lime-400/30"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Continue with Google</span>
            </button>

            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-zinc-800"></div>
              <span className="font-roboto text-gray-500 text-sm">or</span>
              <div className="flex-1 h-px bg-zinc-800"></div>
            </div>

            <div>
              <label className="font-roboto text-gray-400 text-xs mb-1.5 block">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-zinc-900 text-white py-2.5 px-4 rounded-lg border border-zinc-800 focus:border-lime-400 focus:outline-none transition-all duration-300"
                disabled={isLoading}
              />
            </div>

            <div>
              <label className="text-gray-400 text-xs mb-1.5 block">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-zinc-900 text-white py-2.5 px-4 rounded-lg border border-zinc-800 focus:border-lime-400 focus:outline-none transition-all duration-300"
                disabled={isLoading}
              />
            </div>

            <div>
              <label className="text-gray-400 text-xs mb-1.5 block">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-zinc-900 text-white py-2.5 px-4 rounded-lg border border-zinc-800 focus:border-lime-400 focus:outline-none transition-all duration-300"
                disabled={isLoading}
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="mt-0.5 w-4 h-4 accent-lime-400"
                disabled={isLoading}
              />
              <label htmlFor="terms" className="text-gray-400 text-xs leading-relaxed">
                By creating an account, I agree to our{" "}
                <span className="text-lime-400 hover:text-lime-300 cursor-pointer">Terms of use</span>{" "}
                and{" "}
                <span className="text-lime-400 hover:text-lime-300 cursor-pointer">Privacy Policy</span>
              </label>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-lime-400 hover:bg-lime-500 text-black font-roboto font-bold py-2.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Creating Account...
                </>
              ) : (
                'Create Account'
              )}
            </button>

            <p className="font-roboto text-gray-400 text-sm text-center">
              Already have an account?{" "}
              <a href='/signin'>
                <span className="text-lime-400 hover:text-lime-300 cursor-pointer font-semibold">Sign in</span>
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={slides[currentSlide].image}
            alt="Fitness trainer"
            className="w-full h-full object-cover transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-black/10 backdrop-blur-sm rounded-t-2xl p-8 border-t border-lime-400/10">
          <div>
            <p className="font-roboto text-white text-lg mb-4 leading-relaxed">
              {slides[currentSlide].text}
            </p>

            <p className="font-roboto text-lime-400 text-sm font-semibold mb-6 flex items-center">
              <Zap className="w-4 h-4 mr-1 text-yellow-500" /> 
              {slides[currentSlide].author}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-lime-400 w-8" : "bg-gray-600 w-2"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-lime-400 text-white hover:text-black transition-all duration-300 flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-lime-400 text-white hover:text-black transition-all duration-300 flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}