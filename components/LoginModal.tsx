"use client";

import { useState } from "react";
import { X, Mail, Lock, User } from "lucide-react";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
    const [activeTab, setActiveTab] = useState<"login" | "signup">("login");

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
            <div
                className="relative w-full max-w-md bg-background border border-primary/20 rounded-2xl shadow-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-text/50 hover:text-text transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Tabs */}
                <div className="flex border-b border-primary/20">
                    <button
                        className={`flex-1 py-4 text-center font-heading transition-colors ${activeTab === "login"
                            ? "bg-primary/10 text-primary border-b-2 border-primary"
                            : "text-text/70 hover:text-text hover:bg-white/5"
                            }`}
                        onClick={() => setActiveTab("login")}
                    >
                        Login
                    </button>
                    <button
                        className={`flex-1 py-4 text-center font-heading transition-colors ${activeTab === "signup"
                            ? "bg-primary/10 text-primary border-b-2 border-primary"
                            : "text-text/70 hover:text-text hover:bg-white/5"
                            }`}
                        onClick={() => setActiveTab("signup")}
                    >
                        Sign Up
                    </button>
                </div>

                {/* Form Container */}
                <div className="p-8">
                    <h2 className="text-2xl font-heading text-center mb-6 neon-glow">
                        {activeTab === "login" ? "Welcome Back" : "Join BigWin959"}
                    </h2>

                    <form className="space-y-4">
                        {activeTab === "signup" && (
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-text/70">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-text/50" size={18} />
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="input w-full pl-10"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-text/70">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-text/50" size={18} />
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="input w-full pl-10"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-text/70">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-text/50" size={18} />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="input w-full pl-10"
                                />
                            </div>
                        </div>

                        {activeTab === "signup" && (
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-text/70">Confirm Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-text/50" size={18} />
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="input w-full pl-10"
                                    />
                                </div>
                            </div>
                        )}

                        <button type="submit" className="btn-primary w-full neon-glow-cta mt-6">
                            {activeTab === "login" ? "Login" : "Create Account"}
                        </button>
                    </form>

                    {activeTab === "login" && (
                        <p className="text-center mt-4">
                            <a href="#" className="text-sm text-primary hover:underline">
                                Forgot your password?
                            </a>
                        </p>
                    )}

                    <div className="mt-6 text-center">
                        <p className="text-sm text-text/50">
                            By continuing, you agree to our{" "}
                            <a href="#" className="text-primary hover:underline">Terms of Service</a>
                            {" "}and{" "}
                            <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
