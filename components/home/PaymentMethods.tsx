"use client";

const methods = [
    {
        name: "bKash",
        color: "#E2136E",
        icon: (
            <svg viewBox="0 0 60 60" fill="none" className="w-8 h-8">
                <circle cx="30" cy="30" r="30" fill="#E2136E" />
                <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontFamily="Arial">b</text>
            </svg>
        ),
    },
    {
        name: "Nagad",
        color: "#F6821F",
        icon: (
            <svg viewBox="0 0 60 60" fill="none" className="w-8 h-8">
                <circle cx="30" cy="30" r="30" fill="#F6821F" />
                <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="Arial">N</text>
            </svg>
        ),
    },
    {
        name: "Rocket",
        color: "#8B189A",
        icon: (
            <svg viewBox="0 0 60 60" fill="none" className="w-8 h-8">
                <circle cx="30" cy="30" r="30" fill="#8B189A" />
                <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontFamily="Arial">R</text>
            </svg>
        ),
    },
    {
        name: "USDT",
        color: "#26A17B",
        icon: (
            <svg viewBox="0 0 60 60" fill="none" className="w-8 h-8">
                <circle cx="30" cy="30" r="30" fill="#26A17B" />
                <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="Arial">₮</text>
            </svg>
        ),
    },
    {
        name: "Bank Transfer",
        color: "#1A56DB",
        icon: (
            <svg viewBox="0 0 60 60" fill="none" className="w-8 h-8">
                <circle cx="30" cy="30" r="30" fill="#1A56DB" />
                <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="Arial">BANK</text>
            </svg>
        ),
    },
    {
        name: "Upay",
        color: "#EF4444",
        icon: (
            <svg viewBox="0 0 60 60" fill="none" className="w-8 h-8">
                <circle cx="30" cy="30" r="30" fill="#EF4444" />
                <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="Arial">U</text>
            </svg>
        ),
    },
];

export default function PaymentMethods() {
    return (
        <section className="py-16 px-4 bg-black/30">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-center gap-4 mb-10">
                    <span className="h-px w-12 bg-primary/40" />
                    <h2 className="text-center text-xs font-black uppercase tracking-[0.3em] text-gray-400">
                        Secure Payment Methods
                    </h2>
                    <span className="h-px w-12 bg-primary/40" />
                </div>

                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                    {methods.map((method) => (
                        <div
                            key={method.name}
                            className="group flex flex-col items-center gap-3 bg-white/5 border border-white/8 hover:border-primary/30 rounded-2xl px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,228,145,0.1)] cursor-default min-w-[90px]"
                        >
                            <div className="rounded-full overflow-hidden shadow-lg group-hover:shadow-[0_0_12px_rgba(255,228,145,0.2)] transition-all">
                                {method.icon}
                            </div>
                            <span className="text-[11px] font-bold text-white/60 group-hover:text-white transition-colors uppercase tracking-wider whitespace-nowrap">
                                {method.name}
                            </span>
                        </div>
                    ))}
                </div>

                <p className="text-center text-[11px] text-gray-600 mt-8 font-bold uppercase tracking-widest">
                    🔒 All transactions are SSL encrypted & secured
                </p>
            </div>
        </section>
    );
}
