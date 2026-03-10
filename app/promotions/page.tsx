"use client";

import { useState, useEffect } from "react";
import PromotionCard from "@/components/PromotionCard";
import PromotionsDetails from "@/components/promotions/PromotionsDetails";
import { promotions as staticPromos } from "@/lib/data";
import { ChevronDown, ChevronUp, Gift } from "lucide-react";
import { cms, PromotionsPageData } from "@/lib/cms";

export default function PromotionPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [allPromos, setAllPromos] = useState<any[]>([]);
    const [pageData, setPageData] = useState<PromotionsPageData | null>(null);

    useEffect(() => {
        // Load promos from Firestore
        fetch("/api/promotions?type=general")
            .then(r => r.json())
            .then(data => {
                if (data.promos && data.promos.length > 0) {
                    setAllPromos(data.promos);
                } else {
                    const saved = localStorage.getItem("generalPromotions");
                    setAllPromos(saved ? JSON.parse(saved) : staticPromos);
                }
            })
            .catch(() => {
                const saved = localStorage.getItem("generalPromotions");
                setAllPromos(saved ? JSON.parse(saved) : staticPromos);
            });

        // Load page header data from Firestore
        fetch("/api/cms?section=promotionsPage")
            .then(r => r.json())
            .then(data => { if (data.data) setPageData(data.data); })
            .catch(() => setPageData(cms.promotionsPage.get()));
    }, []);

    const faqs = [
        {
            question: "How do I claim a bonus?",
            answer: "To claim a bonus, go to the deposit page and select the bonus you want to claim before making your deposit. Alternatively, you can enter a promo code if you have one.",
        },
        {
            question: "What are wagering requirements?",
            answer: "Wagering requirements determine how many times you must play through a bonus before you can withdraw any winnings. For example, a $10 bonus with a 10x requirement means you must bet $100 in total.",
        },
        {
            question: "Can I cancel a bonus?",
            answer: "Yes, you can cancel an active bonus at any time from your account settings. However, please note that any winnings associated with that bonus will also be forfeited.",
        },
        {
            question: "Are promotions available for all games?",
            answer: "Most promotions are specific to certain game categories (e.g., Slots, Live Casino, Sports). Check the terms and conditions of each bonus to see which games are eligible.",
        },
    ];

    return (
        <div className="min-h-screen pb-20 pt-28 md:pt-40">
            {/* Page Header */}
            <div className="container-custom mb-16 px-4">
                <div className="flex flex-col items-center text-center">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="w-12 h-1 bg-primary rounded-full" />
                        <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">
                            {pageData?.subtitle || "Rewards & Benefits"}
                        </span>
                        <span className="w-12 h-1 bg-primary rounded-full" />
                    </div>
                    <h1 className="text-4xl md:text-7xl font-heading font-black text-white uppercase tracking-tighter mb-6" dangerouslySetInnerHTML={{ __html: pageData?.title || `Elite <span class="text-primary italic">Promotions</span>` }}>
                    </h1>
                    <p className="text-gray-500 max-w-2xl text-lg font-medium leading-relaxed">
                        {pageData?.introText || "Elevate your gaming experience with our exclusive rewards. From welcome bonuses to weekly cashback, we've designed every offer to maximize your winning potential."}
                    </p>
                </div>
            </div>

            {/* Promotion Grid */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {allPromos.map((promo) => (
                            <PromotionCard key={promo.id} {...promo} />
                        ))}
                    </div>
                </div>
            </section>


            {/* How It Works & FAQ */}
            <section className="py-16 px-4 bg-background/50">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-heading text-center mb-12 text-primary neon-glow">
                        How Promotions Work
                    </h2>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-primary/20 rounded-lg overflow-hidden bg-background"
                            >
                                <button
                                    className="w-full flex items-center justify-between p-4 text-left hover:bg-primary/5 transition-colors"
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                >
                                    <span className="font-medium text-lg">{faq.question}</span>
                                    {openFaq === index ? (
                                        <ChevronUp className="text-primary" />
                                    ) : (
                                        <ChevronDown className="text-text/50" />
                                    )}
                                </button>
                                {openFaq === index && (
                                    <div className="p-4 pt-0 text-text/70 border-t border-primary/10">
                                        <p className="mt-4">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 p-6 bg-primary/10 rounded-xl border border-primary/20">
                        <h3 className="text-xl font-heading text-primary mb-4">Terms & Conditions</h3>
                        <p className="text-sm text-text/70">
                            All promotions are subject to BigWin959's general terms and conditions.
                            Players must be 18+ to participate. Wagering requirements apply to all bonuses
                            unless otherwise stated. BigWin959 reserves the right to amend or cancel
                            promotions at any time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Detailed Content */}
            <PromotionsDetails />
        </div>
    );
}
