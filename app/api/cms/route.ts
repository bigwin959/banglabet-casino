import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

// Local file database for development/testing without setting up MongoDB
const DB_PATH = path.join(process.cwd(), 'cms-data.json');

async function getDb() {
    try {
        const data = await fs.readFile(DB_PATH, 'utf-8');
        return JSON.parse(data);
    } catch (e: any) {
        if (e.code === 'ENOENT') {
            await fs.writeFile(DB_PATH, JSON.stringify({}));
            return {};
        }
        console.error("Local JSON DB Parse error:", e);
        return null;
    }
}

async function saveDb(data: any) {
    await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
}

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const key = searchParams.get('key');
        
        const db = await getDb();
        if (!db) {
            return NextResponse.json({ success: false, data: null, error: "Database offline" });
        }

        if (key) {
            const data = db[key] !== undefined ? db[key] : null;
            const response = NextResponse.json({ success: true, data });
            response.headers.set('Cache-Control', 'no-cache, no-store, max-age=0, must-revalidate');
            return response;
        } else {
            const response = NextResponse.json({ success: true, data: db });
            response.headers.set('Cache-Control', 'no-cache, no-store, max-age=0, must-revalidate');
            return response;
        }
    } catch (e) {
        console.error("Database Error:", e);
        return NextResponse.json({ success: false, data: null, error: "Database offline" });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { key, data } = body;

        if (!key || data === undefined) {
            return NextResponse.json({ error: 'Key and data are required' }, { status: 400 });
        }

        const db = await getDb();
        if (!db) {
            return NextResponse.json({ success: false, error: "Database offline" });
        }

        db[key] = data;
        await saveDb(db);

        return NextResponse.json({ success: true, data });
    } catch (e) {
        console.error("Database Error (POST):", e);
        return NextResponse.json({ success: false, error: "Database offline" });
    }
}
