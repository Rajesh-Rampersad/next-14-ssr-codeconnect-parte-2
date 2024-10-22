import { Comment } from "../Comment"

export const CommentList = ({ comments = [] }) => {
    return (
        <ul>
            {comments.map( comment => <li>
                    <Comment comment={comment} key={comment.id}/>
                    {/* <ReplyModal comment={comment}/>
                    <Replies /> */}
                </li> 
            )}
        </ul>
    );
}