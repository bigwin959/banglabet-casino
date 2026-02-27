"use client";

// --- Interfaces ---

export interface SiteSettings {
    contactEmail: string;
    contactPhone: string;
    address: string;
    adminEmail: string; // For system notifications
    notificationEmail: string; // Where contact forms go
}

export interface FeaturedContent {
    id: string;
    title: string;
    description: string;
    image: string;
    cta: string;
    link: string;
}

export interface DiamondLobbyItem {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
    tags?: string[];
}

export interface HomeBlogSettings {
    filterType: 'latest' | 'trending' | 'hottest';
    title: string;
}

export interface PageContentLiveCasino {
    introTitle: string;
    introContent: string;
    hotRoadTitle: string;
    hotRoadContent: string;
    conclusionTitle: string;
    conclusionContent: string;
}

export interface ContactMessage {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    date: string;
    read: boolean;
}

export interface AboutPageData {
    heroTitle: string;
    heroSubtitle: string;
    heroImage: string;
    securedByText: string;
    stats: { label: string; value: string }[];
    missionTitle: string;
    missionText: string;
    features: { icon: string; title: string; description: string }[];
    whyChooseUs: { icon: string; title: string; description: string }[];
    communityCta: {
        title: string;
        description: string;
        buttonText: string;
        buttonLink: string;
    };
}

export interface PromotionsPageData {
    title: string;
    subtitle: string;
    introText: string;
}

export interface FooterData {
    aboutText: string;
    copyright: string;
    socialLinks: { facebook: string; twitter: string; telegram: string; instagram: string };
}

// --- Default Data ---

const defaultSiteSettings: SiteSettings = {
    contactEmail: "support@bigwin959.com",
    contactPhone: "+880 1234-567890",
    address: "Level 12, Future Park Tower, Bashundhara R/A, Dhaka-1229, Bangladesh",
    adminEmail: "admin@bigwin959.com",
    notificationEmail: "support@bigwin959.com"
};

const defaultFeaturedContent: FeaturedContent[] = [
    {
        id: "1",
        title: "Most User-Recommended Platform",
        description: "Player recommendations reflect constant uptime, generous rollover policies, and a clear-cut registration that promises steady growth. Independent review sites list accessibility, game depth, and responsive payouts among the most singly reputable reasons by journeyman players.",
        image: "/images/teaser-recommended.png",
        cta: "Explore Now",
        link: "/register"
    },
    {
        id: "2",
        title: "High-Stake Jackpots and Lucrative Bonuses",
        description: "Low-key pools mass stakes from a dispersed base of players to create big jackpots worthy of making headlines and generating active conversations. Timed drops and targeted boosts reward engagement during key times.",
        image: "/images/banner-special-slots.png",
        cta: "Claim Bonus",
        link: "/promotions"
    }
];

const defaultDiamondLobby: DiamondLobbyItem[] = [
    {
        id: "1",
        title: "Dragon Sexy Hall",
        description: "BigWin959 Online Casino recommends its Dragon Sexy Hall, which stuns you amazingly with its unparalleled visuals and gaming experience.",
        image: "/images/live-dragon.png",
        link: "/live-casino"
    },
    {
        id: "2",
        title: "Baccarat Classic Sexy Hall",
        description: "Prepare for exciting potential rewards with its high-stakes betting, especially perfect for experienced players.",
        image: "/images/live-baccarat.png",
        link: "/live-casino"
    },
    {
        id: "3",
        title: "Roulette Sexy Hall",
        description: "Indulge in every suspenseful spin while enjoying the glamorous and authentic environment that Roulette Sexy Hall provides.",
        image: "/images/live-roulette.png",
        link: "/live-casino"
    }
];

const defaultHomeBlogSettings: HomeBlogSettings = {
    filterType: 'latest',
    title: "Latest from Our Blog"
};

const defaultLiveCasinoContent: PageContentLiveCasino = {
    introTitle: "Live Casino",
    introContent: "Through the immersive services of stunning live dealers paired with high-definition video streams delivering an almost realistic casino environment, live casinos never fail to attract casino enthusiasts, no matter their preferences and budgets. Live casinos had just become prettily sophisticated with the combination of modern trends, tools, and strategies.",
    hotRoadTitle: "HotRoad",
    hotRoadContent: "Despite being relatively new to the world of online gambling, BigWin959 and Live Casino login include HotRoad in their formidable lineup of game providers, given how truly exceptional HotRoad products are.",
    conclusionTitle: "Conclusion",
    conclusionContent: "BigWin959 never falls short in offering games, especially with the help of its impressive list of game providers. Whether that’s Evolution, Playtech, HotRoad, or Sexy Gaming, expect a ride full of rushes through BigWin959 platform!"
};

