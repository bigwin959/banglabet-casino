"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems = [
        { label: "Live Casino", href: "/live-casino" },
        { label: "Sportsbook", href: "/sportsbook" },
        { label: "Promotions", href: "/promotions" },
        { label: "Blog", href: "/blog" },
        { label: "About Us", href: "/about-us" },
        { label: "Contact Us", href: "/contact-us" },
    ];

    const pathname = usePathname();

    return (
        <header className="fixed top-2 inset-x-0 z-50 px-4 md:px-8">
            <div className="max-w-7xl mx-auto bg-black/80 backdrop-blur-md rounded-full shadow-lg border border-white/10 flex items-center justify-between px-6 h-14 md:h-16">

                {/* Logo & Links Group */}
                <div className="flex items-center space-x-8">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <span className="text-xl font-bold tracking-tight text-white uppercase font-heading">
                            BigWin<span className="text-primary">959</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {menuItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`text-sm font-semibold transition-all uppercase tracking-wider relative
                                        ${isActive ? "text-primary" : "text-gray-300 hover:text-white"}`}
                                >
                                    {item.label}
                                    {isActive && (
                                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary shadow-[0_0_8px_rgba(255,0,0,0.8)]"></span>
                                    )}
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Right Side - Actions */}
                <div className="flex items-center space-x-4">
                    <div className="hidden md:flex items-center text-gray-300 hover:text-white cursor-pointer transition-colors">
                        <Globe size={20} />
                    </div>

                    <a
                        href="https://bbtlink.co/banglabet88net"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary !text-white text-xs md:text-sm font-bold px-6 py-2 md:py-3 rounded-full hover:bg-red-700 transition-all uppercase tracking-widest shadow-lg shadow-red-600/20"
                    >
                        Join Now
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden text-white hover:text-gray-300 transition-colors"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden mt-2 mx-auto max-w-[95%] bg-black/95 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
                    <div className="px-6 py-8 space-y-4">
                        {menuItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`block text-lg font-semibold transition-colors uppercase tracking-widest font-heading
                                    ${isActive ? "text-primary pl-2 border-l-2 border-primary" : "text-gray-300 hover:text-white"}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                        <div className="pt-4 border-t border-white/10 flex flex-col space-y-3">
                            <a
                                href="https://bbtlink.co/banglabet88net"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-center text-gray-300 font-bold py-3 hover:text-white font-heading tracking-widest"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Login
                            </a>
                            <a
                                href="https://bbtlink.co/banglabet88net"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary !text-white text-center font-bold py-3 rounded-full hover:bg-red-700 shadow-lg shadow-red-600/20 font-heading tracking-widest"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Join Now
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
