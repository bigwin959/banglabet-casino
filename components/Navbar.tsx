"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import LoginModal from "./LoginModal";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const navLinks = [
        { name: "Live Casino", href: "/live-casino" },
        { name: "Sportsbook", href: "/sportsbook" },
        { name: "Promotions", href: "/promotions" },
        { name: "Blog", href: "/blog" },
        { name: "About Us", href: "/about-us" },
        { name: "Contact Us", href: "/contact-us" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="text-2xl font-heading neon-glow">
                            BanglaBet<span className="text-cta">88</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-text hover:text-primary transition-colors duration-200 font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right Side - Login/Signup & Language */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button
                            onClick={() => setShowLoginModal(true)}
                            className="btn-secondary px-4 py-2 text-sm"
                        >
                            Login
                        </button>
                        <button className="btn-primary px-4 py-2 text-sm neon-glow-cta">
                            Sign Up
                        </button>
                        <LanguageSwitcher />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-text hover:text-primary transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-primary/20">
                    <div className="px-4 pt-2 pb-4 space-y-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block text-text hover:text-primary transition-colors duration-200 py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex flex-col space-y-2 pt-4 border-t border-primary/20">
                            <button
                                onClick={() => {
                                    setShowLoginModal(true);
                                    setIsOpen(false);
                                }}
                                className="btn-secondary w-full"
                            >
                                Login
                            </button>
                            <button className="btn-primary w-full neon-glow-cta">
                                Sign Up
                            </button>
                            <div className="pt-2">
                                <LanguageSwitcher />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
