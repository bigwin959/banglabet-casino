import PromotionCard from "@/components/PromotionCard";
import { sports } from "@/lib/data";

export default function SportBook() {
    const sportPromotions = [
        {
            image: "/images/sport-bonus.jpg",
            title: "First Bet Bonus",
            discount: "$50",
            description: "Place your first bet risk-free up to $50. If you lose, we refund you.",
            ctaText: "Bet Now",
        },
        {
            image: "/images/sport-cashback.jpg",
            title: "Accumulator Boost",
            discount: "50%",
            description: "Get up to 50% extra winnings on your accumulator bets.",
            ctaText: "Bet Now",
        },
    ];

    return (
        <div className="min-h-screen pb-20">
            {/* Hero Section */}
            <section className="relative py-20 px-4 bg-gradient-to-b from-cta/10 to-background">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-heading mb-6 neon-glow">
                        Sportsbook
                    </h1>
                    <p className="text-xl text-text/80 max-w-2xl mx-auto">
                        Bet on your favorite sports with the best odds in the market.
                        Live betting, thousands of events, and instant payouts.
                    </p>
                </div>
            </section>

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

            {/* Live Odds Table Placeholder */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-heading mb-8 pl-4 border-l-4 border-cta">
                        Live Matches
                    </h2>
                    <div className="bg-background/80 border border-primary/20 rounded-xl overflow-hidden">
                        {/* Table Header */}
                        <div className="grid grid-cols-12 gap-4 p-4 bg-primary/10 font-heading text-sm text-primary">
                            <div className="col-span-6 md:col-span-5">Match</div>
                            <div className="col-span-2 hidden md:block text-center">Time</div>
                            <div className="col-span-2 text-center">1</div>
                            <div className="col-span-2 text-center">X</div>
                            <div className="col-span-2 text-center">2</div>
                        </div>

                        {/* Table Rows */}
                        {[1, 2, 3, 4, 5].map((item) => (
                            <div
                                key={item}
                                className="grid grid-cols-12 gap-4 p-4 border-t border-primary/10 hover:bg-white/5 transition-colors items-center"
                            >
                                <div className="col-span-6 md:col-span-5 flex items-center space-x-3">
                                    <span className="text-xl">⚽</span>
                                    <div>
                                        <div className="font-bold">Manchester Utd vs Liverpool</div>
                                        <div className="text-xs text-text/50">Premier League</div>
                                    </div>
                                </div>
                                <div className="col-span-2 hidden md:block text-center text-cta font-mono animate-pulse">
                                    LIVE 45'
                                </div>
                                <div className="col-span-2">
                                    <button className="w-full bg-background border border-primary/20 hover:bg-primary hover:text-white rounded py-1 transition-colors font-mono">
                                        2.10
                                    </button>
                                </div>
                                <div className="col-span-2">
                                    <button className="w-full bg-background border border-primary/20 hover:bg-primary hover:text-white rounded py-1 transition-colors font-mono">
                                        3.40
                                    </button>
                                </div>
                                <div className="col-span-2">
                                    <button className="w-full bg-background border border-primary/20 hover:bg-primary hover:text-white rounded py-1 transition-colors font-mono">
                                        2.80
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <button className="btn-secondary">View All Matches</button>
                    </div>
                </div>
            </section>
        </div>
    );
}
