import { NextRequest, NextResponse } from "next/server";
import { getPromotions, savePromotion, deletePromotion } from "@/lib/firestore-cms";

export async function GET(req: NextRequest) {
    const type = (req.nextUrl.searchParams.get("type") || "general") as "live" | "sports" | "general";
    const promos = await getPromotions(type);
    return NextResponse.json({ promos });
}

export async function POST(req: NextRequest) {
    const { type, promo } = await req.json();
    await savePromotion(type, promo);
    return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
    const { type, id } = await req.json();
    if (!type || !id) return NextResponse.json({ error: "type and id required" }, { status: 400 });
    await deletePromotion(type, id);
    return NextResponse.json({ success: true });
}
