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
        image: "/images/slot-gates_olympus_v2.png",
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
        <section className="py-16 bg-gray-50">
            <div className="container-custom">
                {/* Slots */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-2 text-center text-heading">Recommended Slot Games</h2>
                    <p className="text-center text-primary mb-8 font-medium">Super Ace, Gates of Olympus and Fortune Gems</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {slotGames.map((game, i) => (
                            <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="h-48 w-full relative mb-4 rounded overflow-hidden shadow-inner">
                                    <Image src={game.image} alt={game.title} fill className="object-cover transition-transform hover:scale-110 duration-500" />
                                    <span className="absolute bottom-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded shadow">{game.tags[0]}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-heading">{game.title}</h3>
                                <p className="text-sm text-text leading-relaxed mb-4">{game.description}</p>
                                <Link href="/slots" className="text-primary font-bold text-sm hover:underline">Play Now →</Link>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/slots" className="btn-primary">Play Now</Link>
                    </div>
                </div>

                {/* Live Casino */}
                <div>
                    <h2 className="text-2xl font-bold mb-8 text-center text-heading">Recommended Live Casino</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {liveGames.map((game, i) => (
                            <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="h-48 w-full relative mb-4 rounded overflow-hidden shadow-inner">
                                    <Image src={game.image} alt={game.title} fill className="object-cover transition-transform hover:scale-110 duration-500" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-heading">{game.title}</h3>
                                <p className="text-sm text-text leading-relaxed mb-4">{game.description}</p>
                                <Link href="/live-casino" className="btn-outline text-xs py-2 px-3">Bet Live</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
