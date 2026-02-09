"use client";

import { useState } from "react";
import Link from "next/link";
import { Lock, User, ArrowRight } from "lucide-react";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Login functionality coming soon! This is a design preview.");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-radial-gradient from-primary/5 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -mr-64 -mt-64 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[150px] -ml-64 -mb-64 pointer-events-none" />

            <div className="w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_100px_rgba(255,228,145,0.05)] relative z-10 backdrop-blur-xl">
                {/* Header */}
                <div className="text-center mb-10">
                    <Link href="/" className="inline-block mb-8 group">
                        <img 
                            src="/logo.png" 
                            alt="BigWin959" 
                            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(255,228,145,0.3)]"
                        />
                    </Link>
                    <h2 className="text-3xl font-heading font-black text-white uppercase tracking-tighter mb-2">Welcome Back</h2>
                    <p className="text-gray-500 text-sm font-medium">Enter your credentials to access your account</p>
                </div>

                {/* Form */}
                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-4">Username</label>
                        <div className="relative group">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors" size={20} />
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full bg-black/50 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all placeholder:text-white/10 font-bold"
                                placeholder="Enter your username"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-4">Password</label>
                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors" size={20} />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-black/50 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all placeholder:text-white/10 font-bold"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-xs font-bold px-2">
                        <label className="flex items-center text-gray-400 cursor-pointer hover:text-white transition-colors">
                            <input type="checkbox" className="mr-2 accent-primary w-4 h-4 rounded border-gray-600 bg-gray-700" />
                            Remember Me
                        </label>
                        <Link href="#" className="text-primary hover:text-primary-light transition-colors uppercase tracking-wider">
                            Forgot Password?
                        </Link>
                    </div>

                    <button type="submit" className="btn-primary w-full !py-5 !rounded-2xl !text-black shadow-2xl shadow-primary/20 flex items-center justify-center gap-3 group">
                        <span>Log In Now</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>

                {/* Footer */}
                <div className="mt-8 text-center">
                    <p className="text-gray-500 text-sm font-medium">
                        Don't have an account?{" "}
                        <Link href="https://www.bigwin959.com/register" target="_blank" className="text-white hover:text-primary transition-colors font-bold uppercase tracking-wider ml-1">
                            Join Now
                        </Link>
                    </p>
                </div>
            </div>
            
            {/* Return home link */}
            <div className="absolute top-8 left-8">
                <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors font-bold uppercase tracking-widest text-xs">
                    <ArrowRight className="rotate-180" size={16} />
                    <span>Return Home</span>
                </Link>
            </div>
        </div>
    );
}
