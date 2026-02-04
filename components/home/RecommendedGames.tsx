import Link from "next/link";
import Image from "next/image";

const slotGames = [
    {
        title: "Super Ace",
        description: "Still not sure where to pour out your luck? Well, be Super Ace’s guest and try out its strategic and thrilling game experiences. With a blend of traditional card game elements and modern twists, be enthralled with its vibrant graphics and smooth features and animations, on top of its challenging gameplay!",
        image: "/images/slot-super-ace.png",
        tags: ["Slots", "Hot"],
    },
    {
        title: "Gates of Olympus",
        description: "After signing up with BigWin959 Online Casino by following its no-sweat live casino login processes, never miss out on its customer-favorite games such as the Gates of Olympus, where visuals and ecstatic gameplay are top-tier and captivate the hearts of everyone. Gates of Olympus features generous multipliers as well, so be ready to experience epic winnings with this game!",
        image: "/images/banner-special-slots.png",
        tags: ["Min 30 BDT", "Multiplier"],
    },
    {
        title: "Fortune Gems",
        description: "Trust that your luck extends even to other well-known games like Fortune Gems since BigWin959 ensures to help you win big and all! Well, even with Jeetwin Online Casino, Fortune Gems always proves to be one of the favorites of customers because of how immersive its features are. In no time, expect to receive big rewards on your doorstep.",
        image: "/images/slot-fortune-gems.png",
        tags: ["Gems", "Jackpot"],
    },
];

const liveGames = [
    {
        title: "Dragon Sexy Hall",
        description: "If you fancy live casinos, well BigWin959 Online Casino recommends its Dragon Sexy Hall, which stuns you amazingly with its unparalleled visuals and gaming experience. Like what you find with other platforms like Baji Live Net Casino, BigWin’s live dealers are as attractive as the world-class top beauties!",
        image: "/images/live-dragon.png",
    },
    {
        title: "Baccarat Classic Sexy Hall",
        description: "Your quick live casino login is sure to give you the best of live casinos if paired with BigWin959’s Baccarat Classic Sexy Hall. Prepare for exciting potential rewards with its high-stakes betting, especially perfect for experienced players.",
        image: "/images/live-baccarat.png",
    },
    {
        title: "Roulette Sexy Hall",
        description: "Banglabet’s engaging and charismatic live dealers play an important role in why Roulette Sexy Hall is one of the top picks. Indulge in every suspenseful spin while enjoying the glamorous and authentic environment that Roulette Sexy Hall provides.",
        image: "/images/live-roulette.png",
    },
];

export default function RecommendedGames() {
    return (
        <section className="py-20 bg-background">
            <div className="container-custom">
                {/* Slots */}
                <div className="mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-white uppercase font-heading tracking-tight">Recommended <span className="text-primary">Slot Games</span></h2>
                    <p className="text-center text-gray-500 mb-12 font-medium uppercase tracking-widest text-sm">Super Ace • Gates of Olympus • Fortune Gems</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {slotGames.map((game, i) => (
                            <div key={i} className="bg-[#121212] p-6 rounded-xl shadow-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 group">
                                <div className="aspect-[4/3] w-full relative mb-6 rounded-lg overflow-hidden border border-white/10 group-hover:border-primary/20 transition-colors bg-[#050505]">
                                    <Image src={game.image} alt={game.title} fill className="object-contain p-2 transition-transform group-hover:scale-105 duration-700" />
                                    <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-tighter shadow-2xl">{game.tags[0]}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white uppercase font-heading tracking-wide group-hover:text-primary transition-colors">{game.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-3">{game.description}</p>
                                <Link href="/slots" className="inline-flex items-center text-primary font-bold text-sm uppercase tracking-widest hover:text-red-500 transition-colors">Play Now <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span></Link>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link href="/slots" className="inline-flex items-center px-12 py-4 bg-primary !text-white font-bold rounded-sm hover:bg-red-700 transition-all uppercase tracking-widest text-sm shadow-xl shadow-red-600/20">View All Slots</Link>
                    </div>
                </div>

                {/* Live Casino */}
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-white uppercase font-heading tracking-tight">Elite <span className="text-primary">Live Casino</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {liveGames.map((game, i) => (
                            <div key={i} className="bg-[#121212] p-6 rounded-xl shadow-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 group">
                                <div className="aspect-[4/3] w-full relative mb-6 rounded-lg overflow-hidden border border-white/10 group-hover:border-primary/20 transition-colors bg-[#050505]">
                                    <Image src={game.image} alt={game.title} fill className="object-contain p-2 transition-transform group-hover:scale-105 duration-700" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white uppercase font-heading tracking-wide group-hover:text-primary transition-colors">{game.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-3">{game.description}</p>
                                <Link href="/live-casino" className="inline-flex items-center justify-center w-full py-3 border border-primary/50 text-primary font-bold rounded-sm hover:bg-primary hover:text-white transition-all uppercase tracking-widest text-xs">Bet Live</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
