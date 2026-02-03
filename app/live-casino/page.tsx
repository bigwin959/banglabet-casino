import PromotionCard from "@/components/PromotionCard";
import AgentCard from "@/components/AgentCard";
import LiveCasinoDetails from "@/components/live-casino/LiveCasinoDetails";
import { agents } from "@/lib/data";

export default function LiveCasino() {
    const discountCards = [
        {
            image: "/images/live-bonus.jpg",
            title: "Live Casino Welcome",
            discount: "100%",
            description: "Experience the thrill of real casino games with a 100% welcome bonus.",
            ctaText: "Sign Up",
        },
        {
            image: "/images/vip-live.jpg",
            title: "High Roller Cashback",
            discount: "20%",
            description: "Exclusive 20% cashback for VIP players on all live dealer tables.",
            ctaText: "Sign Up",
        },
    ];

    return (
        <div className="min-h-screen pb-20">
            {/* Hero Section */}
            <section className="relative py-20 px-4 bg-gradient-to-b from-primary/10 to-background">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-heading mb-6 neon-glow">
                        Live Casino Action
                    </h1>
                    <p className="text-xl text-text/80 max-w-2xl mx-auto">
                        Play close to reality with professional dealers in real-time.
                        Experience the best live baccarat, roulette, and blackjack tables.
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

            {/* Detailed Content */}
            <LiveCasinoDetails />
        </div>
    );
}
