"use client";

import { useState } from 'react';
import { useDemoModal } from '@/context/DemoContext';

const DemoModal = () => {
    const { isOpen, closeDemoModal } = useDemoModal();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        industry: '',
        useCase: ''
    });
    const [status, setStatus] = useState({
        submitting: false,
        submitted: false,
        error: null as string | null
    });

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ submitting: true, submitted: false, error: null });

        try {
            // Use the same endpoint logic as the contact form
            const endpoint = process.env.NODE_ENV === 'development' ? '/api/contact' : '/contact.php';

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    templateId: 8,
                    params: formData
                }),
            });

            if (!response.ok) {
                let errorMessage = 'Failed to send request';
                try {
                    const contentType = response.headers.get('content-type');
                    if (contentType && contentType.includes('application/json')) {
                        const errorData = await response.json();
                        errorMessage = errorData.message || errorData.error || errorMessage;
                    } else {
                        errorMessage = `Server Error (${response.status})`;
                    }
                } catch (e) {
                    errorMessage = `Server Error (${response.status})`;
                }
                throw new Error(errorMessage);
            }

            setStatus({ submitting: false, submitted: true, error: null });
            setFormData({ name: '', email: '', company: '', industry: '', useCase: '' });

            // Close modal after success (optional delay)
            setTimeout(() => {
                closeDemoModal();
                setStatus(prev => ({ ...prev, submitted: false }));
            }, 3000);

        } catch (error: any) {
            console.error('Demo Request Error:', error);
            setStatus({
                submitting: false,
                submitted: false,
                error: error.message || 'Failed to send message. Please try again later.'
            });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop click to close - now moved to background */}
            <div
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm cursor-pointer"
                onClick={closeDemoModal}
            ></div>

            <div
                className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 z-10"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={closeDemoModal}
                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors z-10"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="p-8 lg:p-10">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Schedule a Demo</h2>
                        <p className="text-slate-500">Fill out the form below and our team will prepare a curated demo for you.</p>
                    </div>

                    {status.submitted ? (
                        <div className="text-center py-12">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600 mx-auto">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
                            <p className="text-slate-600">We will reach out to schedule your session shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {status.error && (
                                <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start">
                                    <svg className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <p className="text-red-600 text-sm">{status.error}</p>
                                </div>
                            )}

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@company.com"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                                <input
                                    required
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Akkecs Group"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Industry</label>
                                <select
                                    required
                                    name="industry"
                                    value={formData.industry}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-slate-900 appearance-none bg-no-repeat bg-[right_1rem_center] bg-[length:1em_1em]"
                                    style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")` }}
                                >
                                    <option value="" disabled>Select your industry</option>
                                    <option value="Asset Management">Asset Management</option>
                                    <option value="Pension Administrator/Corporate Trustee">Pension Administrator/Corporate Trustee</option>
                                    <option value="Research Firm">Research Firm</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Use Case / Requirements</label>
                                <textarea
                                    required
                                    name="useCase"
                                    value={formData.useCase}
                                    onChange={handleChange}
                                    rows={3}
                                    placeholder="Tell us about your specific needs..."
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-400 resize-none text-slate-900"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status.submitting}
                                className={`w-full flex justify-center py-4 px-6 border border-transparent rounded-xl shadow-lg text-base font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-all duration-300 ${status.submitting ? 'opacity-75 cursor-not-allowed' : 'hover:-translate-y-1'}`}
                            >
                                {status.submitting ? 'Processing...' : 'Schedule My Demo'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DemoModal;