const defaultAboutPageData: AboutPageData = {
    heroTitle: "Redefining Online <br /><span class=\"text-cta\">Entertainment</span>",
    heroSubtitle: "BigWin959 is Bangladesh's premier online gaming destination, offering a world-class casino and sports betting experience tailored for you.",
    heroImage: "https://res.cloudinary.com/dmyocpyxd/image/upload/w_1200,f_auto,q_auto/v1767000514/Security-Technology.png",
    securedByText: "Secured BY<br/>959 SHIELD",
    stats: [
        { value: "5+", label: "Years Experience" },
        { value: "1M+", label: "Happy Players" },
        { value: "24/7", label: "Live Support" }
    ],
    missionTitle: "Our Mission",
    missionText: "\"To provide a safe, exciting, and innovative gaming platform where players can enjoy premium entertainment with complete peace of mind. We are committed to responsible gaming and setting the highest standards in the industry.\"",
    features: [
        { title: "Secure & Trusted", description: "We use state-of-the-art encryption combined with accredited payment processing to ensure your data and funds are always safe.", icon: "Shield" },
        { title: "Community Focused", description: "BigWin959 is built for the community. We value our players and strive to provide the most engaging social gaming experience.", icon: "Users" },
        { title: "Certified Fair Play", description: "All our games are independently tested and certified for fairness. We operate under strict regulatory compliance.", icon: "Award" },
        { title: "24/7 Support", description: "Our dedicated support team is available round the clock to assist you with any questions or concerns you might have.", icon: "Headphones" }
    ],
    whyChooseUs: [
        { icon: "Shield", title: "Secure & Trusted", description: "State-of-the-art encryption combined with accredited payment processing." },
        { icon: "Users", title: "Community Focused", description: "Built for the community with engaging social gaming experiences." },
        { icon: "Award", title: "Certified Fair Play", description: "Independently tested games and regulatory compliance." },
        { icon: "Headphones", title: "24/7 Support", description: "Round-the-clock dedicated support team." }
    ],
    communityCta: {
        title: "Join Our Community Today",
        description: "Experience the difference with BigWin959. Sign up now and claim your welcome bonus.",
        buttonText: "Get Started",
        buttonLink: "/signup"
    }
};

const defaultPromotionsPageData: PromotionsPageData = {
    title: "Elite <span class=\"text-primary italic\">Promotions</span>",
    subtitle: "Rewards & Benefits",
    introText: "Elevate your gaming experience with our exclusive rewards. From welcome bonuses to weekly cashback, we've designed every offer to maximize your winning potential."
};

const defaultFooterData: FooterData = {
    aboutText: "BigWin959 is your premier destination for online entertainment. We offer a wide range of casino games, sports betting, and live dealer experiences.",
    copyright: "© 2024 BigWin959. All rights reserved.",
    socialLinks: {
        facebook: "#",
        twitter: "#",
        telegram: "#",
        instagram: "#"
    }
};

// --- Helper Functions ---

// Generic get function with default fallback
async function getCMSData<T>(key: string, defaultValue: T): Promise<T> {
    try {
        const res = await fetch(`/api/cms?key=${key}`, { cache: 'no-store' });
        if (!res.ok) return defaultValue;
        const result = await res.json();
        return result.data !== null && result.data !== undefined ? result.data : defaultValue;
    } catch (e) {
        console.error(`Error parsing CMS data for key ${key}`, e);
        return defaultValue;
    }
}

// Generic save function
async function saveCMSData<T>(key: string, data: T): Promise<void> {
    try {
        await fetch('/api/cms', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ key, data })
        });
    } catch (e) {
        console.error(`Error saving CMS data for key ${key}`, e);
    }
}

// --- Exported CMS Accessors ---

