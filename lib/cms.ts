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

// --- Helper Functions ---

// Generic get function with default fallback
function getCMSData<T>(key: string, defaultValue: T): T {
    if (typeof window === 'undefined') return defaultValue;
    const stored = localStorage.getItem(key);
    if (!stored) return defaultValue;
    try {
        return JSON.parse(stored);
    } catch (e) {
        console.error(`Error parsing CMS data for key ${key}`, e);
        return defaultValue;
    }
}

// Generic save function
function saveCMSData<T>(key: string, data: T): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(key, JSON.stringify(data));
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
        add: (email: string) => {
            const subs = getCMSData<string[]>('active_subscribers', []);
            if (!subs.includes(email)) {
                subs.push(email);
                saveCMSData('active_subscribers', subs);
            }
        }
    },
    contactMessages: {
        get: () => getCMSData<ContactMessage[]>('active_contactMessages', []),
        add: (msg: Omit<ContactMessage, 'id' | 'date' | 'read'>) => {
            const msgs = getCMSData<ContactMessage[]>('active_contactMessages', []);
            const newMsg: ContactMessage = {
                ...msg,
                id: Date.now().toString(),
                date: new Date().toISOString().split('T')[0],
                read: false
            };
            saveCMSData('active_contactMessages', [newMsg, ...msgs]);
        },
        markRead: (id: string) => {
            const msgs = getCMSData<ContactMessage[]>('active_contactMessages', []);
            const updated = msgs.map(m => m.id === id ? { ...m, read: true } : m);
            saveCMSData('active_contactMessages', updated);
        }
    }
};
