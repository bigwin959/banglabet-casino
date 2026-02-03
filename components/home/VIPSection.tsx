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
        <section className="py-16 bg-gradient-to-br from-gray-900 to-black text-white">
            <div className="container-custom text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                    Step into Luxury, Power Up Your Play, and Join Our VIP Club
                </h2>
                <p className="text-gray-300 mb-10 max-w-3xl mx-auto">
                    Feeling special is what BigWin959 VIP Club provides to its players aiming for luxury gaming. There’s a wide range of benefits to completing a live casino login and signing up for this program.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
                            <CheckCircle className="text-yellow-400 w-6 h-6 flex-shrink-0" />
                            <span className="font-medium text-left">{benefit}</span>
                        </div>
                    ))}
                </div>

                <Link href="/vip" className="btn-primary bg-yellow-500 text-black hover:bg-yellow-400 border-none font-bold text-lg px-10">
                    Join VIP Club Now
                </Link>
            </div>
        </section>
    );
}
