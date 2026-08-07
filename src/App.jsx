import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Bot } from 'lucide-react';

import BotixhubHomepage from './BotixhubHomepage';
import BotixhubDocs from './BotixhubDocs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 font-sans text-slate-200 selection:bg-blue-500/30">
        
        {/* Global Navigation Bar */}
        <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-6 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 text-2xl font-bold text-white tracking-tight hover:opacity-80 transition">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-1.5 shadow-lg shadow-blue-500/20">
              <Bot className="w-6 h-6 text-white" />
            </div>
            Botixhub
          </Link>
          
          <div className="flex gap-6 items-center">
            <Link 
              to="/" 
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/docs" 
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Documentation
            </Link>
            <a 
              href="https://t.me/BotixhubBot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] hidden md:block"
            >
              Launch Bot
            </a>
          </div>
        </nav>

        {/* Main Routing Area */}
        <div className="pt-16"> {/* Padding top to offset the fixed navigation bar */}
          <Routes>
            {/* Homepage Route */}
            <Route path="/" element={<BotixhubHomepage />} />
            
            {/* Documentation Route with wildcard (*) for nested routes */}
            <Route path="/docs/*" element={<BotixhubDocs />} />
            
            {/* 404 Error Page */}
            <Route 
              path="*" 
              element={
                <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
                  <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
                    404
                  </h1>
                  <h2 className="text-3xl font-bold text-white mb-3">
                    Page Not Found
                  </h2>
                  <p className="text-slate-400 mb-8 max-w-md text-lg">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                  </p>
                  <Link 
                    to="/" 
                    className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-500/25"
                  >
                    Return to Homepage
                  </Link>
                </div>
              } 
            />
          </Routes>
        </div>
        
      </div>
    </Router>
  );
}

export default App;