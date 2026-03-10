import { NextRequest, NextResponse } from "next/server";
import { getBlogPosts, saveBlogPost, deleteBlogPost } from "@/lib/firestore-cms";

export async function GET() {
    const posts = await getBlogPosts();
    return NextResponse.json({ posts });
}

export async function POST(req: NextRequest) {
    const post = await req.json();
    await saveBlogPost(post);
    return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
    const { id } = await req.json();
    if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });
    await deleteBlogPost(id);
    return NextResponse.json({ success: true });
}
