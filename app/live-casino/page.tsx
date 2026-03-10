"use client";

import PromotionCard from "@/components/PromotionCard";
import LiveCasinoDetails from "@/components/live-casino/LiveCasinoDetails";
import { useState, useEffect } from "react";

export default function LiveCasino() {
    const [promotions, setPromotions] = useState<any[]>([]);

    const defaultPromos = [
        {
            image: "https://img-live.bannershive.dev/h001_uploads/images/B1_BDT_EN_Pragmatic_Play_God_of_Olympus_1000_Daily_Cashback_CTL_PROMOTION.jpg",
            title: "Live Casino Welcome", discount: "100%",
            description: "Experience the thrill of real casino games with a 100% welcome bonus.", ctaText: "Sign Up",
        },
        {
            image: "https://img-live.bannershive.dev/h001_uploads/images/B1_BDT_EN_ALL_Rescue%20Bonus_CTL_PROMOTION.jpg",
            title: "High Roller Cashback", discount: "20%",
            description: "Exclusive 20% cashback for VIP players on all live dealer tables.", ctaText: "Sign Up",
        },
    ];

    useEffect(() => {
        fetch("/api/promotions?type=live")
            .then(r => r.json())
            .then(data => {
                if (data.promos && data.promos.length > 0) {
                    setPromotions(data.promos);
                } else {
                    const saved = localStorage.getItem("liveCasinoPromotions");
                    setPromotions(saved ? JSON.parse(saved) : defaultPromos);
                }
            })
            .catch(() => {
                const saved = localStorage.getItem("liveCasinoPromotions");
                setPromotions(saved ? JSON.parse(saved) : defaultPromos);
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

            {/* Detailed Content */}
            <LiveCasinoDetails />
        </div>
    );
}

