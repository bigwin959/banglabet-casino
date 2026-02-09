"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
        <header className={`fixed inset-x-0 z-50 transition-all duration-500 px-4 md:px-8 ${isScrolled ? "top-0 py-2" : "top-2 md:top-4"}`}>
            <div className={`max-w-7xl mx-auto transition-all duration-500 border border-white/10 flex items-center justify-between px-6 
                ${isScrolled 
                    ? "bg-black/90 backdrop-blur-xl rounded-none md:rounded-full h-14 md:h-16 shadow-2xl" 
                    : "bg-black/50 backdrop-blur-md rounded-full h-14 md:h-20 shadow-lg"}`}>

                {/* Logo & Links Group */}
                <div className="flex items-center space-x-10">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group">
                        <div className="relative h-8 md:h-12 w-auto transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]">
                            <img 
                                src="/logo.png" 
                                alt="BigWin959 Logo" 
                                className="h-full w-auto object-contain"
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {menuItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`text-[13px] font-bold transition-all uppercase tracking-[0.15em] relative group/item
                                        ${isActive ? "text-primary" : "text-gray-400 hover:text-white"}`}
                                >
                                    {item.label}
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 shadow-[0_0_8px_rgba(255,0,0,0.8)]
                                        ${isActive ? "w-full" : "w-0 group-hover/item:w-full"}`}></span>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Right Side - Actions */}
                <div className="flex items-center space-x-6">
                    <div className="hidden xl:flex items-center space-x-4">
                        <Link href="/login" className="text-sm font-bold text-white hover:text-primary transition-colors uppercase tracking-widest">
                            Log In
                        </Link>
                    </div>

                    <a
                        href="https://www.bigwin959.com/register"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center !px-8 !text-black"
                    >
                        Join Now
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden text-white hover:text-primary transition-colors p-2"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
                            <Link
                                href="/login"
                                className="text-center text-gray-300 font-bold py-3 hover:text-white font-heading tracking-widest"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Login
                            </Link>
                            <a
                                href="https://www.bigwin959.com/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary !text-black text-center font-bold py-3 rounded-full shadow-lg shadow-primary/20 font-heading tracking-widest"
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
