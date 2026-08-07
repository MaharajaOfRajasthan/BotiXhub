import React from 'react';
import { Bot, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const AddNewBot = () => {
  // लिंक्स को सुंदर और अंडरलाइन दिखाने के लिए एक कॉमन क्लास
  const linkStyle = "text-blue-400 underline underline-offset-4 hover:text-blue-300 transition-colors font-semibold";

  return (
    <div className="prose prose-invert max-w-none">
      
      {/* Page Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
          <Bot className="w-8 h-8 text-blue-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight m-0">
          Adding a New Bot
        </h1>
      </div>
      
      <p className="text-lg text-slate-300 leading-relaxed mb-8">
        Connecting your custom bot to the Botixhub platform is a seamless process. By simply providing your bot token, the system will automatically deploy and activate your bot, making it ready for configuration and user interaction.
      </p>

      <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-800 pb-2">
        Step-by-Step Deployment
      </h2>
      
      {/* Step-by-Step Instructions */}
      <div className="space-y-8 mb-10">
        
        {/* Step 1 */}
        <div className="flex gap-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold shrink-0 shadow-lg shadow-blue-500/30">
            1
          </div>
          <div>
            <h4 className="text-white font-semibold text-xl m-0 mb-2">Access the Main Menu</h4>
            <p className="text-slate-400 m-0">
              Launch <a href="https://t.me/BotixhubBot" target="_blank" rel="noopener noreferrer" className={linkStyle}>@BotixhubBot</a> on Telegram and send the <code className="text-blue-400 bg-blue-400/10 px-1.5 py-0.5 rounded font-mono text-sm">/start</code> command to load the primary dashboard.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex gap-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold shrink-0 shadow-lg shadow-blue-500/30">
            2
          </div>
          <div>
            <h4 className="text-white font-semibold text-xl m-0 mb-2">Initiate Bot Creation</h4>
            <p className="text-slate-400 m-0">
              Click on the <strong>Add New Bot</strong> button from the inline keyboard options provided in the welcome message.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex gap-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold shrink-0 shadow-lg shadow-blue-500/30">
            3
          </div>
          <div>
            <h4 className="text-white font-semibold text-xl m-0 mb-2">Submit Your Bot Token</h4>
            <p className="text-slate-400 m-0">
              Send the Token of your bot (generated via <a href="https://t.me/BotFather" target="_blank" rel="noopener noreferrer" className={linkStyle}>@BotFather</a>). Botixhub will instantly validate the token and automatically start your bot's core services.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex gap-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold shrink-0 shadow-lg shadow-blue-500/30">
            4
          </div>
          <div>
            <h4 className="text-white font-semibold text-xl m-0 mb-2">Configure Settings</h4>
            <p className="text-slate-400 m-0">
              Once successfully added, click on the <Link to="/docs/manage-bots" className={linkStyle}>Manage Bots</Link> button to adjust core settings such as <Link to="/docs/multi-admin" className={linkStyle}>Multi-Admin</Link> access and <Link to="/docs/force-subscribe" className={linkStyle}>Force Subscribe</Link> rules.
            </p>
          </div>
        </div>

      </div>

      {/* Important Note for Content Management */}
      <div className="bg-sky-500/10 border border-sky-500/20 rounded-xl p-5 flex gap-4 items-start">
        <Info className="w-6 h-6 text-sky-400 shrink-0 mt-0.5" />
        <div>
          <h4 className="text-sky-400 font-bold m-0 mb-1">Content Management Disclaimer</h4>
          <p className="text-slate-300 text-sm m-0 leading-relaxed">
            While core settings are configured within @BotixhubBot, managing your actual content—such as <Link to="/docs/inline-folders" className={linkStyle}>creating inline folders</Link>, <Link to="/docs/adding-files" className={linkStyle}>adding files</Link>, and sending media—must be done directly inside your newly created custom bot. Navigate to your own bot's chat to start uploading content.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default AddNewBot;
