"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container-custom py-3 max-w-[1080px]">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <img
                                src="/logo.svg"
                                alt="Banglabet88"
                                className="h-12 w-auto object-contain"
                                onError={(e) => {
                                    // Fallback if logo missing
                                    e.currentTarget.style.display = 'none';
                                }}
                            />
                            <span className="text-2xl font-bold text-heading hidden">Banglabet88</span>
                        </Link>
                        {/* Text fallback if image fails to load or during dev */}
                        <Link href="/" className="text-2xl font-bold text-heading md:hidden lg:hidden">
                            Banglabet88
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-6 items-center">
                        {menuItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-text hover:text-primary font-medium transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Auth Buttons & Mobile Toggle */}
                    <div className="flex items-center space-x-4">
                        <div className="hidden md:flex space-x-2">
                            <a
                                href="https://bbtlink.co/banglabet88net"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                            >
                                Log In
                            </a>
                            <a
                                href="https://bbtlink.co/banglabet88net"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline"
                            >
                                Sign Up
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-heading focus:outline-none"
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full shadow-lg">
                    <nav className="flex flex-col p-4 space-y-4">
                        {menuItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-text hover:text-primary font-medium p-2 block border-b border-gray-50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className="flex flex-col space-y-2 pt-2">
                            <a
                                href="https://bbtlink.co/banglabet88net"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary text-center"
                            >
                                Log In
                            </a>
                            <a
                                href="https://bbtlink.co/banglabet88net"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline text-center"
                            >
                                Sign Up
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
