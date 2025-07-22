'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface AnalyticsSettings {
  gaId: string;
  gtmId: string;
  customScript: string;
  environment: 'production' | 'staging';
}

export default function AnalyticsSettings() {
  const [settings, setSettings] = useState<AnalyticsSettings>({
    gaId: '',
    gtmId: '',
    customScript: '',
    environment: 'production'
  });
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Load existing settings
    const loadSettings = async () => {
      try {
        const response = await fetch('/api/analytics/settings');
        if (response.ok) {
          const data = await response.json();
          setSettings(data);
        }
      } catch (error) {
        console.error('Error loading settings:', error);
      }
    };
    loadSettings();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      const response = await fetch('/api/analytics/settings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(settings),
      });

      if (response.ok) {
        setMessage('Settings saved successfully!');
        router.refresh();
      } else {
        setMessage('Error saving settings. Please try again.');
      }
    } catch (error) {
      setMessage('Error saving settings. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="bg-white">
      <section className="relative py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Analytics Settings
            </h1>
            <p className="text-lg text-gray-600">
              Configure your website analytics and tracking settings.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Google Analytics 4 Measurement ID
                <input
                  type="text"
                  value={settings.gaId}
                  onChange={(e) => setSettings({ ...settings, gaId: e.target.value })}
                  placeholder="G-XXXXXXXX"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 py-3 px-4"
                />
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Google Tag Manager Container ID
                <input
                  type="text"
                  value={settings.gtmId}
                  onChange={(e) => setSettings({ ...settings, gtmId: e.target.value })}
                  placeholder="GTM-XXXXXX"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 py-3 px-4"
                />
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Custom Tracking Script
                <textarea
                  value={settings.customScript}
                  onChange={(e) => setSettings({ ...settings, customScript: e.target.value })}
                  placeholder="<!-- Add your custom tracking script here -->"
                  rows={6}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 py-3 px-4 font-mono text-sm"
                />
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Environment
                <select
                  value={settings.environment}
                  onChange={(e) => setSettings({ ...settings, environment: e.target.value as 'production' | 'staging' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 py-3 px-4"
                >
                  <option value="production">Production</option>
                  <option value="staging">Staging</option>
                </select>
              </label>
            </div>

            {message && (
              <div className={`p-4 rounded-lg ${message.includes('Error') ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-green-50 text-green-700 border border-green-200'}`}>
                {message}
              </div>
            )}

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={isSaving}
                className="inline-flex items-center justify-center px-6 py-4 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-colors disabled:opacity-50 disabled:hover:bg-blue-600"
              >
                {isSaving ? 'Saving...' : 'Save Settings'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
} 