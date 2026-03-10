/**
 * cms-defaults.ts
 * Shared default values extracted from cms.ts.
 * Used by both the CMS client-side (cms.ts) and server-side API routes (app/api/cms/route.ts).
 */
import type {
    SiteSettings, FeaturedContent, DiamondLobbyItem, HomeBlogSettings,
    PageContentLiveCasino, AboutPageData, PromotionsPageData, FooterData
} from "./cms";

export const defaultSiteSettings: SiteSettings = {
    contactEmail: "support@bigwin959.com",
    contactPhone: "+880 1234-567890",
    address: "Level 12, Future Park Tower, Bashundhara R/A, Dhaka-1229, Bangladesh",
    adminEmail: "admin@bigwin959.com",
    notificationEmail: "support@bigwin959.com",
};

export const defaultFeaturedContent: FeaturedContent[] = [
    {
        id: "1",
        title: "Most User-Recommended Platform",
        description: "Player recommendations reflect constant uptime, generous rollover policies, and a clear-cut registration that promises steady growth.",
        image: "/images/teaser-recommended.png",
        cta: "Explore Now",
        link: "/register",
    },
    {
        id: "2",
        title: "High-Stake Jackpots and Lucrative Bonuses",
        description: "Low-key pools mass stakes from a dispersed base of players to create big jackpots worthy of making headlines.",
        image: "/images/banner-special-slots.png",
        cta: "Claim Bonus",
        link: "/promotions",
    },
];

export const defaultDiamondLobby: DiamondLobbyItem[] = [
    {
        id: "1",
        title: "Dragon Sexy Hall",
        description: "BigWin959 Online Casino recommends its Dragon Sexy Hall, which stuns you amazingly with its unparalleled visuals and gaming experience.",
        image: "/images/live-dragon.png",
        link: "/live-casino",
    },
    {
        id: "2",
        title: "Baccarat Classic Sexy Hall",
        description: "Prepare for exciting potential rewards with its high-stakes betting, especially perfect for experienced players.",
        image: "/images/live-baccarat.png",
        link: "/live-casino",
    },
    {
        id: "3",
        title: "Roulette Sexy Hall",
        description: "Indulge in every suspenseful spin while enjoying the glamorous and authentic environment that Roulette Sexy Hall provides.",
        image: "/images/live-roulette.png",
        link: "/live-casino",
    },
];

export const defaultHomeBlogSettings: HomeBlogSettings = {
    filterType: "latest",
    title: "Latest from Our Blog",
};

export const defaultLiveCasinoContent: PageContentLiveCasino = {
    introTitle: "Live Casino",
    introContent: "Through the immersive services of stunning live dealers paired with high-definition video streams delivering an almost realistic casino environment, live casinos never fail to attract casino enthusiasts.",
    hotRoadTitle: "HotRoad",
    hotRoadContent: "Despite being relatively new to the world of online gambling, BigWin959 and Live Casino login include HotRoad in their formidable lineup of game providers.",
    conclusionTitle: "Conclusion",
    conclusionContent: "BigWin959 never falls short in offering games, especially with the help of its impressive list of game providers.",
};

export const defaultAboutPageData: AboutPageData = {
    heroTitle: "Redefining Online <br /><span class=\"text-cta\">Entertainment</span>",
    heroSubtitle: "BigWin959 is Bangladesh's premier online gaming destination, offering a world-class casino and sports betting experience tailored for you.",
    heroImage: "https://res.cloudinary.com/dmyocpyxd/image/upload/w_1200,f_auto,q_auto/v1767000514/Security-Technology.png",
    securedByText: "Secured BY<br/>959 SHIELD",
    stats: [
        { value: "5+", label: "Years Experience" },
        { value: "1M+", label: "Happy Players" },
        { value: "24/7", label: "Live Support" },
    ],
    missionTitle: "Our Mission",
    missionText: "\"To provide a safe, exciting, and innovative gaming platform where players can enjoy premium entertainment with complete peace of mind.\"",
    features: [
        { title: "Secure & Trusted", description: "We use state-of-the-art encryption combined with accredited payment processing.", icon: "Shield" },
        { title: "Community Focused", description: "BigWin959 is built for the community.", icon: "Users" },
        { title: "Certified Fair Play", description: "All our games are independently tested and certified for fairness.", icon: "Award" },
        { title: "24/7 Support", description: "Our dedicated support team is available round the clock.", icon: "Headphones" },
    ],
    whyChooseUs: [
        { icon: "Shield", title: "Secure & Trusted", description: "State-of-the-art encryption combined with accredited payment processing." },
        { icon: "Users", title: "Community Focused", description: "Built for the community with engaging social gaming experiences." },
        { icon: "Award", title: "Certified Fair Play", description: "Independently tested games and regulatory compliance." },
        { icon: "Headphones", title: "24/7 Support", description: "Round-the-clock dedicated support team." },
    ],
    communityCta: {
        title: "Join Our Community Today",
        description: "Experience the difference with BigWin959. Sign up now and claim your welcome bonus.",
        buttonText: "Get Started",
        buttonLink: "/signup",
    },
};

export const defaultPromotionsPageData: PromotionsPageData = {
    title: "Elite <span class=\"text-primary italic\">Promotions</span>",
    subtitle: "Rewards & Benefits",
    introText: "Elevate your gaming experience with our exclusive rewards. From welcome bonuses to weekly cashback, we've designed every offer to maximize your winning potential.",
};

export const defaultFooterData: FooterData = {
    aboutText: "BigWin959 is your premier destination for online entertainment. We offer a wide range of casino games, sports betting, and live dealer experiences.",
    copyright: "© 2024 BigWin959. All rights reserved.",
    socialLinks: {
        facebook: "#",
        twitter: "#",
        telegram: "#",
        instagram: "#",
    },
};

export const defaultBlogCategories = ["All", "Gaming Tips", "Promotions", "News", "Guides", "Announcements"];
