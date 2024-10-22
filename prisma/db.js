import { PrismaClient } from '@prisma/client'
const db = new PrismaClient()


export async function GET() {
    try {
        const comments = await prisma.comment.findMany()
        return Response.json(comments)
    } catch (error) {
        return Response.json({ error: 'Failed to fetch comments' }, { status: 404 })
    }
}



export default db