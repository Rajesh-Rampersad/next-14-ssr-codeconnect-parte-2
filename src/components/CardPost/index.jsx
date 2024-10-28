import Image from "next/image";
import { Avatar } from "../Avatar";
import { incrementThumbsUp, postComment } from "@/actions";
import { ThumbsUpButton } from "./ThumbsUpButton";
import Link from "next/link";
import { ModalComment } from "../ModalComment";

export const CardPost = ({ post, highlight }) => {
    // Bind actions to the specific post
    const submitThumbsUp = incrementThumbsUp.bind(null, post);
    const submitComment = postComment.bind(null, post);

    // Get the number of comments safely
    const commentCount = Array.isArray(post.comments) ? post.comments.length : 0;

    return (
        <article className="w-[490px] rounded-md bg-white dark:bg-[#171D1F] min-h-[500px] flex flex-col">
            <header className="rounded-t-lg bg-slate-300 dark:bg-gray-700 p-6">
                <figure className={`relative ${highlight ? 'h-[300px]' : 'h-[133px]'}`}>
                    <Image
                        src={post.cover}
                        alt={`Capa do post de título: ${post.title}`}
                        fill
                        className="object-cover" // Aplicar estilo aquí
                        style={{ objectFit: 'cover' }}
                    />
                </figure>
            </header>
            <section className="flex-grow flex flex-col text-black dark:text-white gap-8">
                <h2 className="text-lg font-semibold leading-relaxed mb-0">{post.title}</h2>
                <p className="text-sm font-normal leading-relaxed mb-0 flex-grow">{post.body}</p>
                <Link href={`/posts/${post.slug}`} className="no-underline cursor-pointer">Ver detalhes</Link>
            </section>
            <footer className="p-4 bg-white-600 dark:bg-gray-700 rounded-b-lg flex justify-between items-center">
                <div>
                    {/* Form for thumbs up */}
                    <form className="flex" action={submitThumbsUp}>
                        <ThumbsUpButton />                        
                        <p>{post.likes} likes</p>
                    </form>

                    {/* Comment section */}
                    <div>
                        <ModalComment action={submitComment} />
                        <p>{commentCount} comentários</p>
                    </div>
                </div>
                {post.author && (
                    <Avatar
                        imageSrc={post.author.avatar}
                        name={post.author.username}
                    />
                )}
            </footer>
        </article>
    );
};
