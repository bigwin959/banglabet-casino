import Link from "next/link";
import Image from "next/image";

const slotGames = [
    {
        title: "Super Ace",
        description: "Still not sure where to pour out your luck? Well, be Super Ace’s guest and try out its strategic and thrilling game experiences. With a blend of traditional card game elements and modern twists, be enthralled with its vibrant graphics and smooth features and animations, on top of its challenging gameplay!",
        image: "/images/super-ace-new.jpg",
        tags: ["Slots", "Hot"],
    },
    {
        title: "Gates of Olympus",
        description: "After signing up with BigWin959 Online Casino by following its no-sweat live casino login processes, never miss out on its customer-favorite games such as the Gates of Olympus, where visuals and ecstatic gameplay are top-tier and captivate the hearts of everyone. Gates of Olympus features generous multipliers as well, so be ready to experience epic winnings with this game!",
        image: "/images/gates-olympus-new.jpg",
        tags: ["Min 30 BDT", "Multiplier"],
    },
    {
        title: "Fortune Gems",
        description: "Trust that your luck extends even to other well-known games like Fortune Gems since BigWin959 ensures to help you win big and all! Well, even with Jeetwin Online Casino, Fortune Gems always proves to be one of the favorites of customers because of how immersive its features are. In no time, expect to receive big rewards on your doorstep.",
        image: "/images/fortune-gems-new.jpg",
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
        description: "BigWin959’s engaging and charismatic live dealers play an important role in why Roulette Sexy Hall is one of the top picks. Indulge in every suspenseful spin while enjoying the glamorous and authentic environment that Roulette Sexy Hall provides.",
        image: "/images/live-roulette.png",
    },
];

export default function RecommendedGames() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
            
            <div className="container-custom relative z-10">
                {/* Live Casino Section */}
                <div>
                    <div className="text-center mb-20">
                        <div className="flex items-center justify-center space-x-3 mb-4">
                            <span className="w-12 h-px bg-primary" />
                            <span className="text-primary font-black uppercase tracking-[0.5em] text-xs">Diamond Lobby</span>
                            <span className="w-12 h-px bg-primary" />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold text-white uppercase font-heading tracking-tighter leading-none mb-8">
                            Elite <span className="text-primary italic">Live Dealers</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg italic leading-relaxed">
                            Experience the pulse-pounding thrill of a real casino floor from the luxury of your home with our world-class, professional dealers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {liveGames.map((game, i) => (
                            <div key={i} className="group">
                                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover:-translate-y-3 group-hover:shadow-[0_45px_70px_-20px_rgba(220,38,38,0.2)]">
                                    <Image 
                                        src={game.image} 
                                        alt={game.title} 
                                        fill 
                                        className="object-cover transition-transform duration-[2000ms] group-hover:scale-110" 
                                    />
                                    {/* Vignette Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                                    
                                    <div className="absolute bottom-6 left-8">
                                        <div className="flex items-center space-x-3 text-primary">
                                            <div className="flex space-x-1">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/90">Studio Active</span>
                                        </div>
                                    </div>
                                    
                                    {/* Action Button on Hover */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/40 backdrop-blur-[2px]">
                                        <Link href="/live-casino" className="btn-primary !scale-90 group-hover:!scale-100 transition-transform duration-500">
                                            Take A Seat
                                        </Link>
                                    </div>
                                </div>
                                <div className="px-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-2xl font-bold text-white uppercase font-heading tracking-tight group-hover:text-primary transition-colors">
                                            {game.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-2">
                                        {game.description}
                                    </p>
                                    <Link href="/live-casino" className="inline-flex items-center text-white/60 font-bold text-xs uppercase tracking-[0.3em] group/link hover:text-primary transition-colors">
                                        Join Table <span className="ml-4 text-primary group-hover/link:translate-x-3 transition-transform">→</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

