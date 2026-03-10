import { NextRequest, NextResponse } from "next/server";
import { saveContactMessage, getContactMessages, markMessageRead } from "@/lib/firestore-cms";

export async function GET() {
    const messages = await getContactMessages();
    return NextResponse.json({ messages });
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { action, id, name, email, subject, message } = body;

    if (action === "markRead") {
        if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });
        await markMessageRead(id);
        return NextResponse.json({ success: true });
    }

    await saveContactMessage({ name, email, subject, message });
    return NextResponse.json({ success: true });
}
