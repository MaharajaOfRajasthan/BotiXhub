import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Send, 
  MessageCircle, 
  ShieldCheck, 
  Users, 
  FolderOpen, 
  Globe, 
  Radio, 
  FilePlus 
} from 'lucide-react';

const BotixhubHomepage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white font-sans overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 flex flex-col items-center justify-center text-center min-h-[90vh]">
        
        {/* Background Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <a 
          href="https://t.me/Botixhub_official" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-sm text-blue-400 mb-8 backdrop-blur-sm hover:bg-slate-700 transition"
        >
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
          Stay updated! Join @Botixhub_official
        </a>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl">
          Build Your Ultimate <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500">
            Telegram Bot
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          Create your own powerful Telegram bot without writing a single line of code. Engage with your users, enforce channel subscriptions, and manage multimedia files effortlessly.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="https://t.me/BotixhubBot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] transition-all"
          >
            <Send className="w-5 h-5" /> Launch @BotixhubBot
          </a>
          <Link 
            to="/docs" 
            className="flex items-center justify-center px-8 py-3.5 text-base font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 rounded-xl transition-all"
          >
            Read Documentation
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 lg:px-8 bg-slate-900/50 border-t border-slate-800 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features Inside</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Botixhub equips you with all the advanced tools required to manage a professional and highly active Telegram community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-slate-800/40 border border-slate-700/50 p-8 rounded-2xl hover:bg-slate-800/80 transition-colors group">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Direct User Chat</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Administrators can seamlessly communicate directly with users via the bot, providing instant support and answering queries.
              </p>
            </div>

            <div className="bg-slate-800/40 border border-slate-700/50 p-8 rounded-2xl hover:bg-slate-800/80 transition-colors group">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Force Subscribe</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Accelerate your community growth by requiring users to subscribe to your designated channels before accessing the bot's features.
              </p>
            </div>

            <div className="bg-slate-800/40 border border-slate-700/50 p-8 rounded-2xl hover:bg-slate-800/80 transition-colors group">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Multi-Admin & Broadcast</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Assign multiple administrators to manage your bot and dispatch broadcast messages to your entire user base with a single click.
              </p>
            </div>

            <div className="bg-slate-800/40 border border-slate-700/50 p-8 rounded-2xl hover:bg-slate-800/80 transition-colors group">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FolderOpen className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Inline Folders</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Organize your content efficiently using intuitive inline keyboard folders, significantly enhancing user navigation and experience.
              </p>
            </div>

            <div className="bg-slate-800/40 border border-slate-700/50 p-8 rounded-2xl hover:bg-slate-800/80 transition-colors group">
              <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FilePlus className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Rich Media Support</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Effortlessly integrate and share documents, images, custom URLs, and other multimedia assets directly within your bot interface.
              </p>
            </div>

            <div className="bg-slate-800/40 border border-slate-700/50 p-8 rounded-2xl hover:bg-slate-800/80 transition-colors group">
              <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">WebApp Integration</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Fully compatible with Telegram Mini-Apps (WebApps), allowing you to deliver a comprehensive web experience inside the chat.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-10 border-t border-slate-800 text-center relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-2xl font-bold text-blue-500 mb-4 tracking-tighter">Botixhub</div>
          <p className="text-slate-500 text-sm mb-6">
            &copy; {new Date().getFullYear()} Botixhub. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 text-slate-500">
            <a href="https://t.me/Botixhub_official" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition flex items-center gap-2">
              <Send className="w-4 h-4" /> Telegram Channel
            </a>
            <a href="https://t.me/BotixhubBot" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition flex items-center gap-2">
              <MessageCircle className="w-4 h-4" /> Start Bot
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default BotixhubHomepage;
