/**
 * /api/seed — Seeds Firestore with fresh, real working data.
 * Call once via: GET /api/seed
 * Protected via a secret query param: /api/seed?key=banglabet2024
 */
import { NextRequest, NextResponse } from "next/server";
import { firestoreCms, saveHomeBanners, saveBlogPost, savePromotion } from "@/lib/firestore-cms";
import {
    defaultSiteSettings, defaultFeaturedContent, defaultDiamondLobby,
    defaultHomeBlogSettings, defaultLiveCasinoContent, defaultAboutPageData,
    defaultPromotionsPageData, defaultFooterData, defaultBlogCategories
} from "@/lib/cms-defaults";

const SEED_KEY = "banglabet2024";

export async function GET(req: NextRequest) {
    const key = req.nextUrl.searchParams.get("key");
    if (key !== SEED_KEY) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // ─── Site Settings ────────────────────────────────────────────────────────
    await firestoreCms.siteSettings.save({
        ...defaultSiteSettings,
        siteName: "BanglaBet Casino",
        contactEmail: "support@banglabet.com",
        whatsappLink: "https://wa.me/8801234567890",
        telegramLink: "https://t.me/banglabet",
        registerLink: "https://www.bigwin959.com/register",
    });

    // ─── Home Banners ─────────────────────────────────────────────────────────
    await saveHomeBanners([
        { id: "1", image: "/images/hero-1.jpg", title: "Ultimate Casino Experience", link: "https://www.bigwin959.com/register", imageOnly: true },
        { id: "2", image: "/images/hero-2.jpg", title: "Live Casino Thrills", link: "https://www.bigwin959.com/register", imageOnly: true },
        { id: "3", image: "/images/hero-3.jpg", title: "Win Big Today", link: "https://www.bigwin959.com/register", imageOnly: true },
    ]);

    // ─── Featured Content ─────────────────────────────────────────────────────
    await firestoreCms.featuredContent.save(defaultFeaturedContent);

    // ─── Diamond Lobby ────────────────────────────────────────────────────────
    await firestoreCms.diamondLobby.save(defaultDiamondLobby);

    // ─── Home Blog Settings ───────────────────────────────────────────────────
    await firestoreCms.homeBlog.save(defaultHomeBlogSettings);

    // ─── Live Casino Content ──────────────────────────────────────────────────
    await firestoreCms.liveCasino.save(defaultLiveCasinoContent);

    // ─── About Page ───────────────────────────────────────────────────────────
    await firestoreCms.aboutPage.save(defaultAboutPageData);

    // ─── Promotions Page ──────────────────────────────────────────────────────
    await firestoreCms.promotionsPage.save(defaultPromotionsPageData);

    // ─── Footer ───────────────────────────────────────────────────────────────
    await firestoreCms.footer.save({
        ...defaultFooterData,
        aboutText: "BanglaBet Casino is your premier destination for online entertainment in Bangladesh. We offer world-class casino games, sports betting, and live dealer experiences.",
        copyright: `© ${new Date().getFullYear()} BanglaBet Casino. All rights reserved.`,
    });

    // ─── Blog Categories ──────────────────────────────────────────────────────
    await firestoreCms.blogCategories.save(defaultBlogCategories);

    // ─── Blog Posts ───────────────────────────────────────────────────────────
    const blogPosts = [
        {
            title: "Top 5 Live Casino Games on BanglaBet",
            excerpt: "Discover the most exciting live dealer games available on BanglaBet Casino and how to maximize your winnings.",
            content: "Live casino games bring the authentic casino experience directly to your screen. At BanglaBet, we offer a curated selection of the finest live dealer games powered by Evolution Gaming, Sexy Gaming, and HotRoad. From Baccarat to Roulette, each game is streamed in HD with professional dealers. Here are our top picks for 2024...",
            category: "Gaming Tips",
            image: "/images/hero-1.jpg",
            date: new Date().toISOString().split("T")[0],
            author: "BanglaBet Staff",
            readTime: "5 Min Read",
            highlightBox: "Play responsibly. Set your limits before you start.",
            subHeading: "Why Live Casino?",
            subContent: "Live casino games offer the most immersive online gambling experience. You interact with real dealers in real time, making every session unique and exciting.",
            footerNote: "All games are certified fair by independent testing agencies."
        },
        {
            title: "How to Claim Your 100% Welcome Bonus",
            excerpt: "A step-by-step guide to claiming your first deposit bonus and getting started with BanglaBet Casino.",
            content: "Getting started at BanglaBet is simple. Register your account, make your first deposit of at least ৳500, and your 100% bonus up to ৳10,000 will be credited automatically. Here's everything you need to know...",
            category: "Promotions",
            image: "/images/hero-2.jpg",
            date: new Date().toISOString().split("T")[0],
            author: "Promotions Team",
            readTime: "3 Min Read",
            highlightBox: "Bonus subject to 10x rollover requirement.",
            subHeading: "Step by Step",
            subContent: "1. Register your account\n2. Verify your mobile number\n3. Make your first deposit\n4. Bonus credited instantly",
            footerNote: "Terms and conditions apply. Players must be 18+ to participate."
        },
        {
            title: "IPL 2024 Betting Guide",
            excerpt: "Everything you need to know about betting on IPL 2024 season at BanglaBet Sportsbook.",
            content: "IPL 2024 is here and BanglaBet Sportsbook has the best odds in Bangladesh. Bet on match winners, top batsmen, total runs, and more. Our live in-play betting means you never miss a moment of the action...",
            category: "Guides",
            image: "/images/hero-3.jpg",
            date: new Date().toISOString().split("T")[0],
            author: "Sports Desk",
            readTime: "7 Min Read",
            highlightBox: "Check our live odds for real-time IPL betting.",
            subHeading: "Markets Available",
            subContent: "Match Winner | Top Batsman | Total Sixes | Man of the Match | Session Runs",
            footerNote: "Gamble responsibly. Only bet what you can afford to lose."
        }
    ];

    for (const post of blogPosts) {
        await saveBlogPost(post);
    }

    // ─── Live Casino Promotions ───────────────────────────────────────────────
    await savePromotion("live", {
        title: "Live Casino Welcome Bonus",
        discount: "100%",
        description: "Experience the thrill of real-time casino games with a 100% welcome bonus on your first deposit.",
        ctaText: "Sign Up",
        ctaLink: "https://www.bigwin959.com/register",
        image: "https://img-live.bannershive.dev/h001_uploads/images/B1_BDT_EN_Pragmatic_Play_God_of_Olympus_1000_Daily_Cashback_CTL_PROMOTION.jpg",
    });

    await savePromotion("live", {
        title: "VIP Cashback Program",
        discount: "20%",
        description: "Exclusive 20% weekly cashback for high-roller players on all live dealer tables.",
        ctaText: "Join VIP",
        ctaLink: "https://www.bigwin959.com/register",
        image: "https://img-live.bannershive.dev/h001_uploads/images/B1_BDT_EN_ALL_Rescue%20Bonus_CTL_PROMOTION.jpg",
    });

    // ─── Sports Promotions ────────────────────────────────────────────────────
    await savePromotion("sports", {
        title: "Free Bet on First Sports Wager",
        discount: "FREE BET",
        description: "Place your first sports bet and get a free bet of the same value up to ৳1000.",
        ctaText: "Bet Now",
        ctaLink: "https://www.bigwin959.com/register",
        image: "https://img-live.bannershive.dev/h001_uploads/images/B1_BDT_EN_ALL_Rescue%20Bonus_CTL_PROMOTION.jpg",
    });

    // ─── General Promotions ───────────────────────────────────────────────────
    await savePromotion("general", {
        title: "Refer a Friend Bonus",
        discount: "৳500",
        description: "Earn ৳500 for every friend you refer who makes a qualifying deposit.",
        ctaText: "Refer Now",
        ctaLink: "https://www.bigwin959.com/register",
        image: "https://img-live.bannershive.dev/h001_uploads/images/B1_BDT_EN_ALL_Rescue%20Bonus_CTL_PROMOTION.jpg",
    });

    await savePromotion("general", {
        title: "Daily Reload Bonus",
        discount: "25%",
        description: "Get a 25% bonus on every daily deposit. Keep the momentum going!",
        ctaText: "Deposit Now",
        ctaLink: "https://www.bigwin959.com/register",
        image: "https://img-live.bannershive.dev/h001_uploads/images/B1_BDT_EN_Pragmatic_Play_God_of_Olympus_1000_Daily_Cashback_CTL_PROMOTION.jpg",
    });

    return NextResponse.json({
        success: true,
        message: "Firestore seeded successfully! All collections populated with fresh data.",
        seeded: ["siteSettings", "homeBanners", "featuredContent", "diamondLobby", "homeBlog", "liveCasino", "aboutPage", "promotionsPage", "footer", "blogCategories", "blog_posts (3)", "promotions_live (2)", "promotions_sports (1)", "promotions_general (2)"]
    });
}
