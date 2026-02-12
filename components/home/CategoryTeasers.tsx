import Image from "next/image";
import Link from "next/link";
import { FeaturedContent } from "@/lib/cms";

interface CategoryTeasersProps {
    items?: FeaturedContent[];
}

const defaultCategories: FeaturedContent[] = [
    {
        id: "1",
        title: "Most User-Recommended Platform",
        description: "Player recommendations reflect constant uptime, generous rollover policies, and a clear-cut registration that promises steady growth. Independent review sites list accessibility, game depth, and responsive payouts among the most singly reputable reasons by journeyman players.",
        image: "/images/teaser-recommended.png",
        cta: "Explore Now",
        link: "/register",
    },
    {
        id: "2",
        title: "High-Stake Jackpots and Lucrative Bonuses",
        description: "Low-key pools mass stakes from a dispersed base of players to create big jackpots worthy of making headlines and generating active conversations. Timed drops and targeted boosts reward engagement during key times.",
        image: "/images/banner-special-slots.png",
        cta: "Claim Bonus",
        link: "/promotions",
    }
];

export default function CategoryTeasers({ items }: CategoryTeasersProps) {
    const displayItems = items && items.length > 0 ? items : defaultCategories;

    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Ambient Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
            </div>

            <div className="container-custom space-y-32 relative z-10">
                {displayItems.map((cat, index) => (
                    <div key={cat.id || index} className={`flex flex-col md:flex-row items-center gap-16 md:gap-24 
                        ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>

                        {/* Image Block with Premium Frame */}
                        <div className="w-full md:w-1/2 relative group">
                            <div className="relative aspect-[16/10] w-full bg-surface rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 
                                group-hover:shadow-[0_0_50px_rgba(220,38,38,0.2)] group-hover:scale-[1.02]">

                                {/* Inner Border Glow */}
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                                <Image
                                    src={cat.image}
                                    alt={cat.title}
                                    fill
                                    className="object-contain p-8 transition-all duration-1000 group-hover:scale-110"
                                />

                                {/* Glass Vignette */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/5" />
                            </div>

                            {/* Decorative Accent */}
                            <div className={`absolute -bottom-6 ${index % 2 === 0 ? "-left-6" : "-right-6"} hidden lg:block`}>
                                <div className="w-32 h-32 border-2 border-primary/20 rounded-full flex items-center justify-center opacity-50">
                                    <div className="w-16 h-16 border-2 border-primary/40 rounded-full animate-ping" />
                                </div>
                            </div>
                        </div>

                        {/* Text Block */}
                        <div className="w-full md:w-1/2">
                            <div className="flex items-center space-x-4 mb-6">
                                <span className="h-0.5 w-12 bg-primary" />
                                <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Featured Content</span>
                            </div>

                            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tighter leading-none uppercase font-heading">
                                {cat.title.split(' ').map((word, i) => (
                                    <span key={i} className={i % 2 === 1 ? "text-primary italic" : "relative z-10"}>
                                        {word}{' '}
                                    </span>
                                ))}
                            </h2>

                            <p className="text-gray-400 mb-10 text-lg leading-relaxed font-medium">
                                {cat.description}
                            </p>

                            <Link href={cat.link} className="btn-primary flex items-center justify-center md:inline-flex group">
                                {cat.cta}
                                <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

