"use client";

import { useState, useEffect } from "react";
import BannerSlider from "@/components/BannerSlider";
import { cms, FeaturedContent, DiamondLobbyItem, HomeBlogSettings } from "@/lib/cms";

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
import LiveWinnersTicker from "@/components/home/LiveWinnersTicker";
import PaymentMethods from "@/components/home/PaymentMethods";

export default function Home() {
  const [banners, setBanners] = useState([
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
    }
  ]);

  const [featuredContent, setFeaturedContent] = useState<FeaturedContent[]>([]);
  const [diamondLobby, setDiamondLobby] = useState<DiamondLobbyItem[]>([]);
  const [blogSettings, setBlogSettings] = useState<HomeBlogSettings | undefined>(undefined);

  useEffect(() => {
    // Load all CMS sections from Firestore, fall back to localStorage defaults
    const loadSection = async (section: string) => {
      try {
        const res = await fetch(`/api/cms?section=${section}`);
        const json = await res.json();
        return json.data;
      } catch {
        return null;
      }
    };

    (async () => {
      const [bannerData, featured, lobby, blog] = await Promise.all([
        loadSection("homeBanners"),
        loadSection("featuredContent"),
        loadSection("diamondLobby"),
        loadSection("homeBlog"),
      ]);

      if (bannerData) setBanners(bannerData);
      else setBanners(cms.homeBanners.get());

      if (featured) setFeaturedContent(featured);
      else setFeaturedContent(cms.featuredContent.get());

      if (lobby) setDiamondLobby(lobby);
      else setDiamondLobby(cms.diamondLobby.get());

      if (blog) setBlogSettings(blog);
      else setBlogSettings(cms.homeBlog.get());
    })();
  }, []);

  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-white">
      <h1 className="sr-only">BigWin959 - Premium Online Casino & Sports Betting in Bangladesh</h1>

      {/* Hero Section */}
      <main>
        <section className="pt-24 md:pt-32 pb-0">
          <BannerSlider banners={banners} />
        </section>

        {/* Live Winners Ticker */}
        <LiveWinnersTicker />

        <div className="space-y-0 text-white">
          {/* Featured Teasers */}
          <CategoryTeasers items={featuredContent} />

          {/* Gaming Lobby Preview - Contains Live Casino */}
          <RecommendedGames items={diamondLobby} />

          {/* Blog Preview */}
          <BlogPreview settings={blogSettings} />

          {/* Promotional Content */}
          <PromotionsPreview />

          {/* VIP Lounge */}
          <VIPSection />

          {/* Trust Signals */}
          <ProvidersSection />

          {/* Payment Methods */}
          <PaymentMethods />

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


