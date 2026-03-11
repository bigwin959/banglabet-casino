import { NextRequest, NextResponse } from "next/server";
import { firestoreCms, saveHomeBanners, getHomeBanners, addSubscriber, getSubscribers, deleteSubscriber } from "@/lib/firestore-cms";
import {
    defaultSiteSettings, defaultFeaturedContent, defaultDiamondLobby,
    defaultHomeBlogSettings, defaultLiveCasinoContent, defaultAboutPageData,
    defaultPromotionsPageData, defaultFooterData, defaultBlogCategories
} from "@/lib/cms-defaults";

export const dynamic = 'force-dynamic';

const sectionHandlers: Record<string, { get: () => Promise<any>; save: (d: any) => Promise<void> }> = {
    siteSettings: {
        get: () => firestoreCms.siteSettings.get(defaultSiteSettings),
        save: (d) => firestoreCms.siteSettings.save(d),
    },
    featuredContent: {
        get: () => firestoreCms.featuredContent.get(defaultFeaturedContent),
        save: (d) => firestoreCms.featuredContent.save(d),
    },
    diamondLobby: {
        get: () => firestoreCms.diamondLobby.get(defaultDiamondLobby),
        save: (d) => firestoreCms.diamondLobby.save(d),
    },
    homeBlog: {
        get: () => firestoreCms.homeBlog.get(defaultHomeBlogSettings),
        save: (d) => firestoreCms.homeBlog.save(d),
    },
    liveCasino: {
        get: () => firestoreCms.liveCasino.get(defaultLiveCasinoContent),
        save: (d) => firestoreCms.liveCasino.save(d),
    },
    aboutPage: {
        get: () => firestoreCms.aboutPage.get(defaultAboutPageData),
        save: (d) => firestoreCms.aboutPage.save(d),
    },
    promotionsPage: {
        get: () => firestoreCms.promotionsPage.get(defaultPromotionsPageData),
        save: (d) => firestoreCms.promotionsPage.save(d),
    },
    footer: {
        get: () => firestoreCms.footer.get(defaultFooterData),
        save: (d) => firestoreCms.footer.save(d),
    },
    blogCategories: {
        get: () => firestoreCms.blogCategories.get(defaultBlogCategories),
        save: (d) => firestoreCms.blogCategories.save(d),
    },
    homeBanners: {
        get: () => getHomeBanners(),
        save: (d) => saveHomeBanners(d),
    },
    subscribers: {
        get: () => getSubscribers(),
        save: async () => { /* bulk save not needed */ },
    },
};

export async function GET(req: NextRequest) {
    const section = req.nextUrl.searchParams.get("section");
    if (!section || !sectionHandlers[section]) {
        return NextResponse.json({ error: "Invalid section" }, { status: 400 });
    }
    const data = await sectionHandlers[section].get();
    return NextResponse.json({ data });
}

export async function POST(req: NextRequest) {
    const { section, data } = await req.json();
    if (!section || !sectionHandlers[section]) {
        return NextResponse.json({ error: "Invalid section" }, { status: 400 });
    }
    if (section === "subscribers") {
        await addSubscriber(data);
    } else {
        await sectionHandlers[section].save(data);
    }
    return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
    const { section, id } = await req.json();
    if (section === "subscribers" && id) {
        await deleteSubscriber(id);
        return NextResponse.json({ success: true });
    }
    return NextResponse.json({ error: "Invalid delete request" }, { status: 400 });
}
