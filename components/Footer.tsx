import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    const quickLinks = [
        { name: "Live Casino", href: "/live-casino" },
        { name: "Sportbook", href: "/sportbook" },
        { name: "Promotions", href: "/promotion" },
        { name: "Blog", href: "/blog" },
        { name: "About Us", href: "/about" },
        { name: "Contact Us", href: "/contact" },
    ];

    const socialLinks = [
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Instagram, href: "#", label: "Instagram" },
    ];

    return (
        <footer className="bg-background border-t border-primary/20 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-heading neon-glow">
                            BanglaBet<span className="text-cta">88</span>
                        </h3>
                        <p className="text-text/70 text-sm">
                            Your trusted online casino and sports betting platform. Play responsibly.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="text-text hover:text-primary transition-colors duration-200"
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-heading text-primary mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-text/70 hover:text-primary transition-colors duration-200 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-heading text-primary mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-2 text-text/70 text-sm">
                                <Mail size={16} />
                                <span>support@banglabet88.com</span>
                            </li>
                            <li className="flex items-center space-x-2 text-text/70 text-sm">
                                <Phone size={16} />
                                <span>+880 1234-567890</span>
                            </li>
                            <li className="flex items-center space-x-2 text-text/70 text-sm">
                                <MapPin size={16} />
                                <span>Dhaka, Bangladesh</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-heading text-primary mb-4">Newsletter</h4>
                        <p className="text-text/70 text-sm mb-4">
                            Subscribe to get the latest promotions and updates.
                        </p>
                        <div className="flex flex-col space-y-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="input text-sm"
                            />
                            <button className="btn-primary text-sm">Subscribe</button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-primary/20">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-text/50 text-sm">
                            © 2026 BanglaBet88. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <Link href="#" className="text-text/50 hover:text-primary transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="#" className="text-text/50 hover:text-primary transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="text-text/50 hover:text-primary transition-colors">
                                Responsible Gaming
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
