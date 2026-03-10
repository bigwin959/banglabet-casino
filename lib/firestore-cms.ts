/**
 * firestore-cms.ts
 * Async Firestore CRUD for every CMS section.
 * Replaces localStorage as the persistence layer.
 */
import {
    doc, getDoc, setDoc, collection,
    getDocs, addDoc, deleteDoc, updateDoc, query, orderBy, Timestamp
} from "firebase/firestore";
import { db } from "./firebase";
import type {
    SiteSettings, FeaturedContent, DiamondLobbyItem, HomeBlogSettings,
    PageContentLiveCasino, ContactMessage, AboutPageData, PromotionsPageData, FooterData
} from "./cms";

// ─── Generic CMS Document Helpers ────────────────────────────────────────────

async function getCmsSection<T>(section: string, fallback: T): Promise<T> {
    try {
        const ref = doc(db, "cms", section);
        const snap = await getDoc(ref);
        if (snap.exists()) return snap.data() as T;
        return fallback;
    } catch (e) {
        console.error(`[Firestore] getCmsSection ${section}:`, e);
        return fallback;
    }
}

async function setCmsSection<T extends object>(section: string, data: T): Promise<void> {
    try {
        const ref = doc(db, "cms", section);
        await setDoc(ref, data);
    } catch (e) {
        console.error(`[Firestore] setCmsSection ${section}:`, e);
    }
}

// ─── Blog Posts ───────────────────────────────────────────────────────────────

export async function getBlogPosts(): Promise<any[]> {
    try {
        const col = collection(db, "blog_posts");
        const snap = await getDocs(query(col, orderBy("date", "desc")));
        return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    } catch (e) {
        console.error("[Firestore] getBlogPosts:", e);
        return [];
    }
}

export async function saveBlogPost(post: any): Promise<void> {
    try {
        if (post.id && typeof post.id === "string" && post.id.length > 10) {
            // Existing Firestore doc
            const ref = doc(db, "blog_posts", post.id);
            const { id, ...rest } = post;
            await setDoc(ref, rest);
        } else {
            // New post — use addDoc
            const { id, ...rest } = post;
            await addDoc(collection(db, "blog_posts"), rest);
        }
    } catch (e) {
        console.error("[Firestore] saveBlogPost:", e);
    }
}

export async function deleteBlogPost(id: string): Promise<void> {
    try {
        await deleteDoc(doc(db, "blog_posts", id));
    } catch (e) {
        console.error("[Firestore] deleteBlogPost:", e);
    }
}

// ─── Promotions ───────────────────────────────────────────────────────────────

export async function getPromotions(type: "live" | "sports" | "general"): Promise<any[]> {
    try {
        const col = collection(db, `promotions_${type}`);
        const snap = await getDocs(col);
        return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    } catch (e) {
        console.error(`[Firestore] getPromotions(${type}):`, e);
        return [];
    }
}

export async function savePromotion(type: "live" | "sports" | "general", promo: any): Promise<void> {
    try {
        const colPath = `promotions_${type}`;
        if (promo.id && typeof promo.id === "string" && promo.id.length > 10) {
            const ref = doc(db, colPath, promo.id);
            const { id, ...rest } = promo;
            await setDoc(ref, rest);
        } else {
            const { id, ...rest } = promo;
            await addDoc(collection(db, colPath), rest);
        }
    } catch (e) {
        console.error(`[Firestore] savePromotion(${type}):`, e);
    }
}

export async function deletePromotion(type: "live" | "sports" | "general", id: string): Promise<void> {
    try {
        await deleteDoc(doc(db, `promotions_${type}`, id));
    } catch (e) {
        console.error(`[Firestore] deletePromotion(${type}):`, e);
    }
}

// ─── Contact Messages ─────────────────────────────────────────────────────────

export async function getContactMessages(): Promise<ContactMessage[]> {
    try {
        const col = collection(db, "contact_messages");
        const snap = await getDocs(query(col, orderBy("date", "desc")));
        return snap.docs.map(d => ({ id: d.id, ...d.data() } as ContactMessage));
    } catch (e) {
        console.error("[Firestore] getContactMessages:", e);
        return [];
    }
}

export async function saveContactMessage(msg: Omit<ContactMessage, "id" | "date" | "read">): Promise<void> {
    try {
        await addDoc(collection(db, "contact_messages"), {
            ...msg,
            date: new Date().toISOString().split("T")[0],
            read: false,
        });
    } catch (e) {
        console.error("[Firestore] saveContactMessage:", e);
    }
}

export async function markMessageRead(id: string): Promise<void> {
    try {
        await updateDoc(doc(db, "contact_messages", id), { read: true });
    } catch (e) {
        console.error("[Firestore] markMessageRead:", e);
    }
}

// ─── Subscribers ──────────────────────────────────────────────────────────────

export async function addSubscriber(email: string): Promise<void> {
    try {
        await addDoc(collection(db, "subscribers"), {
            email,
            date: new Date().toISOString(),
        });
    } catch (e) {
        console.error("[Firestore] addSubscriber:", e);
    }
}

export async function getSubscribers(): Promise<string[]> {
    try {
        const snap = await getDocs(collection(db, "subscribers"));
        return snap.docs.map(d => (d.data() as any).email);
    } catch (e) {
        console.error("[Firestore] getSubscribers:", e);
        return [];
    }
}

// ─── Home Banners ─────────────────────────────────────────────────────────────

export async function getHomeBanners(): Promise<any[]> {
    const fallback = [
        { id: "3", image: "/images/hero-3.jpg", title: "Premium Classic Gaming", link: "https://www.bigwin959.com/register" },
        { id: "1", image: "/images/hero-1.jpg", title: "Ultimate Casino Experience", link: "https://www.bigwin959.com/register" },
    ];
    const result = await getCmsSection<{ items: any[] }>("homeBanners", { items: fallback });
    return result.items ?? fallback;
}

export async function saveHomeBanners(items: any[]): Promise<void> {
    await setCmsSection("homeBanners", { items });
}

// ─── Site Settings ────────────────────────────────────────────────────────────

export const firestoreCms = {
    siteSettings: {
        get: (fallback: SiteSettings) => getCmsSection<SiteSettings>("siteSettings", fallback),
        save: (data: SiteSettings) => setCmsSection("siteSettings", data),
    },
    featuredContent: {
        get: (fallback: FeaturedContent[]) => getCmsSection<{ items: FeaturedContent[] }>("featuredContent", { items: fallback }).then(r => r.items ?? fallback),
        save: (data: FeaturedContent[]) => setCmsSection("featuredContent", { items: data }),
    },
    diamondLobby: {
        get: (fallback: DiamondLobbyItem[]) => getCmsSection<{ items: DiamondLobbyItem[] }>("diamondLobby", { items: fallback }).then(r => r.items ?? fallback),
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
        get: (fallback: string[]) => getCmsSection<{ items: string[] }>("blogCategories", { items: fallback }).then(r => r.items ?? fallback),
        save: (data: string[]) => setCmsSection("blogCategories", { items: data }),
    },
};
