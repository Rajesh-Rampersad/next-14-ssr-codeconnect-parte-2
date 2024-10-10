import logger from "@/logger";
import { remark } from 'remark';
import html from 'remark-html';

import { CardPost } from "@/components/CardPost";
import db from "../../../../prisma/db";
import { redirect } from "next/navigation";


async function getPostBySlug(slug) {
    try {
        const post = await db.post.findFirst({
            where:
            {
                slug

            },
            include: {
                author: true
            }
        });

        if (!post) {
            throw new Error(`Post com o slug ${slug} não foi encontrado`);
        }



        const processedContent = await remark()
            .use(html)
            .process(post.markdown);
        const contentHtml = processedContent.toString();

        post.markdown = contentHtml;

        return post;
    } catch (error) {
        logger.error("Falha ao buscar post pelo slug", { error, slug });
        return null;  // ou redirecionar para uma página de erro 404 ou algo similar.

    }
    redirect('/not-found')

}

const PagePost = async ({ params }) => {
    const post = await getPostBySlug(params.slug);
    return (
        <div className="some-class">
            <CardPost post={post} highlight />
            <h3 className="text-xl font-semibold">Código:</h3>
            < div className=" bg-white dark:bg-[#171D1F] text-black dark:text-white p-4 rounded-md shadow-md " >
                <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
            </div >
        </div >
    );
};

export default PagePost;