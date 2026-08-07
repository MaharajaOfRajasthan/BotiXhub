import React from 'react';
import { Zap } from 'lucide-react';

const Introduction = () => {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
        Introduction to Botixhub
      </h1>
      <p className="text-lg text-slate-300 leading-relaxed mb-8">
        Botixhub एक एडवांस टेलीग्राम बॉट बिल्डर है। यहाँ आप बिना कोडिंग के अपना खुद का पावरफुल बॉट बना सकते हैं और अपनी कम्युनिटी को आसानी से मैनेज कर सकते हैं।
      </p>

      <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl mb-8">
        <Zap className="w-8 h-8 text-yellow-500 mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">Quick Start</h3>
        <p className="text-slate-400 text-sm">@BotixhubBot पर जाएँ और अपना पहला बॉट सेटअप करें।</p>
      </div>
    </div>
  );
};

export default Introduction;
