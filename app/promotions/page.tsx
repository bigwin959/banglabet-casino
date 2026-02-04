"use client";

import { useState } from "react";
import PromotionCard from "@/components/PromotionCard";
import PromotionsDetails from "@/components/promotions/PromotionsDetails";
import { promotions } from "@/lib/data";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function PromotionPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

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
        <div className="min-h-screen pb-20 pt-10">
            {/* Content starts directly */}

            {/* Promotion Grid */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {promotions.map((promo) => (
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
                            All promotions are subject to BanglaBet88's general terms and conditions.
                            Players must be 18+ to participate. Wagering requirements apply to all bonuses
                            unless otherwise stated. BanglaBet88 reserves the right to amend or cancel
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
