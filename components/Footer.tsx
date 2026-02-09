import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-white/10 mt-12 pt-16 pb-8 text-gray-400">
            <div className="container-custom max-w-[1080px]">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* About Column */}
                    <div className="md:col-span-1">
                        <h3 className="text-xl font-bold mb-6 text-white uppercase font-heading tracking-wider">About BigWin959</h3>
                        <p className="text-sm leading-relaxed mb-6">
                            Win real money with BigWin959! Enjoy thrilling live casino games, huge jackpots, and secure payments.
                        </p>
                        <div className="text-sm space-y-3">
                            <p className="flex items-start gap-2"><MapPin size={18} className="text-primary shrink-0" /> Dhaka, Bangladesh</p>
                            <p className="flex items-center gap-2"><Mail size={18} className="text-primary shrink-0" /> support@bigwin959.com</p>
                            <p className="flex items-center gap-2"><Phone size={18} className="text-primary shrink-0" /> +8801717001178</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-1">
                        <h3 className="text-xl font-bold mb-6 text-white uppercase font-heading tracking-wider">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/live-casino" className="hover:text-primary transition-colors">Live Casino</Link></li>
                            <li><Link href="/sportsbook" className="hover:text-primary transition-colors">Sportsbook</Link></li>
                            <li><Link href="/promotions" className="hover:text-primary transition-colors">Promotions</Link></li>
                            <li><Link href="/promotions" className="hover:text-primary transition-colors">Promotions</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="/about-us" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/contact-us" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Policy Links */}
                    <div className="md:col-span-1">
                        <h3 className="text-xl font-bold mb-6 text-white uppercase font-heading tracking-wider">Information</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="https://bbtlink.co/affhome" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Affiliates Program</a></li>
                            <li><a href="https://bbtlink.co/responsible-gaming" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Responsible Gaming</a></li>
                            <li><a href="https://bbtlink.co/security" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Security</a></li>
                            <li><a href="https://bbtlink.co/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Payment / Providers Placeholder */}
                    <div className="md:col-span-1">
                        <h3 className="text-xl font-bold mb-6 text-white uppercase font-heading tracking-wider">Trusted Partners</h3>
                        <a href="https://newcity.vip/" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">New City VIP</a>
                    </div>
                </div>

                <div className="border-t border-white/5 mt-12 pt-8 text-center text-xs tracking-widest uppercase">
                    <p>&copy; {currentYear} BigWin959. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
