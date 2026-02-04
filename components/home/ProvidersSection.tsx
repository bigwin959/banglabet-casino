
const providers = [
    "Jili Games", "PG Soft", "Pragmatic Play", "Evolution Gaming", "Ezugi", "Playtech", "NetEnt", "Spadegaming"
];

export default function ProvidersSection() {
    return (
        <section className="py-20 bg-background border-b border-white/5">
            <div className="container-custom text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white uppercase font-heading tracking-tight">Premier <span className="text-primary">Game Providers</span></h2>
                <p className="text-gray-400 mb-12 max-w-4xl mx-auto text-lg leading-relaxed">
                    Excellence is non-negotiable. Banglabet88 partners with the world's most elite developers to bring you cutting-edge gameplay and unmatched fairness.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                    {providers.map((provider, i) => (
                        <div key={i} className="bg-[#151515] px-8 py-4 rounded-sm border border-white/5 text-white/50 text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:text-primary hover:border-primary/50 cursor-default select-none">
                            {provider}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
