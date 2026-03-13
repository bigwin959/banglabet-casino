/**
 * lib/firestore-cms.ts
 *
 * CMS CRUD operations using the Firestore REST API.
 * Works reliably in all serverless environments (Netlify, Vercel, Edge).
 * No SDK timeout issues.
 */

import {
    listDocs, getDoc, getCmsDoc, setDoc, setCmsDoc,
    addDoc, deleteDoc
} from "./firestore-rest";

import type {
    SiteSettings, FeaturedContent, DiamondLobbyItem, HomeBlogSettings,
    PageContentLiveCasino, ContactMessage, AboutPageData, PromotionsPageData, FooterData
} from "./cms";

// ─── Generic CMS Document Helpers ────────────────────────────────────────────

async function getCmsSection<T>(section: string, fallback: T): Promise<T> {
    try {
        const doc = await getCmsDoc(section);
        if (doc) {
            const { id: _, ...data } = doc;
            return data as T;
        }
        return fallback;
    } catch (e) {
        console.error(`[Firestore REST] getCmsSection ${section}:`, e);
        return fallback;
    }
}

async function setCmsSection<T extends object>(section: string, data: T): Promise<void> {
    try {
        await setCmsDoc(section, data as Record<string, unknown>);
    } catch (e) {
        console.error(`[Firestore REST] setCmsSection ${section}:`, e);
    }
}

// ─── Blog Posts ───────────────────────────────────────────────────────────────

export async function getBlogPosts(): Promise<any[]> {
    try {
        const docs = await listDocs("blog_posts");
        return docs.sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
    } catch (e) {
        console.error("[Firestore REST] getBlogPosts:", e);
        return [];
    }
}

export async function saveBlogPost(post: any): Promise<string> {
    try {
        const { id, ...rest } = post;
        // If we have a real Firestore string ID (>10 chars), update existing
        if (id && typeof id === "string" && id.length > 10) {
            await setDoc("blog_posts", id, rest);
            return id;
        }
        // New post — addDoc generates a Firestore ID
        return await addDoc("blog_posts", rest);
    } catch (e) {
        console.error("[Firestore REST] saveBlogPost:", e);
        return "";
    }
}

export async function deleteBlogPost(id: string): Promise<void> {
    try {
        await deleteDoc("blog_posts", id);
    } catch (e) {
        console.error("[Firestore REST] deleteBlogPost:", e);
    }
}

// ─── Promotions ───────────────────────────────────────────────────────────────

export async function getPromotions(type: "live" | "sports" | "general"): Promise<any[]> {
    try {
        return await listDocs(`promotions_${type}`);
    } catch (e) {
        console.error(`[Firestore REST] getPromotions(${type}):`, e);
        return [];
    }
}

export async function savePromotion(type: "live" | "sports" | "general", promo: any): Promise<string> {
    try {
        const { id, ...rest } = promo;
        const col = `promotions_${type}`;
        if (id && typeof id === "string" && id.length > 10) {
            await setDoc(col, id, rest);
            return id;
        }
        return await addDoc(col, rest);
    } catch (e) {
        console.error(`[Firestore REST] savePromotion(${type}):`, e);
        return "";
    }
}

export async function deletePromotion(type: "live" | "sports" | "general", id: string): Promise<void> {
    try {
        await deleteDoc(`promotions_${type}`, id);
    } catch (e) {
        console.error(`[Firestore REST] deletePromotion(${type}):`, e);
    }
}

// ─── Contact Messages ─────────────────────────────────────────────────────────

export async function getContactMessages(): Promise<ContactMessage[]> {
    try {
        const docs = await listDocs("contact_messages");
        return docs.sort((a, b) =>
            (b.date ?? "").localeCompare(a.date ?? "")
        ) as ContactMessage[];
    } catch (e) {
        console.error("[Firestore REST] getContactMessages:", e);
        return [];
    }
}

export async function saveContactMessage(msg: Omit<ContactMessage, "id" | "date" | "read">): Promise<void> {
    try {
        await addDoc("contact_messages", {
            ...msg,
            date: new Date().toISOString().split("T")[0],
            read: false,
        });
    } catch (e) {
        console.error("[Firestore REST] saveContactMessage:", e);
    }
}

