"use client";

import PromotionCard from "@/components/PromotionCard";
import SportsbookDetails from "@/components/sportbook/SportsbookDetails";
import LiveMatches from "@/components/sportbook/LiveMatches";
import { sports } from "@/lib/data";
import { useState, useEffect } from "react";
import { cms } from "@/lib/cms";

export default function SportBook() {
    const [promotions, setPromotions] = useState<any[]>([]);

    useEffect(() => {
        cms.sportsbookPromotions.get().then((savedPromos) => {
            if (savedPromos && savedPromos.length > 0) {
                setPromotions(savedPromos);
            } else {
                setPromotions([
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
                ]);
            }
        });
    }, []);

    return (
        <div className="min-h-screen pb-20 pt-28 md:pt-40">
            {/* Promo Section */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {promotions.map((card, index) => (
                            <PromotionCard key={index} {...card} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Sports Categories */}
            <section className="py-20 px-4 bg-background/50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center space-x-4 mb-12 justify-center">
                        <span className="h-0.5 w-12 bg-primary" />
                        <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter">
                            Popular <span className="text-primary">Sports</span>
                        </h2>
                        <span className="h-0.5 w-12 bg-primary" />
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {sports.map((sport) => (
                            <div
                                key={sport.id}
                                className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 text-center group hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 shadow-xl"
                            >
                                <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-500 filter drop-shadow-[0_0_10px_rgba(255,228,145,0.2)]">
                                    {sport.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white uppercase font-heading tracking-tight mb-2 group-hover:text-primary transition-colors">
                                    {sport.name}
                                </h3>
                                <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full border border-primary/10">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                                    <span className="text-[10px] font-black text-primary uppercase tracking-widest">{sport.activeEvents} Live</span>
                                </div>
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

