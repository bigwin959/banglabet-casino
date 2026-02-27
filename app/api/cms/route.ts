import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Cms from '@/lib/models/Cms';

export async function GET(request: Request) {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const key = searchParams.get('key');

    if (key) {
        const item = await Cms.findOne({ key });
        // Setting Cache-Control headers to ensure no caching for frontend
        const response = NextResponse.json({ success: true, data: item ? item.data : null });
        response.headers.set('Cache-Control', 'no-cache, no-store, max-age=0, must-revalidate');
        return response;
    } else {
        const items = await Cms.find({});
        const result: Record<string, any> = {};
        for (const item of items) {
            result[item.key] = item.data;
        }
        const response = NextResponse.json({ success: true, data: result });
        response.headers.set('Cache-Control', 'no-cache, no-store, max-age=0, must-revalidate');
        return response;
    }
}

export async function POST(request: Request) {
    await dbConnect();
    const body = await request.json();
    const { key, data } = body;

    if (!key || data === undefined) {
        return NextResponse.json({ error: 'Key and data are required' }, { status: 400 });
    }

    const updated = await Cms.findOneAndUpdate(
        { key },
        { key, data },
        { upsert: true, new: true }
    );

    return NextResponse.json({ success: true, data: updated.data });
}
