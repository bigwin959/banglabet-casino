import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-gray-200 mt-12 pt-12 pb-6">
            <div className="container-custom max-w-[1080px]">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Column */}
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-bold mb-4">About Banglabet88</h3>
                        <p className="text-sm text-text mb-4">
                            Win real money with Banglabet! Enjoy thrilling live casino games, huge jackpots, and secure payments.
                        </p>
                        <div className="text-sm text-text">
                            <p className="mb-2">Address: 1000 Topkhana Road, Dhaka 1000, Bangladesh</p>
                            <p className="mb-2">Email: support@banglabet88.net</p>
                            <p>Phone: +8801717001178</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/live-casino" className="text-text hover:text-primary">Live Casino</Link></li>
                            <li><Link href="/sportsbook" className="text-text hover:text-primary">Sportsbook</Link></li>
                            <li><Link href="/promotions" className="text-text hover:text-primary">Promotions</Link></li>
                            <li><Link href="/blog" className="text-text hover:text-primary">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Policy Links */}
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-bold mb-4">Information</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="https://bbtlink.co/affhome" target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary">Affiliates Program</a></li>
                            <li><a href="https://bbtlink.co/responsible-gaming" target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary">Responsible Gaming</a></li>
                            <li><a href="https://bbtlink.co/security" target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary">Security</a></li>
                            <li><a href="https://bbtlink.co/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Payment / Providers Placeholder */}
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-bold mb-4">Trusted Partners</h3>
                        <a href="https://newcity.vip/" target="_blank" rel="noopener noreferrer" className="text-primary font-bold">New City VIP</a>
                    </div>
                </div>

                <div className="border-t border-gray-100 mt-8 pt-8 text-center text-sm text-gray-400">
                    <p>&copy; {currentYear} Banglabet88. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
