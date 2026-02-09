import PromotionCard from "@/components/PromotionCard";
import AgentCard from "@/components/AgentCard";
import LiveCasinoDetails from "@/components/live-casino/LiveCasinoDetails";
import { agents } from "@/lib/data";

export default function LiveCasino() {
    const discountCards = [
        {
            image: "https://img-live.bannershive.dev/h001_uploads/images/B1_BDT_EN_Pragmatic_Play_God_of_Olympus_1000_Daily_Cashback_CTL_PROMOTION.jpg",
            title: "Live Casino Welcome",
            discount: "100%",
            description: "Experience the thrill of real casino games with a 100% welcome bonus.",
            ctaText: "Sign Up",
        },
        {
            image: "https://img-live.bannershive.dev/h001_uploads/images/B1_BDT_EN_ALL_Rescue%20Bonus_CTL_PROMOTION.jpg",
            title: "High Roller Cashback",
            discount: "20%",
            description: "Exclusive 20% cashback for VIP players on all live dealer tables.",
            ctaText: "Sign Up",
        },
    ];

    return (
        <div className="min-h-screen pb-20 pt-10">
            {/* Content starts directly */}

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



            {/* Detailed Content */}
            <LiveCasinoDetails />
        </div>
    );
}
