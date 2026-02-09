import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 text-gray-400 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* About Column */}
                    <div className="space-y-8">
                        <div>
                            <Link href="/">
                                <img 
                                    src="/logo.png" 
                                    alt="BigWin959" 
                                    className="h-10 md:h-12 w-auto object-contain hover:scale-105 transition-transform"
                                />
                            </Link>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-500 font-medium">
                            Win real money with BigWin959! We provide the most secure, fair, and thrilling online gaming environment for players in Bangladesh. Enjoy hundreds of slots and elite live tables.
                        </p>
                        <div className="space-y-4 text-sm font-bold uppercase tracking-widest text-gray-300">
                            <p className="flex items-center gap-4 hover:text-primary transition-colors cursor-default">
                                <MapPin size={18} className="text-primary" /> Dhaka, Bangladesh
                            </p>
                            <p className="flex items-center gap-4 hover:text-primary transition-colors transition-all active:scale-95">
                                <Mail size={18} className="text-primary" /> support@bigwin959.com
                            </p>
                            <p className="flex items-center gap-4 hover:text-primary transition-colors cursor-default">
                                <Phone size={18} className="text-primary" /> +8801717001178
                            </p>
                        </div>
                    </div>

                    {/* Quick Access */}
                    <div className="space-y-8">
                        <h3 className="text-lg font-black text-white uppercase font-heading tracking-[0.2em] relative inline-block">
                            Quick Access
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary" />
                        </h3>
                        <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
                            <li><Link href="/live-casino" className="hover:text-primary hover:translate-x-2 flex items-center transition-all">Live Casino</Link></li>
                            <li><Link href="/sportsbook" className="hover:text-primary hover:translate-x-2 flex items-center transition-all">Sportsbook</Link></li>
                            <li><Link href="/blog" className="hover:text-primary hover:translate-x-2 flex items-center transition-all">Latest Blog</Link></li>
                            <li><Link href="/promotions" className="hover:text-primary hover:translate-x-2 flex items-center transition-all">Bonuses</Link></li>
                            <li><Link href="/about-us" className="hover:text-primary hover:translate-x-2 flex items-center transition-all">About Our Platform</Link></li>
                        </ul>
                    </div>

                    {/* Legal & Security */}
                    <div className="space-y-8">
                        <h3 className="text-lg font-black text-white uppercase font-heading tracking-[0.2em] relative inline-block">
                            Security Hub
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary" />
                        </h3>
                        <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
                            <li><a href="#" className="hover:text-primary hover:translate-x-2 flex items-center transition-all">Responsible Gaming</a></li>
                            <li><a href="#" className="hover:text-primary hover:translate-x-2 flex items-center transition-all">Fair Play Policy</a></li>
                            <li><a href="#" className="hover:text-primary hover:translate-x-2 flex items-center transition-all">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-primary hover:translate-x-2 flex items-center transition-all">Privacy Guard</a></li>
                            <li><a href="#" className="hover:text-primary hover:translate-x-2 flex items-center transition-all">KYC Verification</a></li>
                        </ul>
                    </div>

                    {/* Partners & Trust */}
                    <div className="space-y-8">
                        <h3 className="text-lg font-black text-white uppercase font-heading tracking-[0.2em] relative inline-block">
                            Elite Partners
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary" />
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="h-16 bg-white/5 rounded-xl flex items-center justify-center p-4 hover:bg-white/10 transition-colors border border-white/5">
                                <span className="text-[10px] font-black italic tracking-tighter">PRAGMATIC</span>
                            </div>
                            <div className="h-16 bg-white/5 rounded-xl flex items-center justify-center p-4 hover:bg-white/10 transition-colors border border-white/5">
                                <span className="text-[10px] font-black italic tracking-tighter">EVOLUTION</span>
                            </div>
                            <div className="h-16 bg-white/5 rounded-xl flex items-center justify-center p-4 hover:bg-white/10 transition-colors border border-white/5">
                                <span className="text-[10px] font-black italic tracking-tighter">JILI SLOT</span>
                            </div>
                            <div className="h-16 bg-white/5 rounded-xl flex items-center justify-center p-4 hover:bg-white/10 transition-colors border border-white/5">
                                <span className="text-[10px] font-black italic tracking-tighter">PG SOFT</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">
                        &copy; {currentYear} BigWin959. Bangladeshi Premium Gaming License.
                    </p>
                    <div className="flex items-center space-x-6">
                         <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer">
                            <span className="text-xs font-bold">18+</span>
                         </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

