import { NextResponse } from 'next/server';
import db from '../../../../../../prisma/db'; // Adjust according to your project structure

export async function GET(request, { params }) {
    const { id } = params; // Get the comment ID from the URL
    const replies = await db.comment.findMany({
        where: {
            parentId: parseInt(id) // Assuming parentId is the field that relates replies to comments
        }
    });

    // Return an empty array if no replies are found
    return NextResponse.json(replies);
}