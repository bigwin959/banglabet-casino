import BannerSlider from "@/components/BannerSlider";
import HeroIntro from "@/components/home/HeroIntro";
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
      id: "1",
      image: "/images/hero-main.png",
      title: "Win Like a Pro with BigWin959",
      link: "/register",
    },
    {
      id: "2",
      image: "/images/hero-promo.png",
      title: "Exciting Promotions & Bonuses",
      link: "/promotions",
    },
    {
      id: "3",
      image: "/images/hero-sports.png",
      title: "Dynamic Sports Betting",
      link: "/sportsbook",
    },
    {
      id: "4",
      image: "/images/hero-slots.png",
      title: "Big Rewards & Jackpots",
      link: "/slots",
    },
    {
      id: "5",
      image: "/images/hero-live.png",
      title: "Elegant Live Casino",
      link: "/live-casino",
    },
  ];

  return (
    <div className="min-h-screen pb-12">
      {/* Hero Banner Slider */}
      <section className="bg-gray-100 py-4">
        <BannerSlider banners={banners} />
      </section>

      {/* Intro Text */}
      <HeroIntro />

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
  );
}
