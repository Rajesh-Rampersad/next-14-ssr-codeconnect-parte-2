
import { CardPost } from "@/components/CardPost"
import logger from "@/logger"
import Link from "next/link"
import db from "../../prisma/db"



async function getAllPosts(page, searchTerm) {
  try {
    const where = {}

    if (searchTerm) {
      where.title = {
        contains: searchTerm,
        mode: 'insensitive'
      }
    }


    const perPage = 4;
    const skip = (page - 1) * perPage;
    const totalItems = await db.post.count({ where })
    const totalPages = Math.ceil(totalItems / perPage)
    const prev = page > 1 ? page - 1 : null
    const next = page < totalPages ? page + 1 : null

    const posts = await db.post.findMany({
      take: perPage,
      skip,
      where,
      orderBy: { id: 'desc' },
      include: {
        author: true,
        // comments: true
      }
    })

    return { data: posts, prev, next }

  } catch (error) {
    logger.error('Falha ao obter posts', { error })
    return { data: [], prev: null, next: null }
  }
}

export default async function Home({ searchParams }) {
  const currentPage = parseInt(searchParams?.page || 1)
  const searchTerm = searchParams?.q
  const { data: posts, prev, next } = await getAllPosts(currentPage, searchTerm)
  return (
    <main className='flex-wrap justify-between gap-24 grid grid-cols-2 grid-rows-1'>
      {posts.map(post => <CardPost key={post.id} post={post} />)}
      <div className='text-center flex-grow-1'>
        {prev && <Link className=' text-left' href={{ pathname: '/', query: { page: prev, q: searchTerm } }}>Página anterior</Link>}
        {next && <Link className='mx-6 text-right' href={{ pathname: '/', query: { page: next, q: searchTerm } }}>Próxima página</Link>}
      </div>
    </main>
  )
}