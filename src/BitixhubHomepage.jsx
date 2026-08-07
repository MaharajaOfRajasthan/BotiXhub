import React from 'react';

const BotixHubHomepage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-white font-sans">
      
      {/* Navigation Bar */}
      <header className="flex justify-between items-center px-8 py-6 bg-slate-800 shadow-lg border-b border-slate-700">
        <div className="text-3xl font-bold text-blue-500 tracking-tighter cursor-pointer">
          BotixHub
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
          <a href="#home" className="hover:text-blue-400 transition duration-300">Home</a>
          <a href="#features" className="hover:text-blue-400 transition duration-300">Features</a>
          <a href="#about" className="hover:text-blue-400 transition duration-300">About Us</a>
          <a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a>
        </nav>

        {/* Auth Buttons */}
        <div className="flex space-x-4">
          <button className="px-5 py-2 text-sm font-medium text-slate-200 bg-slate-700 hover:bg-slate-600 rounded-lg transition duration-300">
            Sign In
          </button>
          <button className="px-5 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md transition duration-300">
            Sign Up
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col justify-center items-center text-center px-4 py-20 relative overflow-hidden">
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight z-10">
          Welcome to <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            BotixHub
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 z-10">
          Experience the next generation of digital connectivity. A secure, fast, and modern platform designed to elevate your online journey.
        </p>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 z-10">
          <button className="px-8 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg transition transform hover:-translate-y-1">
            Get Started Free
          </button>
          <button className="px-8 py-3 text-lg font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-full shadow-lg transition transform hover:-translate-y-1">
            Explore Features
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-slate-500 text-sm bg-slate-800 border-t border-slate-700">
        &copy; 2026 Botixhub. All rights reserved.
      </footer>
      
    </div>
  );
};

export default BotixHubHomepage;
