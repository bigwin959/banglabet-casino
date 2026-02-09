import Link from "next/link";
import { CheckCircle } from "lucide-react";

const benefits = [
    "Exclusive promotional offers",
    "Birthday Treat",
    "VIP loyalty bonus",
    "Vipcashback rebate options",
    "Priority customer service",
    "Personal concierge",
    "Loyalty points redemption",
];

export default function VIPSection() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -mr-64 -mt-64" />

            <div className="container-custom text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white uppercase font-heading tracking-tight">
                    Step into <span className="text-primary">Luxury</span>, Power Up Your Play
                </h2>
                <p className="text-gray-400 mb-16 max-w-3xl mx-auto text-lg leading-relaxed">
                    Exclusivity meets intensity. The BigWin959 VIP Club is engineered for those who demand more from their gaming experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-4 bg-[#111] p-5 rounded-sm border border-white/5 hover:border-primary/40 transition-all duration-300 group">
                            <CheckCircle className="text-primary w-6 h-6 flex-shrink-0 group-hover:scale-125 transition-transform" />
                            <span className="font-semibold text-left text-gray-200 uppercase tracking-wider text-xs">{benefit}</span>
                        </div>
                    ))}
                </div>

                <Link href="/vip" className="inline-flex items-center px-12 py-5 bg-primary !text-white font-bold rounded-sm hover:bg-red-700 transition-all uppercase tracking-widest text-base shadow-2xl shadow-red-600/30">
                    Join VIP Club Now
                </Link>
            </div>
        </section>
    );
}
