"use client";

import { useState, useEffect } from 'react';
import { useCookieConsent, CookieSettings } from '@/context/CookieContext';
import Link from 'next/link';

export default function CookieConsent() {
  const { settings, showBanner, setShowBanner, acceptDefault, saveCustom, isLoading } = useCookieConsent();
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [customSettings, setCustomSettings] = useState<CookieSettings>({
    essential: true,
    analytics: true,
    marketing: true
  });

  useEffect(() => {
    if (settings) {
      setCustomSettings(settings);
    }
  }, [settings]);

  if (isLoading || !showBanner) return null;

  const handleCustomSave = () => {
    saveCustom(customSettings);
    setIsCustomizing(false);
  };

  const handleToggle = (key: keyof CookieSettings) => {
    if (key === 'essential') return;
    setCustomSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* Backdrop for mandatory choice */}
      <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[100] animate-in fade-in duration-500" />

      <div className="fixed inset-x-4 bottom-4 md:bottom-8 z-[101] flex justify-center animate-in slide-in-from-bottom-10 fade-in duration-700">
        {!isCustomizing ? (
          <div className="w-full max-w-4xl bg-slate-900/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-[10px] font-bold tracking-wider text-blue-400 uppercase">Cookie Transparency</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-outfit">Your Privacy, Our Priority</h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                We use cookies to tailor your experience on our platform. Choose our optimized <span className="text-blue-400 font-semibold text-xs uppercase tracking-tighter ml-1">Default Configuration</span> for the best performance, or define your own <span className="text-purple-400 font-semibold text-xs uppercase tracking-tighter">Custom Parameters</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={() => setIsCustomizing(true)}
                className="px-6 py-3 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 transition-all text-sm whitespace-nowrap"
              >
                Custom Parameters
              </button>
              <button
                onClick={acceptDefault}
                className="px-8 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm shadow-lg shadow-blue-600/20 whitespace-nowrap bg-gradient-to-r from-blue-600 to-indigo-600"
              >
                Accept Default
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-lg bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white font-outfit">Configure Cookies</h3>
                <button 
                  onClick={() => setIsCustomizing(false)}
                  className="p-2 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4 mb-8">
                {/* Essential */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div>
                    <span className="text-white font-bold block">Essential</span>
                    <span className="text-xs text-slate-500 leading-tight">Necessary for the site to function properly.</span>
                  </div>
                  <div className="w-12 h-6 rounded-full bg-blue-600/50 flex flex-row-reverse p-1 cursor-not-allowed opacity-50">
                    <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                  </div>
                </div>

                {/* Analytics */}
                <div 
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer ${customSettings.analytics ? 'bg-blue-500/10 border-blue-500/30' : 'bg-white/5 border-white/5'}`}
                  onClick={() => handleToggle('analytics')}
                >
                  <div>
                    <span className="text-white font-bold block">Analytics</span>
                    <span className="text-xs text-slate-500">Help us understand how you use our site.</span>
                  </div>
                  <div className={`w-12 h-6 rounded-full transition-all flex p-1 ${customSettings.analytics ? 'bg-blue-600 flex-row-reverse' : 'bg-slate-700'}`}>
                    <div className="w-4 h-4 bg-white rounded-full shadow-sm transition-all" />
                  </div>
                </div>

                {/* Marketing */}
                <div 
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer ${customSettings.marketing ? 'bg-purple-500/10 border-purple-500/30' : 'bg-white/5 border-white/5'}`}
                  onClick={() => handleToggle('marketing')}
                >
                  <div>
                    <span className="text-white font-bold block">Marketing</span>
                    <span className="text-xs text-slate-500">Tailored content and preferences.</span>
                  </div>
                  <div className={`w-12 h-6 rounded-full transition-all flex p-1 ${customSettings.marketing ? 'bg-purple-600 flex-row-reverse' : 'bg-slate-700'}`}>
                    <div className="w-4 h-4 bg-white rounded-full shadow-sm transition-all" />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4">
                <Link 
                  href="/privacy" 
                  className="text-xs text-slate-500 hover:text-blue-400 underline underline-offset-4"
                  onClick={() => setShowBanner(false)}
                >
                  Privacy Policy
                </Link>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsCustomizing(false)}
                    className="px-4 py-2 text-sm text-slate-400 font-medium hover:text-white transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleCustomSave}
                    className="px-6 py-2 bg-white text-slate-900 rounded-xl font-bold text-sm hover:bg-slate-200 transition-all active:scale-[0.98]"
                  >
                    Save Selections
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
