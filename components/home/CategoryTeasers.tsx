import Image from "next/image";
import Link from "next/link";

const categories = [
    {
        title: "Most User-Recommended Platform",
        description: "Player recommendations reflect constant uptime, generous rollover policies, and a clear-cut registration that promises steady growth. Independent review sites list accessibility, game depth, and responsive payouts among the most singly reputable reasons by journeyman players. Head-to-head comparisons often mention competitors such as Baji live net casino vs. Khelaghor login as a proof of market proposition and Khelaghor merits. Word of mouth and measured reviews form a strong credibility base that can last for long. Players also highlight the platform's intuitive interface and consistent performance; noting how easy navigation and smooth gameplay enhance every session.",
        image: "/images/teaser-recommended.png",
        cta: "Explore Now",
        link: "/register",
    },
    {
        title: "High-Stake Jackpots and Lucrative Bonuses",
        description: "Low-key pools mass stakes from a dispersed base of players to create big jackpots worthy of making headlines and generating active conversations. Timed drops and targeted boosts reward engagement during key times and transform a mundane session into something worthy of headlines. Bonuses are clearly defined with transparent terms, visible wager contributions, and straightforward clearing rules so that they respect both casual play and focused pursuit. Solid long-term payout history is essential for the continued attractiveness. Regularly updated prize pools and surprise multipliers elevate the thrill; rewarding strategic timing and keeping every session unpredictable and engaging.",
        image: "/images/banner-special-slots.png", // Using the special slots image as second generation failed
        cta: "Claim Bonus",
        link: "/promotions",
    }
];

export default function CategoryTeasers() {
    return (
        <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
            {/* Ambient Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-80 h-80 bg-red-600 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/30 rounded-full blur-[120px]" />
            </div>

            <div className="container-custom space-y-24 relative z-10">
                {categories.map((cat, index) => (
                    <div key={index} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                        {/* Image Block with Red Border */}
                        <div className="w-full md:w-1/2 relative group">
                            <div className="relative h-64 md:h-[350px] w-full border-2 border-red-600/50 rounded-lg overflow-hidden transition-all duration-500 group-hover:border-red-500 shadow-[0_0_20px_rgba(220,38,38,0.2)]">
                                <Image 
                                    src={cat.image} 
                                    alt={cat.title} 
                                    fill 
                                    className="object-contain p-4 transition-transform duration-700 group-hover:scale-105" 
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>
                            {/* Decorative element like the V-light in screenshot */}
                            {index === 0 && (
                                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-red-600 opacity-50" />
                            )}
                        </div>

                        {/* Text Block */}
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight leading-tight uppercase font-heading">
                                {cat.title.split(' ').map((word, i) => (
                                    <span key={i} className={i % 2 === 1 ? "text-primary" : ""}>{word} </span>
                                ))}
                            </h2>
                            <p className="text-gray-400 mb-8 text-base md:text-lg leading-relaxed font-light">
                                {cat.description}
                            </p>
                            <Link 
                                href={cat.link} 
                                className="inline-flex items-center px-10 py-4 bg-primary !text-white font-bold rounded-sm hover:bg-red-700 transition-all uppercase tracking-widest text-sm shadow-xl shadow-red-600/40"
                            >
                                {cat.cta}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
