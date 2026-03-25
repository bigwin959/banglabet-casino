import { NextResponse } from "next/server";
import { listDocs } from "@/lib/firestore-rest";

export const dynamic = "force-dynamic";

export async function GET() {
    const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
    const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

    const config = {
        projectId: projectId ?? "❌ NOT SET",
        apiKey: apiKey ? `✅ set (ends in ...${apiKey.slice(-6)})` : "❌ NOT SET",
        firestoreUrl: `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents`,
    };

    const results: Record<string, any> = { config };

    // Test reading each relevant collection
    const collections = ["blog_posts", "promotions_sports", "promotions_live", "promotions_general", "cms"];
    for (const col of collections) {
        try {
            const docs = await listDocs(col);
            results[col] = { status: "✅ OK", count: docs.length };
        } catch (e: any) {
            results[col] = { status: "❌ ERROR", error: e?.message };
        }
    }

    // Test a write to Firestore
    try {
        const { addDoc } = await import("@/lib/firestore-rest");
        const id = await addDoc("_diagnostic_test", { timestamp: new Date().toISOString(), test: true });
        results.writeTest = { status: "✅ Write OK", id };
        // Clean up
        const { deleteDoc } = await import("@/lib/firestore-rest");
        await deleteDoc("_diagnostic_test", id);
        results.writeTest.cleanup = "✅ Deleted";
    } catch (e: any) {
        results.writeTest = { status: "❌ Write FAILED", error: e?.message };
    }

    return NextResponse.json(results, { status: 200 });
}
