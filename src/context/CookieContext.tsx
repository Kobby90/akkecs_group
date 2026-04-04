"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

export interface CookieSettings {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  lastUpdated?: string;
}

interface CookieContextType {
  settings: CookieSettings | null;
  showBanner: boolean;
  setShowBanner: (show: boolean) => void;
  acceptDefault: () => void;
  saveCustom: (newSettings: CookieSettings) => void;
  isLoading: boolean;
}

const STORAGE_KEY = 'fintrivora-cookie-consent';

const DEFAULT_SETTINGS: CookieSettings = {
  essential: true,
  analytics: true,
  marketing: true,
};

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export function CookieProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<CookieSettings | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setSettings(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse cookie settings', e);
        setShowBanner(true);
      }
    } else {
      setShowBanner(true);
    }
    setIsLoading(false);
  }, []);

  const acceptDefault = () => {
    const newSettings = { ...DEFAULT_SETTINGS, lastUpdated: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newSettings));
    setSettings(newSettings);
    setShowBanner(false);
  };

  const saveCustom = (newSettings: CookieSettings) => {
    const settingsWithDate = { ...newSettings, lastUpdated: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settingsWithDate));
    setSettings(settingsWithDate);
    setShowBanner(false);
  };

  return (
    <CookieContext.Provider value={{
      settings,
      showBanner,
      setShowBanner,
      acceptDefault,
      saveCustom,
      isLoading
    }}>
      {children}
    </CookieContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieProvider');
  }
  return context;
}
