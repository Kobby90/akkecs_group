"use client";

import { useState } from 'react';
import Image from 'next/image';

interface FormStatus {
  submitting: boolean;
  submitted: boolean;
  error: string | null;
}

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      // Use Next.js API route for all environments
      const endpoint = '/api/contact';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        let errorMessage = 'Failed to send message';
        try {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const errorData = await response.json();
            errorMessage = errorData.message || errorData.error || errorMessage;
          } else {
            // Handle non-JSON errors (like 403 Forbidden HTML pages)
            errorMessage = `Server Error (${response.status}): ${response.statusText}`;
          }
        } catch {
          errorMessage = `Server Error (${response.status})`;
        }
        throw new Error(errorMessage);
      }

      setStatus({
        submitting: false,
        submitted: true,
        error: null
      });

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });

    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to send message. Please try again later.';
      console.error('Submission Error:', error);
      setStatus({
        submitting: false,
        submitted: false,
        error: errorMessage
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-transparent min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-950 overflow-hidden min-h-[500px] flex items-center border-b border-slate-900">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_60%)]"></div>

        <div className="max-w-screen-xl mx-auto px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-6 backdrop-blur-md">
                <span className="text-xs font-bold tracking-wider text-indigo-400 uppercase font-mono">Get in Touch</span>
              </div>
              <h1 className="mb-6 text-5xl font-extrabold tracking-tight leading-tight text-white md:text-6xl font-display">
                Let&apos;s Start a <span className="text-gradient">Conversation</span>
              </h1>
              <p className="text-xl text-slate-300">
                Have questions about our solutions? Our team is ready to help you transform your financial operations.
              </p>
            </div>

            <div className="relative animate-in fade-in slide-in-from-right-8 duration-700">
              <div className="relative aspect-[4/5] max-w-[450px] mx-auto lg:mr-0 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-xl bg-slate-900">
                <Image
                  src="/Daniel1.png"
                  alt="Contact Person"
                  fill
                  className="object-cover object-top"
                  quality={95}
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-indigo-600 rounded-2xl -z-10 blur-xl opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-600 rounded-full -z-10 blur-2xl opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-24 -mt-20 z-20 bg-transparent">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Information */}
            <div className="group glowing-card p-8 lg:p-12 rounded-3xl relative h-fit">
              <div className="glowing-card-glow"></div>
              <div className="relative z-10 text-slate-900">
                <h2 className="text-3xl font-bold mb-8 font-display text-slate-900">Contact Information</h2>
                <p className="text-slate-655 mb-10 text-lg">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-650">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-6">
                      <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1 font-mono">Phone</p>
                      <p className="text-xl font-bold text-indigo-650">+233 (574) 299-407</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-650">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-6">
                      <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1 font-mono">Email</p>
                      <p className="text-xl font-bold text-indigo-650">info@fintrivoratech.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-650">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-6">
                      <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1 font-mono">Location</p>
                      <p className="text-xl font-bold text-indigo-650">IL11 Jeep St.<br />Djaman, Accra</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="group glowing-card p-8 lg:p-12 rounded-3xl relative">
              <div className="glowing-card-glow"></div>
              <div className="relative z-10">
                {status.submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mb-6 text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 font-display">Message Sent!</h3>
                    <p className="text-slate-600 mb-8">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
                    <button
                      onClick={() => setStatus(prev => ({ ...prev, submitted: false }))}
                      className="text-indigo-400 font-semibold hover:text-indigo-300 font-mono"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {status.error && (
                      <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start">
                        <svg className="w-5 h-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <p className="text-red-400 text-sm">{status.error}</p>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2 font-mono">
                          Full Name <span className="text-indigo-650">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-slate-400 text-slate-900 focus:bg-white"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2 font-mono">
                          Email Address <span className="text-indigo-650">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-slate-400 text-slate-900 focus:bg-white"
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2 font-mono">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          id="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-slate-400 text-slate-900 focus:bg-white"
                          placeholder="Company Ltd"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2 font-mono">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-slate-400 text-slate-900 focus:bg-white"
                          placeholder="+233 ..."
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2 font-mono">
                        Message <span className="text-indigo-650">*</span>
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-slate-400 resize-none text-slate-900 focus:bg-white"
                        placeholder="How can we help you?"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status.submitting}
                      className={`btn-premium-primary w-full flex justify-center py-4 px-6 font-bold disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      {status.submitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-transparent">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="bg-white/80 p-4 rounded-3xl shadow-xl border border-slate-200 backdrop-blur-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15851.271145248842!2d-0.3214844767089849!3d5.576999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c7ebaeabe93%3A0x5e5c0da6b54dc1f9!2sGbawe%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2s!4v1645564944227!5m2!1sen!2s"
              className="w-full h-[500px] rounded-2xl"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
