
const sports = [
    {
        name: "Cricket",
        desc: "Without a doubt, cricket is one of the main choices on BigWin959. Daily, about 20-30 matches are offered. Top cricket for Bangladeshi players includes BPL, IPL, ICC World Cup, and more."
    },
    {
        name: "Kabaddi",
        desc: "BigWin959 is giving full coverage to kabaddi as it is in high demand. Players from Bangladesh can place bets on PKL, Kabaddi World Cup, and Asian Games."
    },
    {
        name: "Tennis",
        desc: "Tennis is greatly covered in BigWin959, as about 150 matches are offered daily. Grand Slams like Wimbledon, US Open, and more are available for betting."
    },
    {
        name: "Basketball",
        desc: "Basketball betting is in high demand due to hundreds of sports markets. Top leagues like NBA, EuroLeague, and FIBA World Cup are available."
    },
    {
        name: "Ice Hockey",
        desc: "Witness quick changes and dynamic odds with detailed coverage of NHL, KHL, and more than 40 tournaments held around the world."
    },
    {
        name: "Volleyball",
        desc: "Bet on indoor and beach volleyball matches like FIVB World Championship and Nations League with accurate stats and attractive odds."
    },
    {
        name: "eSports",
        desc: "eSports is becoming popular in Bangladesh. Bet on Dota 2, League of Legends, CS2, and more with live streaming and competitive odds."
    }
];

export default function SportsDetails() {
    return (
        <section className="py-20 bg-background">
            <div className="container-custom">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white uppercase font-heading tracking-tight text-center">Elite <span className="text-primary">Sports Markets</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sports.map((s, i) => (
                        <div key={i} className="bg-[#121212] p-8 rounded-sm border border-white/5 hover:border-primary/40 transition-all duration-300 group">
                            <h3 className="text-xl font-bold mb-4 text-primary uppercase font-heading tracking-widest group-hover:text-white transition-colors">{s.name} Betting</h3>
                            <p className="text-sm text-gray-400 leading-relaxed font-light">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