export const cms = {
    siteSettings: {
        get: () => getCMSData<SiteSettings>('active_siteSettings', defaultSiteSettings),
        save: (data: SiteSettings) => saveCMSData('active_siteSettings', data)
    },
    featuredContent: {
        get: () => getCMSData<FeaturedContent[]>('active_featuredContent', defaultFeaturedContent),
        save: (data: FeaturedContent[]) => saveCMSData('active_featuredContent', data)
    },
    diamondLobby: {
        get: () => getCMSData<DiamondLobbyItem[]>('active_diamondLobby', defaultDiamondLobby),
        save: (data: DiamondLobbyItem[]) => saveCMSData('active_diamondLobby', data)
    },
    homeBanners: {
        get: () => getCMSData<{ id: string, image: string, title: string, link: string }[]>('active_homeBanners', [
            { id: "3", image: "/images/hero-3.jpg", title: "Premium Classic Gaming", link: "https://www.bigwin959.com/register" },
            { id: "1", image: "/images/hero-1.jpg", title: "Ultimate Casino Experience", link: "https://www.bigwin959.com/register" },
            { id: "2", image: "/images/hero-2.jpg", title: "Future of Gaming is Here", link: "https://www.bigwin959.com/register" }
        ]),
        save: (data: { id: string, image: string, title: string, link: string }[]) => saveCMSData('active_homeBanners', data)
    },
    homeBlog: {
        get: () => getCMSData<HomeBlogSettings>('active_homeBlogSettings', defaultHomeBlogSettings),
        save: (data: HomeBlogSettings) => saveCMSData('active_homeBlogSettings', data)
    },
    liveCasino: {
        get: () => getCMSData<PageContentLiveCasino>('active_pageContentLiveCasino', defaultLiveCasinoContent),
        save: (data: PageContentLiveCasino) => saveCMSData('active_pageContentLiveCasino', data)
    },
    blogCategories: {
        get: () => getCMSData<string[]>('active_blogCategories', ["All", "Gaming Tips", "Promotions", "News", "Guides", "Announcements"]),
        save: (data: string[]) => saveCMSData('active_blogCategories', data)
    },
    subscribers: {
        get: () => getCMSData<string[]>('active_subscribers', []),
        add: async (email: string) => {
            const subs = await getCMSData<string[]>('active_subscribers', []);
            if (!subs.includes(email)) {
                subs.push(email);
                await saveCMSData('active_subscribers', subs);
            }
        }
    },
    contactMessages: {
        get: () => getCMSData<ContactMessage[]>('active_contactMessages', []),
        add: async (msg: Omit<ContactMessage, 'id' | 'date' | 'read'>) => {
            const msgs = await getCMSData<ContactMessage[]>('active_contactMessages', []);
            const newMsg: ContactMessage = {
                ...msg,
                id: Date.now().toString(),
                date: new Date().toISOString().split('T')[0],
                read: false
            };
            await saveCMSData('active_contactMessages', [newMsg, ...msgs]);
        },
        markRead: async (id: string) => {
            const msgs = await getCMSData<ContactMessage[]>('active_contactMessages', []);
            const updated = msgs.map(m => m.id === id ? { ...m, read: true } : m);
            await saveCMSData('active_contactMessages', updated);
        }
    },
    aboutPage: {
        get: () => getCMSData<AboutPageData>('active_aboutPage', defaultAboutPageData),
        save: (data: AboutPageData) => saveCMSData('active_aboutPage', data)
    },
    promotionsPage: {
        get: () => getCMSData<PromotionsPageData>('active_promotionsPage', defaultPromotionsPageData),
        save: (data: PromotionsPageData) => saveCMSData('active_promotionsPage', data)
    },
    footer: {
        get: () => getCMSData<FooterData>('active_footer', defaultFooterData),
        save: (data: FooterData) => saveCMSData('active_footer', data)
    },
    generalPromotions: {
        get: () => getCMSData<any[]>('generalPromotions', []),
        save: (data: any[]) => saveCMSData('generalPromotions', data)
    },
    liveCasinoPromotions: {
        get: () => getCMSData<any[]>('liveCasinoPromotions', []),
        save: (data: any[]) => saveCMSData('liveCasinoPromotions', data)
    },
    sportsbookPromotions: {
        get: () => getCMSData<any[]>('sportsbookPromotions', []),
        save: (data: any[]) => saveCMSData('sportsbookPromotions', data)
    },
    blogPosts: {
        get: () => getCMSData<any[]>('blogPosts', []),
        save: (data: any[]) => saveCMSData('blogPosts', data)
    }
};
