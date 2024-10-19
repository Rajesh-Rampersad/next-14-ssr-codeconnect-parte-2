import Image from "next/image";
import { Avatar } from "../Avatar";
import { incrementThumbsUp,postComment } from "@/actions";
import { ThumbsUpButton } from "./ThumbsUpButton";
import Link from "next/link";
import { ModalComment } from "../ModalComment";


export const CardPost = ({ post, highlight }) => {
    const submitThumbsUp = incrementThumbsUp.bind(null, post);
    return (
                <article className="w-[486px] rounded-md bg-white dark:bg-[#171D1F] min-h-[500px] flex flex-col">
                <header className="rounded-t-lg bg-slate-300 dark:bg-gray-700 p-6">
                    <figure className={`relative ${highlight ? 'h-[300px]' : 'h-[133px]'}`}>
                        <Image
                            src={post.cover}
                            objectFit="contain"
                            fill
                            alt={`Capa do post de titulo: ${post.title}`}
                        />
                    </figure>
                </header>
                <section className="flex-grow flex flex-col  text-black dark:text-white gap-16">
                    <h2 className="text-lg font-semibold leading-relaxed mb-0">{post.title}</h2>
                    <p className="text-sm font-normal leading-relaxed mb-0 flex-grow">{post.body}</p>
                    <Link href={`/posts/${post.slug}`} className="no-underline cursor-pointer" >Ver detalhes</Link>
                </section>
                <footer className="p-4 bg-gray-800  bg-transparent dark:bg-gray-700 rounded-b-lg flex justify-between items-center">
                    <div>
                        <form action={submitThumbsUp}>
                            <ThumbsUpButton />                        
                            <p>
                                {post.likes} likes
                                            
                            </p>
                        </form>
                        <div>
                          <ModalComment />
                          <p>
                            {post.comments} comments
                          </p>
                        </div>

                    </div>
                    <Avatar
                        imageSrc={post.author.avatar}
                        name={post.author.username}
                    />
                </footer>
            </article>
         
    );
};
