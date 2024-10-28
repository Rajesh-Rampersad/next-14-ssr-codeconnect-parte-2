import logger from "@/logger";
import { remark } from 'remark';
import html from 'remark-html';
import { CardPost } from "@/components/CardPost";
import db from "../../../../prisma/db";
import { redirect } from "next/navigation";
import { CommentList } from "@/components/CommentList";

async function getPostBySlug(slug) {
    try {
        const post = await db.post.findFirst({
            where: { slug },
            include: {
                author: true,
                comments: {
                    include: {
                        author: true,
                        children: {
                            include: { author: true }
                        }
                    },
                    where: { parentId: null }
                },
            },
        });

        if (!post) {
            throw new Error(`Post con el slug ${slug} no fue encontrado`);
        }

        const processedContent = await remark().use(html).process(post.markdown);
        const contentHtml = processedContent.toString();
        post.markdown = contentHtml;

        return post;
    } catch (error) {
        logger.error("Error al buscar el post por slug", { error, slug });
        redirect('/not-found');
    }
}

const PagePost = async ({ params }) => {
    // Asegúrate de que params.slug se maneje de forma asíncrona
    const { slug } = await params; // Esto debe ser await


    const post = await getPostBySlug(slug);


    if (!post) {
        return <p>Post no encontrado</p>;
    }

    return (
        <div className="max-w-[670px] p-4 bg-white dark:bg-[#171D1F] text-black dark:text-white rounded-md shadow-md">
            <CardPost post={post} highlight />
            <h3 className="w-[500px] bg-white dark:bg-[#171D1F] text-black dark:text-white p-4 rounded-md">Código:</h3>
            <div className="w-[500px] min-h-4 text-justify bg-white dark:bg-[#171D1F] text-black dark:text-white p-4 rounded-md">
                <div className="break-all" dangerouslySetInnerHTML={{ __html: post.markdown }} />
            </div>
            <div>
                <h2>Comentarios</h2>
                <div>
                    <CommentList comments={post.comments} />
                </div>
            </div>
        </div>
    );
};

export default PagePost;
