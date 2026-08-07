import React from 'react';
import { ShieldCheck, AlertTriangle } from 'lucide-react';

const ForceSubscribe = () => {
  return (
    <div className="prose prose-invert max-w-none">
      
      {/* Page Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
          <ShieldCheck className="w-8 h-8 text-purple-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight m-0">
          Force Subscribe Setup
        </h1>
      </div>
      
      <p className="text-lg text-slate-300 leading-relaxed mb-8">
        The Force Subscribe feature mandates that users must join your specified Telegram channels or groups before they can interact with your bot. This is a highly effective strategy for organic community growth and audience retention.
      </p>

      {/* Important Warning Alert */}
      <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5 mb-10 flex gap-4 items-start">
        <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
        <div>
          <h4 className="text-amber-500 font-bold m-0 mb-1">Important Prerequisite</h4>
          <p className="text-slate-300 text-sm m-0 leading-relaxed">
            Your bot <strong>must</strong> be promoted to an Administrator in the target channel or group before configuration. The system will fail to verify subscriptions if the bot lacks administrative privileges.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-800 pb-2">
        Configuration Guide
      </h2>
      
      {/* Step-by-Step Instructions */}
      <div className="space-y-8">
        
        {/* Step 1 */}
        <div className="flex gap-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold shrink-0 shadow-lg shadow-blue-500/30">
            1
          </div>
          <div>
            <h4 className="text-white font-semibold text-xl m-0 mb-2">Initialize the Platform</h4>
            <p className="text-slate-400 m-0">
              Send the <code className="text-blue-400 bg-blue-400/10 px-1.5 py-0.5 rounded font-mono text-sm">/start</code> command to <strong>@BotixhubBot</strong> to open the main dashboard menu.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex gap-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold shrink-0 shadow-lg shadow-blue-500/30">
            2
          </div>
          <div>
            <h4 className="text-white font-semibold text-xl m-0 mb-2">Select Your Bot</h4>
            <p className="text-slate-400 m-0">
              Navigate to the <strong>Manage Bots</strong> section from the inline keyboard and select the specific bot you wish to configure.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex gap-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold shrink-0 shadow-lg shadow-blue-500/30">
            3
          </div>
          <div>
            <h4 className="text-white font-semibold text-xl m-0 mb-2">Access Core Features</h4>
            <p className="text-slate-400 m-0">
              Click on <strong>More Features</strong> (or Core Features) on the bot management screen, and choose the <strong>Force Subscribe</strong> option.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex gap-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold shrink-0 shadow-lg shadow-blue-500/30">
            4
          </div>
          <div>
            <h4 className="text-white font-semibold text-xl m-0 mb-2">Link New Chat</h4>
            <p className="text-slate-400 m-0 mb-3">
              Click the <strong>Link New Chat</strong> button. You can authorize your channel or group using any of the following accepted methods:
            </p>
            <ul className="text-slate-300 space-y-2 m-0 pl-5 marker:text-blue-500">
              <li>Send the unique numerical <strong>Channel/Group ID</strong>.</li>
              <li><strong>Forward any message</strong> directly from the target channel to the bot.</li>
              <li>Send the public <strong>@username</strong> of the channel.</li>
            </ul>
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default ForceSubscribe;
