import BannerSlider from "@/components/BannerSlider";

import CategoryTeasers from "@/components/home/CategoryTeasers";
import PromotionsPreview from "@/components/home/PromotionsPreview";
import RecommendedGames from "@/components/home/RecommendedGames";
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
      link: "/register",
    },
    {
      id: "1",
      image: "/images/hero-1.jpg",
      title: "Ultimate Casino Experience",
      link: "/register",
    },
    {
      id: "2",
      image: "/images/hero-2.jpg",
      title: "Future of Gaming is Here",
      link: "/register",
    },
  ];

  return (
    <div className="min-h-screen pb-20 pt-20 md:pt-28 bg-background">
      <h1 className="sr-only">BigWin959 - Premium Online Casino & Sports Betting in Bangladesh</h1>

      {/* Hero Banner Slider */}
      <section className="py-2 mb-8">
        <BannerSlider banners={banners} />
      </section>

      <div className="space-y-0 text-white">
        {/* Category Teasers (Sports, Slots, Live) */}
        <CategoryTeasers />

        {/* Promotions Preview */}
        <PromotionsPreview />

        {/* Recommended Games (Slots & Live) */}
        <RecommendedGames />

        {/* VIP Section */}
        <VIPSection />

        {/* Game Providers */}
        <ProvidersSection />

        {/* Registration Guide */}
        <RegistrationGuide />

        {/* Banking Information */}
        <BankingInfo />

        {/* Sports Details */}
        <SportsDetails />

        {/* Info & FAQ */}
        <InfoSection />
      </div>
    </div>
  );
}