export async function markMessageRead(id: string): Promise<void> {
    try {
        const existing = await getDoc("contact_messages", id);
        if (existing) {
            const { id: _, ...rest } = existing;
            await setDoc("contact_messages", id, { ...rest, read: true });
        }
    } catch (e) {
        console.error("[Firestore REST] markMessageRead:", e);
    }
}

export async function deleteContactMessage(id: string): Promise<void> {
    try {
        await deleteDoc("contact_messages", id);
    } catch (e) {
        console.error("[Firestore REST] deleteContactMessage:", e);
    }
}

// ─── Subscribers ──────────────────────────────────────────────────────────────

export async function addSubscriber(email: string): Promise<void> {
    try {
        await addDoc("subscribers", {
            email,
            date: new Date().toISOString(),
        });
    } catch (e) {
        console.error("[Firestore REST] addSubscriber:", e);
    }
}

export async function getSubscribers(): Promise<{ id: string; email: string }[]> {
    try {
        const docs = await listDocs("subscribers");
        return docs.map(d => ({ id: d.id, email: d.email ?? "" }));
    } catch (e) {
        console.error("[Firestore REST] getSubscribers:", e);
        return [];
    }
}

export async function deleteSubscriber(id: string): Promise<void> {
    try {
        await deleteDoc("subscribers", id);
    } catch (e) {
        console.error("[Firestore REST] deleteSubscriber:", e);
    }
}

// ─── Home Banners ─────────────────────────────────────────────────────────────

export async function getHomeBanners(): Promise<any[]> {
    const fallback = [
        { id: "1", image: "/images/hero-1.jpg", title: "Ultimate Casino Experience", link: "https://www.bigwin959.com/register", imageOnly: true },
        { id: "2", image: "/images/hero-2.jpg", title: "Live Casino Thrills", link: "https://www.bigwin959.com/register", imageOnly: true },
    ];
    const result = await getCmsSection<{ items: any[] }>("homeBanners", { items: fallback });
    return result.items ?? fallback;
}

export async function saveHomeBanners(items: any[]): Promise<void> {
    await setCmsSection("homeBanners", { items });
}

// ─── firestoreCms namespace ───────────────────────────────────────────────────

export const firestoreCms = {
    siteSettings: {
        get: (fallback: SiteSettings) => getCmsSection<SiteSettings>("siteSettings", fallback),
        save: (data: SiteSettings) => setCmsSection("siteSettings", data),
    },
    featuredContent: {
        get: (fallback: FeaturedContent[]) =>
            getCmsSection<{ items: FeaturedContent[] }>("featuredContent", { items: fallback }).then(r => r.items ?? fallback),
        save: (data: FeaturedContent[]) => setCmsSection("featuredContent", { items: data }),
    },
    diamondLobby: {
        get: (fallback: DiamondLobbyItem[]) =>
            getCmsSection<{ items: DiamondLobbyItem[] }>("diamondLobby", { items: fallback }).then(r => r.items ?? fallback),
        save: (data: DiamondLobbyItem[]) => setCmsSection("diamondLobby", { items: data }),
    },
    homeBlog: {
        get: (fallback: HomeBlogSettings) => getCmsSection<HomeBlogSettings>("homeBlog", fallback),
        save: (data: HomeBlogSettings) => setCmsSection("homeBlog", data),
    },
    liveCasino: {
        get: (fallback: PageContentLiveCasino) => getCmsSection<PageContentLiveCasino>("liveCasino", fallback),
        save: (data: PageContentLiveCasino) => setCmsSection("liveCasino", data),
    },
    aboutPage: {
        get: (fallback: AboutPageData) => getCmsSection<AboutPageData>("aboutPage", fallback),
        save: (data: AboutPageData) => setCmsSection("aboutPage", data),
    },
    promotionsPage: {
        get: (fallback: PromotionsPageData) => getCmsSection<PromotionsPageData>("promotionsPage", fallback),
        save: (data: PromotionsPageData) => setCmsSection("promotionsPage", data),
    },
    footer: {
        get: (fallback: FooterData) => getCmsSection<FooterData>("footer", fallback),
        save: (data: FooterData) => setCmsSection("footer", data),
    },
    blogCategories: {
        get: (fallback: string[]) =>
            getCmsSection<{ items: string[] }>("blogCategories", { items: fallback }).then(r => r.items ?? fallback),
        save: (data: string[]) => setCmsSection("blogCategories", { items: data }),
    },
};
