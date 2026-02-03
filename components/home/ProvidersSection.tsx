
const providers = [
    "Jili Games", "PG Soft", "Pragmatic Play", "Evolution Gaming", "Ezugi", "Playtech", "NetEnt", "Spadegaming"
];

export default function ProvidersSection() {
    return (
        <section className="py-12 bg-white border-b border-gray-100">
            <div className="container-custom text-center">
                <h2 className="text-2xl font-bold mb-6 text-heading">BigWin959 Premier Online Casino Game Provider</h2>
                <p className="text-text mb-8 max-w-4xl mx-auto">
                    On top of everything that matters, BigWin959 makes sure that its customers’ gameplay experiences are premier and exceptional, hence collaborating with today’s leading game providers. Top-quality games are always at your fingertips, from slots to live dealer options and table games.
                </p>

                <div className="flex flex-wrap justify-center gap-4 opacity-70">
                    {providers.map((provider, i) => (
                        <div key={i} className="bg-gray-100 px-6 py-3 rounded-full font-bold text-gray-500 select-none">
                            {provider}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
