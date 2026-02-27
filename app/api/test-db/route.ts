import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/lib/models/User';

export async function GET() {
    try {
        await dbConnect();

        // Creating a quick test query just to ensure the model compiles 
        // and the DB is accessible. We're not doing anything with the result.
        const userCount = await User.countDocuments();

        return NextResponse.json({
            success: true,
            message: 'Successfully connected to MongoDB!',
            stats: {
                usersInDatabase: userCount
            }
        }, { status: 200 });

    } catch (error: any) {
        console.error('MongoDB connection error:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to connect to MongoDB',
            error: error.message
        }, { status: 500 });
    }
}
