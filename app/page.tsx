import BannerSlider from "@/components/BannerSlider";
import EngagementCard from "@/components/EngagementCard";
import { banners } from "@/lib/data";
import { TrendingUp, Users, Trophy } from "lucide-react";

export default function Home() {
  const engagementPosts = [
    {
      image: "/images/engagement-1.jpg",
      title: "Welcome Bonus 100%",
      description: "Get up to $1000 on your first deposit. Start your winning journey with our generous welcome bonus.",
      buttonText: "Claim Now",
      buttonLink: "/promotion",
    },
    {
      image: "/images/engagement-2.jpg",
      title: "Live Casino Experience",
      description: "Play with professional dealers in HD quality. Experience the thrill of real casino from home.",
      buttonText: "Play Now",
      buttonLink: "/live-casino",
    },
    {
      image: "/images/engagement-3.jpg",
      title: "Sports Betting",
      description: "Bet on your favorite sports with competitive odds. Football, cricket, basketball and more.",
      buttonText: "Bet Now",
      buttonLink: "/sportbook",
    },
  ];

  const stats = [
    { icon: Trophy, label: "Total Games", value: "500+" },
    { icon: Users, label: "Active Players", value: "50K+" },
    { icon: TrendingUp, label: "Jackpot Prize", value: "$2.5M" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Banner Slider */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading text-center mb-8 neon-glow">
            Welcome to BanglaBet<span className="text-cta">88</span>
          </h1>
          <BannerSlider banners={banners} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="card text-center group hover:border-primary/40"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:neon-glow" />
                <h3 className="text-3xl font-heading text-cta mb-2 neon-glow-cta">
                  {stat.value}
                </h3>
                <p className="text-text/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Posts */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-12 text-primary">
            Featured Promotions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagementPosts.map((post, index) => (
              <EngagementCard key={index} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-cta/10 crt-scanlines">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading mb-6 neon-glow">
            Ready to Start Winning?
          </h2>
          <p className="text-lg text-text/80 mb-8">
            Join thousands of players and claim your welcome bonus today!
          </p>
          <button className="btn-primary text-lg px-8 py-4 neon-glow-cta">
            Sign Up Now
          </button>
        </div>
      </section>
    </div>
  );
}
