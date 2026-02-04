
import { HelpCircle, ShieldCheck, Scale, MessageCircle } from "lucide-react";

export default function InfoSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container-custom space-y-16">

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex gap-6 p-8 bg-[#111] border border-white/5 rounded-sm group hover:border-primary/40 transition-all">
                        <ShieldCheck className="w-12 h-12 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                        <div>
                            <h3 className="font-bold text-xl mb-3 text-white uppercase font-heading tracking-wider">License & Security</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">Banglabet88 operates under a strict Curacao regulatory framework (8048/JAZ2020-060). We utilize military-grade encryption to ensure your data and capital are impenetrable.</p>
                        </div>
                    </div>
                    <div className="flex gap-6 p-8 bg-[#111] border border-white/5 rounded-sm group hover:border-primary/40 transition-all">
                        <Scale className="w-12 h-12 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                        <div>
                            <h3 className="font-bold text-xl mb-3 text-white uppercase font-heading tracking-wider">Verified Integrity</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">Absolute transparency. All games are powered by world-class certified RNG engines, with frequent independent audits ensuring 100% fair outcomes.</p>
                        </div>
                    </div>
                </div>

                {/* Customer Support & FAQ */}
                <div className="bg-gradient-to-br from-[#151515] to-black p-10 md:p-14 rounded-sm border border-white/5 flex flex-col lg:flex-row items-start gap-16 shadow-2xl">
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-3xl font-bold mb-6 text-white uppercase font-heading tracking-tighter flex items-center gap-4">
                            <MessageCircle className="w-8 h-8 text-primary" /> 24/7 Elite <span className="text-primary">Support</span>
                        </h3>
                        <p className="text-gray-400 mb-10 text-lg leading-relaxed">Our tactical support team is on standby 24/7. Trained for the local market and ready to provide immediate resolution to any inquiry.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-4 border border-white/5 bg-black/40 rounded-sm">
                                <span className="text-primary font-bold uppercase tracking-widest text-[10px] block mb-1">Direct Line</span>
                                <span className="text-white font-semibold">Live Chat System</span>
                            </div>
                            <div className="p-4 border border-white/5 bg-black/40 rounded-sm">
                                <span className="text-primary font-bold uppercase tracking-widest text-[10px] block mb-1">Email Command</span>
                                <span className="text-white font-semibold">support@banglabet88.net</span>
                            </div>
                            <div className="p-4 border border-white/5 bg-black/40 rounded-sm">
                                <span className="text-primary font-bold uppercase tracking-widest text-[10px] block mb-1">Social Intel</span>
                                <span className="text-white font-semibold">Telegram & WhatsApp</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h4 className="font-bold text-2xl mb-8 text-white uppercase font-heading tracking-widest border-l-4 border-primary pl-4">Intelligence FAQ</h4>
                        <div className="space-y-4">
                            {[
                                { q: "Minimum entry capital?", a: "300 BDT through bKash, Nagad, and Rocket." },
                                { q: "Platform Security Protocols?", a: "Full Curacao licensing and end-to-end SSL encryption." },
                                { q: "Localized Interface support?", a: "Full support for Bengali, English, and Hindi." }
                            ].map((item, i) => (
                                <details key={i} className="group overflow-hidden border border-white/5 bg-black/20 rounded-sm">
                                    <summary className="cursor-pointer font-bold uppercase tracking-widest text-xs list-none flex justify-between items-center p-5 hover:bg-white/5 transition-colors text-gray-300">
                                        {item.q}
                                        <span className="text-primary transition group-open:rotate-180">▼</span>
                                    </summary>
                                    <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                        {item.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
