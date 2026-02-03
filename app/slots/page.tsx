import PromotionCard from "@/components/PromotionCard";
import AgentCard from "@/components/AgentCard";
import { agents } from "@/lib/data";

export default function Slots() {
    const discountCards = [
        {
            image: "/images/hero-slots.png",
            title: "Slots Welcome Bonus",
            discount: "150%",
            description: "Spin and win with a massive 150% welcome bonus on all slot games.",
            ctaText: "Play Now",
        },
        {
            image: "/images/hero-promo.png",
            title: "Daily Free Spins",
            discount: "50 Spins",
            description: "Get 50 free spins every day when you deposit 500 BDT or more.",
            ctaText: "Claim Now",
        },
    ];

    return (
        <div className="min-h-screen pb-20">
            {/* Hero Section */}
            <section className="relative py-20 px-4 bg-gradient-to-b from-primary/10 to-background">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-heading mb-6 neon-glow">
                        Online Slots Bangladesh
                    </h1>
                    <p className="text-xl text-text/80 max-w-2xl mx-auto">
                        Discover thousands of exciting slot games with huge jackpots and high RTP.
                    </p>
                </div>
            </section>

            {/* Discount Promotions */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-heading text-center mb-12 text-primary">
                        Exclusive Offers
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {discountCards.map((card, index) => (
                            <PromotionCard key={index} {...card} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Gaming Providers */}
            <section className="py-16 px-4 bg-background/50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-heading text-center mb-12 text-primary neon-glow">
                        Our Premium Partners
                    </h2>
                    <p className="text-center text-text/70 mb-12 max-w-2xl mx-auto">
                        We partner with the world's leading game providers to ensure a fair,
                        high-quality, and immersive gaming experience.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {agents.map((agent) => (
                            <AgentCard key={agent.id} {...agent} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
