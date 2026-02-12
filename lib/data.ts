// Static data for the BigWin959 website

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
    ctaLink: string;
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
    author: string;
    readTime: string;
    content: string;
    highlightBox?: string;
    subHeading?: string;
    subContent?: string;
    footerNote?: string;
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
        image: "/images/Welcome%20Bonus.jpg",
        title: "Welcome Bonus",
        discount: "100%",
        description: "Double your first deposit up to $1000",
        ctaText: "Claim Now",
        ctaLink: "/register",
    },
    {
        id: 2,
        image: "/images/Reload%20Bonus.jpg",
        title: "Reload Bonus",
        discount: "50%",
        description: "Get 50% bonus on every reload",
        ctaText: "Claim Now",
        ctaLink: "/deposit",
    },
    {
        id: 3,
        image: "/images/Weekly%20Cashback.jpg",
        title: "Weekly Cashback",
        discount: "10%",
        description: "Get 10% cashback every week",
        ctaText: "Claim Now",
        ctaLink: "/register",
    },
    {
        id: 4,
        image: "/images/Vip%20Rewards.jpg",
        title: "VIP Rewards",
        discount: "Exclusive",
        description: "Join our VIP program for exclusive benefits",
        ctaText: "Learn More",
        ctaLink: "/vip",
    },
    {
        id: 5,
        image: "/images/Referral%20Bonus.jpg",
        title: "Referral Bonus",
        discount: "$100",
        description: "Earn $100 for each friend you refer",
        ctaText: "Refer Now",
        ctaLink: "/referral",
    },
    {
        id: 6,
        image: "/images/Birthday%20Bonus.jpg",
        title: "Birthday Bonus",
        discount: "Free Spins",
        description: "Get free spins on your birthday",
        ctaText: "Claim Now",
        ctaLink: "/register",
    },
    {
        id: 7,
        image: "/images/Tournament%20Prize.jpg",
        title: "Tournament Prize",
        discount: "$10K",
        description: "Win up to $10,000 in our tournaments",
        ctaText: "Join Now",
        ctaLink: "/tournaments",
    },
    {
        id: 8,
        image: "/images/Royalty%20Points.jpg",
        title: "Loyalty Points",
        discount: "2x Points",
        description: "Earn double loyalty points this month",
        ctaText: "Play Now",
        ctaLink: "/games",
    },
    {
        id: 9,
        image: "/images/Mobile%20Bonus.jpg",
        title: "Mobile Bonus",
        discount: "$50",
        description: "Get $50 bonus when you play on mobile",
        ctaText: "Claim Now",
        ctaLink: "/download",
    },
    {
        id: 10,
        image: "/images/Weekend%20Bonus.jpg",
        title: "Weekend Boost",
        discount: "25%",
        description: "Get 25% extra on weekend deposits",
        ctaText: "Claim Now",
        ctaLink: "/register",
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
        author: "Elite Staff",
        readTime: "5 Min Read",
        content: "Blackjack is a game of skill as much as it is a game of chance. To consistently win, one must understand the probabilities and employ basic strategy. This guide covers card counting, bankroll management, and when to hit or stand.",
        highlightBox: "Success in Blackjack depends on discipline. Never chase losses.",
        subHeading: "Mastering the Count",
        subContent: "Card counting is not illegal, but casinos frown upon it. Learn the HI-LO system to gain an edge.",
        footerNote: "Gamble responsibly."
    },
    {
        id: 2,
        image: "/images/game-placeholder.svg",
        title: "Understanding Sports Betting Odds",
        excerpt: "A comprehensive guide to understanding and calculating betting odds...",
        date: "2026-01-22",
        category: "Guides",
        author: "Elite Staff",
        readTime: "4 Min Read",
        content: "At BigWin959, we are dedicated to providing our community with the most up-to-date and thoroughly researched intelligence in the gaming industry. Our analysts have spent countless hours dissecting the mechanics behind understanding sports betting odds to ensure you have the competitive edge.",
        highlightBox: "\"Success in guides isn't just about luck; it's about understanding the internal rhythms of the platform and executing with precision.\"",
        subHeading: "Operational Execution",
        subContent: "Every strategy mentioned in our archive is tested against the current market conditions. We monitor the operational health of all our features 24/7 to guarantee that when you choose to act, you do so on a platform that is optimized for excellence.",
        footerNote: "Note: Information contained within this report is proprietary to BigWin959 and is intended for registered users of the elite platform."
    },
    {
        id: 3,
        image: "/images/game-placeholder.svg",
        title: "New VIP Program Launched",
        excerpt: "We're excited to announce our new VIP program with exclusive benefits...",
        date: "2026-01-20",
        category: "News",
        author: "BigWin Team",
        readTime: "3 Min Read",
        content: "Our most loyal players deserve the best. That's why we've overhauled our VIP program to offer faster withdrawals, higher limits, and personal account managers.",
        subHeading: "Exclusive Perks",
        subContent: "VIP members now get access to exclusive tournaments and birthday bonuses.",
    },
];
