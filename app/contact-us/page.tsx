"use client";

import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen pb-20 pt-24 md:pt-28">


            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="card p-8 order-2 lg:order-1">
                        <h2 className="text-2xl font-heading text-primary mb-6">Send us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-text/70">Name</label>
                                    <input type="text" placeholder="Your Name" className="input w-full" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-text/70">Email</label>
                                    <input type="email" placeholder="your@email.com" className="input w-full" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-text/70">Subject</label>
                                <input type="text" placeholder="How can we help?" className="input w-full" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-text/70">Message</label>
                                <textarea
                                    rows={5}
                                    placeholder="Write your message here..."
                                    className="input w-full resize-none"
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-2">
                                <span>Send Message</span>
                                <Send size={18} />
                            </button>
                        </form>
                    </div>

                    {/* Contact Info & Live Chat */}
                    <div className="space-y-8 order-1 lg:order-2">
                        {/* Info Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-background/50 p-6 rounded-xl border border-primary/20 hover:border-primary transition-colors">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                                    <Mail size={24} />
                                </div>
                                <h3 className="text-lg font-heading mb-2">Email Support</h3>
                                <p className="text-text/70 text-sm mb-2">For general inquiries</p>
                                <a href="mailto:support@bigwin959.com" className="text-cta hover:underline">
                                    support@bigwin959.com
                                </a>
                            </div>

                            <div className="bg-background/50 p-6 rounded-xl border border-primary/20 hover:border-primary transition-colors">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                                    <Phone size={24} />
                                </div>
                                <h3 className="text-lg font-heading mb-2">Phone Support</h3>
                                <p className="text-text/70 text-sm mb-2">Mon-Fri, 9am-6pm</p>
                                <a href="tel:+8801234567890" className="text-cta hover:underline">
                                    +880 1234-567890
                                </a>
                            </div>
                        </div>

                        {/* Live Chat Promo */}
                        <div className="bg-gradient-to-br from-cta/20 to-primary/20 p-8 rounded-2xl border border-cta/30 relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-cta text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-cta/30">
                                    <MessageSquare size={32} />
                                </div>
                                <h3 className="text-2xl font-heading mb-4">Live Chat Support</h3>
                                <p className="text-text/80 mb-6">
                                    Need instant help? Our support agents are available 24/7 to solve your problems in real-time.
                                </p>
                                <button className="btn-primary neon-glow-cta px-6">
                                    Start Chat
                                </button>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cta/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        </div>

                        {/* Office Location */}
                        <div className="flex items-start space-x-4 p-6 bg-background/30 rounded-xl border border-white/5">
                            <MapPin className="text-primary mt-1" size={24} />
                            <div>
                                <h3 className="text-lg font-heading mb-2">Headquarters</h3>
                                <p className="text-text/70">
                                    Level 12, Future Park Tower,<br />
                                    Bashundhara R/A, Dhaka-1229,<br />
                                    Bangladesh
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
