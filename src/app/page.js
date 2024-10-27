import { CardPost } from "@/components/CardPost";

import Link from "next/link";
import db from "../../prisma/db";


async function getAllPosts(page, searchTerm) {
  try {
    const where = {};

    if (searchTerm) {
      where.title = {
        contains: searchTerm,
        mode: 'insensitive'
      };
    }

    const perPage = 4;
    const skip = (page - 1) * perPage;

    // Obtener total de posts para la paginación
    const totalItems = await db.post.count({ where });
 

    const totalPages = Math.ceil(totalItems / perPage);
    const prev = page > 1 ? page - 1 : null;
    const next = page < totalPages ? page + 1 : null;

    // Obtener posts con paginación
    const posts = await db.post.findMany({
      take: perPage,
      skip,
      where,
      orderBy: { id: 'desc' },
      include: {
        author: true,
        comments: true
        
      }
    });

    
    return { data: posts, prev, next };
  } catch (error) {
   error('Falha ao obter posts', { error });
    return { data: [], prev: null, next: null };
  }
}

export default async function Home({ searchParams }) {
  const currentPage = parseInt(searchParams?.page || "1", 10); // Asegura que 'page' sea tratado como un número
  const searchTerm = searchParams?.q || null; // Asignar null si no hay término de búsqueda



  const { data: posts, prev, next } = await getAllPosts(currentPage, searchTerm);

 

  return (
    <main className='flex-wrap justify-between gap-24 grid grid-cols-2 grid-rows-1'>
      {posts.length > 0 ? (
        posts.map((post) => (
          <CardPost key={post.id} post={post} />
        ))
      ) : (
        <p>No se encontraron publicaciones.</p> // Mensaje si no hay publicaciones
      )}
      <div className='text-center flex-grow-1'>
        {prev && (
          <Link
            className='text-left'
            href={{ pathname: '/', query: { page: prev, q: searchTerm } }}
          >
            Página anterior
          </Link>
        )}
        {next && (
          <Link
            className='mx-6 text-right'
            href={{ pathname: '/', query: { page: next, q: searchTerm } }}
          >
            Próxima página
          </Link>
        )}
      </div>
    </main>
  );
}
