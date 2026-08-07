import React from 'react';
import { Menu, Search, Zap, ShieldCheck, ChevronRight, Bot } from 'lucide-react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// नई पेजों को यहाँ इंपोर्ट करें
import Introduction from './docs-pages/Introduction';
import ForceSubscribe from './docs-pages/ForceSubscribe';
import AddNewBot from './docs-pages/AddNewBot';

const BotixhubDocs = () => {
  const location = useLocation();

  // Function to highlight active links
  const isActive = (path) => location.pathname === path;

  // Reusable Sidebar Menu Component
  const SidebarMenu = () => (
    <div className="p-4 overflow-y-auto h-full custom-scrollbar">
      <Accordion type="multiple" defaultValue={["getting-started", "core-features"]} className="w-full space-y-3">
        
        {/* Getting Started Category */}
        <AccordionItem value="getting-started" className="border-none">
          <AccordionTrigger className="hover:bg-slate-800 p-3 rounded-xl hover:no-underline data-[state=open]:bg-slate-800/50 transition-all group">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-yellow-500/10 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
                <Zap className="w-4 h-4 text-yellow-500" />
              </div>
              <span className="font-semibold text-slate-200">Getting Started</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-2 pb-3 px-4 space-y-1 border-l border-slate-800 ml-5 mt-1">
            <Link 
              to="/docs" 
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-all ${isActive('/docs') ? 'bg-blue-600/10 text-blue-400' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}`}
            >
              <ChevronRight className={`w-4 h-4 ${isActive('/docs') ? 'text-blue-400' : 'text-slate-600'}`} />
              Introduction
            </Link>
            <Link 
              to="/docs/add-new-bot" 
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-all ${isActive('/docs/add-new-bot') ? 'bg-blue-600/10 text-blue-400' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}`}
            >
              <ChevronRight className={`w-4 h-4 ${isActive('/docs/add-new-bot') ? 'text-blue-400' : 'text-slate-600'}`} />
              Adding a New Bot
            </Link>
          </AccordionContent>
        </AccordionItem>

        {/* Core Features Category */}
        <AccordionItem value="core-features" className="border-none">
          <AccordionTrigger className="hover:bg-slate-800 p-3 rounded-xl hover:no-underline data-[state=open]:bg-slate-800/50 transition-all group">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                <ShieldCheck className="w-4 h-4 text-purple-400" />
              </div>
              <span className="font-semibold text-slate-200">Core Features</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-2 pb-3 px-4 space-y-1 border-l border-slate-800 ml-5 mt-1">
            <Link 
              to="/docs/force-subscribe" 
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-all ${isActive('/docs/force-subscribe') ? 'bg-blue-600/10 text-blue-400' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}`}
            >
              <ChevronRight className={`w-4 h-4 ${isActive('/docs/force-subscribe') ? 'text-blue-400' : 'text-slate-600'}`} />
              Force Subscribe
            </Link>
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans flex flex-col md:flex-row">
      
      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between p-4 bg-slate-800/80 backdrop-blur-md border-b border-slate-700 sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 bg-slate-700/50 hover:bg-slate-600 rounded-lg transition">
                <Menu className="w-5 h-5 text-slate-200" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 bg-slate-900 border-r border-slate-800 p-0">
              <SheetHeader className="p-6 border-b border-slate-800 text-left">
                <SheetTitle className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 flex items-center gap-2">
                  <Bot className="w-6 h-6 text-blue-500" />
                  Documentation
                </SheetTitle>
              </SheetHeader>
              <SidebarMenu />
            </SheetContent>
          </Sheet>
          <span className="text-lg font-bold text-slate-100">Docs</span>
        </div>
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-72 fixed inset-y-0 left-0 bg-slate-900 border-r border-slate-800 z-10 pt-16 shadow-[4px_0_24px_rgba(0,0,0,0.2)]">
        <div className="px-6 py-5 border-b border-slate-800/60 bg-slate-900/50">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search documentation..." 
              className="w-full pl-9 pr-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-sm text-slate-200 focus:outline-none focus:border-blue-500 focus:bg-slate-800 transition-all"
            />
          </div>
        </div>
        <SidebarMenu />
      </aside>

      {/* Main Content Area (Routing) */}
      <main className="flex-1 md:ml-72 p-6 md:p-12 lg:px-20 pt-6 md:pt-24 max-w-5xl">
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/add-new-bot" element={<AddNewBot />} />
          <Route path="/force-subscribe" element={<ForceSubscribe />} />
        </Routes>
      </main>

    </div>
  );
};

export default BotixhubDocs;
