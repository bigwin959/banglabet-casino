import PromotionCard from "@/components/PromotionCard";
import SportsbookDetails from "@/components/sportbook/SportsbookDetails";
import LiveMatches from "@/components/sportbook/LiveMatches";
import { sports } from "@/lib/data";

export default function SportBook() {
    const sportPromotions = [
        {
            image: "https://img-live.bannershive.dev/h001_uploads/images/B1_BDT_EN_Pragmatic_Play_God_of_Olympus_1000_Daily_Cashback_CTL_PROMOTION.jpg",
            title: "First Bet Bonus",
            discount: "$50",
            description: "Place your first bet risk-free up to $50. If you lose, we refund you.",
            ctaText: "Bet Now",
        },
        {
            image: "https://img-live.bannershive.dev/h001_uploads/images/B1_BDT_EN_Pragmatic_Play_God_of_Olympus_1000_Daily_Cashback_CTL_PROMOTION.jpg",
            title: "Accumulator Boost",
            discount: "50%",
            description: "Get up to 50% extra winnings on your accumulator bets.",
            ctaText: "Bet Now",
        },
    ];

    return (
        <div className="min-h-screen pb-20 pt-10">
            {/* Content starts directly */}

            {/* Discount Promotions */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-heading text-center mb-12 text-cta">
                        Sports Offers
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {sportPromotions.map((card, index) => (
                            <PromotionCard key={index} {...card} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Sports Categories */}
            <section className="py-16 px-4 bg-background/50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-heading text-center mb-12 text-primary neon-glow">
                        Popular Sports
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {sports.map((sport) => (
                            <div
                                key={sport.id}
                                className="card text-center group hover:border-cta/40 transition-colors"
                            >
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                                    {sport.icon}
                                </div>
                                <h3 className="text-lg font-heading text-text group-hover:text-cta transition-colors">
                                    {sport.name}
                                </h3>
                                <p className="text-sm text-text/50 mt-2">
                                    <span className="text-cta font-bold">{sport.activeEvents}</span> Live
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Live Matches */}
            <LiveMatches />

            {/* Detailed Content */}
            <SportsbookDetails />
        </div>
    );
}
