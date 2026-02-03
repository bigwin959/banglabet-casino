// Static data for the BanglaBet Casino website

export interface Banner {
    id: number;
    image: string;
    title: string;
    description: string;
    link: string;
}

export interface Promotion {
    id: number;
    image: string;
    title: string;
    discount: string;
    description: string;
    ctaText: string;
}

export interface Agent {
    id: number;
    logo: string;
    name: string;
    description: string;
    gameCount: number;
}

export interface Sport {
    id: number;
    name: string;
    icon: string;
    activeEvents: number;
}

export interface BlogPost {
    id: number;
    image: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
}

export const banners: Banner[] = [
    {
        id: 1,
        image: "/images/banner-placeholder.svg",
        title: "Welcome Bonus 100%",
        description: "Get up to $1000 on your first deposit",
        link: "/promotions",
    },
    {
        id: 2,
        image: "/images/banner-placeholder.svg",
        title: "Live Casino Cashback",
        description: "10% cashback on all live casino games",
        link: "/live-casino",
    },
    {
        id: 3,
        image: "/images/banner-placeholder.svg",
        title: "Sports Betting Bonus",
        description: "Free bet up to $500 for new players",
        link: "/sportsbook",
    },
];

export const promotions: Promotion[] = [
    {
        id: 1,
        image: "/images/game-placeholder.svg",
        title: "Welcome Bonus",
        discount: "100%",
        description: "Double your first deposit up to $1000",
        ctaText: "Claim Now",
    },
    {
        id: 2,
        image: "/images/game-placeholder.svg",
        title: "Reload Bonus",
        discount: "50%",
        description: "Get 50% bonus on every reload",
        ctaText: "Claim Now",
    },
    {
        id: 3,
        image: "/images/game-placeholder.svg",
        title: "Weekly Cashback",
        discount: "10%",
        description: "Get 10% cashback every week",
        ctaText: "Claim Now",
    },
    {
        id: 4,
        image: "/images/game-placeholder.svg",
        title: "VIP Rewards",
        discount: "Exclusive",
        description: "Join our VIP program for exclusive benefits",
        ctaText: "Learn More",
    },
    {
        id: 5,
        image: "/images/game-placeholder.svg",
        title: "Referral Bonus",
        discount: "$100",
        description: "Earn $100 for each friend you refer",
        ctaText: "Refer Now",
    },
    {
        id: 6,
        image: "/images/game-placeholder.svg",
        title: "Birthday Bonus",
        discount: "Free Spins",
        description: "Get free spins on your birthday",
        ctaText: "Claim Now",
    },
    {
        id: 7,
        image: "/images/game-placeholder.svg",
        title: "Tournament Prize",
        discount: "$10K",
        description: "Win up to $10,000 in our tournaments",
        ctaText: "Join Now",
    },
    {
        id: 8,
        image: "/images/game-placeholder.svg",
        title: "Loyalty Points",
        discount: "2x Points",
        description: "Earn double loyalty points this month",
        ctaText: "Play Now",
    },
    {
        id: 9,
        image: "/images/game-placeholder.svg",
        title: "Mobile Bonus",
        discount: "$50",
        description: "Get $50 bonus when you play on mobile",
        ctaText: "Claim Now",
    },
    {
        id: 10,
        image: "/images/game-placeholder.svg",
        title: "Weekend Boost",
        discount: "25%",
        description: "Get 25% extra on weekend deposits",
        ctaText: "Claim Now",
    },
];

export const agents: Agent[] = [
    {
        id: 1,
        logo: "/images/game-placeholder.svg",
        name: "Evolution Gaming",
        description: "The world's leading live casino provider with professional dealers and HD streaming",
        gameCount: 150,
    },
    {
        id: 2,
        logo: "/images/game-placeholder.svg",
        name: "Sexy Gaming",
        description: "Premium live casino experience with beautiful dealers and exclusive games",
        gameCount: 80,
    },
    {
        id: 3,
        logo: "/images/game-placeholder.svg",
        name: "Playtech",
        description: "Industry-leading casino software with innovative games and features",
        gameCount: 200,
    },
];

export const sports: Sport[] = [
    { id: 1, name: "Football", icon: "⚽", activeEvents: 245 },
    { id: 2, name: "Cricket", icon: "🏏", activeEvents: 89 },
    { id: 3, name: "Basketball", icon: "🏀", activeEvents: 156 },
    { id: 4, name: "Tennis", icon: "🎾", activeEvents: 78 },
    { id: 5, name: "Baseball", icon: "⚾", activeEvents: 92 },
    { id: 6, name: "Ice Hockey", icon: "🏒", activeEvents: 45 },
];

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        image: "/images/game-placeholder.svg",
        title: "Top 10 Strategies for Winning at Blackjack",
        excerpt: "Learn the best strategies to increase your chances of winning at blackjack...",
        date: "2026-01-25",
        category: "Gaming Tips",
    },
    {
        id: 2,
        image: "/images/game-placeholder.svg",
        title: "Understanding Sports Betting Odds",
        excerpt: "A comprehensive guide to understanding and calculating betting odds...",
        date: "2026-01-22",
        category: "Guides",
    },
    {
        id: 3,
        image: "/images/game-placeholder.svg",
        title: "New VIP Program Launched",
        excerpt: "We're excited to announce our new VIP program with exclusive benefits...",
        date: "2026-01-20",
        category: "News",
    },
];
