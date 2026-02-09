import BannerSlider from "@/components/BannerSlider";

import CategoryTeasers from "@/components/home/CategoryTeasers";
import PromotionsPreview from "@/components/home/PromotionsPreview";
import RecommendedGames from "@/components/home/RecommendedGames";
import BlogPreview from "@/components/home/BlogPreview";
import VIPSection from "@/components/home/VIPSection";
import ProvidersSection from "@/components/home/ProvidersSection";
import RegistrationGuide from "@/components/home/RegistrationGuide";
import BankingInfo from "@/components/home/BankingInfo";
import SportsDetails from "@/components/home/SportsDetails";
import InfoSection from "@/components/home/InfoSection";

export default function Home() {
  const banners = [
    {
      id: "3",
      image: "/images/hero-3.jpg",
      title: "Premium Classic Gaming",
      link: "https://www.bigwin959.com/register",
    },
    {
      id: "1",
      image: "/images/hero-1.jpg",
      title: "Ultimate Casino Experience",
      link: "https://www.bigwin959.com/register",
    },
    {
      id: "2",
      image: "/images/hero-2.jpg",
      title: "Future of Gaming is Here",
      link: "https://www.bigwin959.com/register",
    },
  ];

    return (
        <div className="min-h-screen bg-background selection:bg-primary selection:text-white">
            <h1 className="sr-only">BigWin959 - Premium Online Casino & Sports Betting in Bangladesh</h1>

            {/* Hero Section */}
            <main>
                <section className="pt-24 md:pt-32 pb-10">
                    <BannerSlider banners={banners} />
                </section>

                <div className="space-y-0 text-white">
                    {/* Featured Teasers */}
                    <CategoryTeasers />

                    {/* Gaming Lobby Preview - Contains Live Casino */}
                    <RecommendedGames />

                    {/* Blog Preview */}
                    <BlogPreview />

                    {/* Promotional Content */}
                    <PromotionsPreview />

                    {/* VIP Lounge */}
                    <VIPSection />

                    {/* Trust Signals */}
                    <ProvidersSection />
                    
                    {/* Educational Content */}
                    <RegistrationGuide />
                    <BankingInfo />
                    
                    {/* Market Details */}
                    <SportsDetails />
                    <InfoSection />
                </div>
            </main>
        </div>
    );
}


