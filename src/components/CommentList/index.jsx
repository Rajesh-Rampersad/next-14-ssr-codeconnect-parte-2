import { Comment } from "../Comment"
import { ReplyModal } from "../ModalReply";
import { Replies } from "../Replies";




export const CommentList = ({ comments }) => {

    if (!comments || !Array.isArray(comments) || comments.length === 0) {
        return <p>No hay comentarios disponibles.</p>;
    }
    return (
        <section className="bg-white-600 dark:bg-gray-700  p-8 mt-10">
            <h2>Comentários</h2>
            <ul className="p-0 list-none m-0">
                {comments.map(comment => (
                    <li key={comment.id} className="py-4 border-b border-black">
                        <Comment comment={comment} />
                        <ReplyModal comment={comment}/>
                        <Replies comment={comment}/>

                    </li>
                ))}
            </ul>
        </section>
    );
};
