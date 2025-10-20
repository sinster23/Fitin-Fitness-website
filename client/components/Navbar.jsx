import React, { useState, useEffect } from 'react';
import { Dumbbell, User, LogOut, Settings } from 'lucide-react';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const token = sessionStorage.getItem('token');
    const userData = sessionStorage.getItem('user');
    
    if (token && userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (err) {
        console.error('Error parsing user data:', err);
      }
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    setUser(null);
    window.location.href = '/';
  };

  const getInitials = (name) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getUserName = () => {
    if (!user) return '';
    return user.name || user.username || user.email?.split('@')[0] || 'User';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-gray-800">
      <div className="mx-auto px-6 py-4">
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

          {/* User Section */}
          <div className="font-montserrat flex items-center gap-4">
            {user ? (
              // Logged in user view
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-3 px-4 py-2 rounded-full bg-gray-800/50 hover:bg-gray-800 transition-all border border-gray-700"
                >
                  <div className="w-8 h-8 rounded-full bg-lime-400 flex items-center justify-center text-black font-bold text-sm">
                    {getInitials(getUserName())}
                  </div>
                  <span className="hidden md:block text-white font-medium">
                    {getUserName()}
                  </span>
                </button>

                {/* Dropdown Menu */}
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl overflow-hidden">
                    <div className="px-4 py-3 border-b border-gray-700">
                      <p className="text-white font-medium truncate">{getUserName()}</p>
                      <p className="text-gray-400 text-sm truncate">{user.email}</p>
                    </div>
                    <a
                      href="/dashboard"
                      className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-lime-400 transition-colors"
                    >
                      <User className="w-4 h-4" />
                      Dashboard
                    </a>
                    <a
                      href="/settings"
                      className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-lime-400 transition-colors"
                    >
                      <Settings className="w-4 h-4" />
                      Settings
                    </a>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-gray-800 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              // Not logged in view
              <>
                <a href="/signup">
                  <button className="px-6 py-2 bg-lime-400 text-black font-semibold rounded-full hover:bg-lime-500 transition-all">
                    Get Started
                  </button>
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}