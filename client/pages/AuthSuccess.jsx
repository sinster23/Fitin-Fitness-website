import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Dumbbell, CheckCircle, Zap } from "lucide-react";

export default function AuthSuccess() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("loading"); // loading, success, error

  useEffect(() => {
    const handleAuth = async () => {
      try {
        // Add a minimum delay to show the animation
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Get URL parameters from Google OAuth redirect
        const token = searchParams.get('token');
        const userId = searchParams.get('userId');
        const name = searchParams.get('name');
        const email = searchParams.get('email');

        if (token && userId && name && email) {
          // Decode URL-encoded parameters
          const decodedName = decodeURIComponent(name);
          const decodedEmail = decodeURIComponent(email);

          // Store in sessionStorage (same format as normal auth)
          sessionStorage.setItem('token', token);
          sessionStorage.setItem('user', JSON.stringify({
            _id: userId,
            name: decodedName,
            email: decodedEmail
          }));

          setStatus("success");

          // Wait a bit before redirecting to show success state
          setTimeout(() => {
            navigate("/");
          }, 1500);
        } else {
          // If parameters are missing, authentication failed
          throw new Error("Missing authentication parameters");
        }
      } catch (err) {
        console.error("Google auth error:", err);
        setStatus("error");
        setTimeout(() => {
          navigate("/signin?error=google_auth_failed");
        }, 2000);
      }
    };

    handleAuth();
  }, [navigate, searchParams]);

  return (
    <div className="h-screen bg-black flex items-center justify-center overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-400 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-400 rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-12"
        >
          <Dumbbell className="w-10 h-10 text-lime-400" />
          <span className="font-bebas text-white text-4xl tracking-wider">
            FITIN
          </span>
        </motion.div>

        {/* Status Content */}
        {status === "loading" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Spinning Loader */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 mx-auto mb-8 border-4 border-lime-400/20 border-t-lime-400 rounded-full"
            />
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-anton text-white text-3xl md:text-4xl mb-3"
            >
              Logging You In
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-roboto text-gray-400 text-lg"
            >
              Preparing your personalized fitness experience...
            </motion.p>

            {/* Loading Dots */}
            <div className="flex gap-2 justify-center mt-6">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-2 h-2 bg-lime-400 rounded-full"
                />
              ))}
            </div>
          </motion.div>
        )}

        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 15,
                delay: 0.2 
              }}
              className="w-20 h-20 mx-auto mb-8 bg-lime-400 rounded-full flex items-center justify-center"
            >
              <CheckCircle className="w-12 h-12 text-black" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-anton text-white text-3xl md:text-4xl mb-3"
            >
              Welcome Back, Champ!
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-roboto text-lime-400 text-lg flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Redirecting to your dashboard...
            </motion.p>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Error Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 15 
              }}
              className="w-20 h-20 mx-auto mb-8 bg-red-500 rounded-full flex items-center justify-center"
            >
              <div className="text-white text-5xl font-bold">!</div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-anton text-white text-3xl md:text-4xl mb-3"
            >
              Authentication Failed
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-roboto text-gray-400 text-lg"
            >
              Redirecting to sign in...
            </motion.p>
          </motion.div>
        )}
      </div>
    </div>
  );
}