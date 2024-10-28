// Comment.js
import Image from 'next/image';

export const Comment = ({ comment }) => {
const { text, createdAt, author } = comment



    
    return (
        
        <div className="flex text-center gap-8">
            <Image 
                src={comment.author?.avatar }
                width={32} 
                height={32} 
                alt={comment.author?.name ? `Avatar de ${comment.author.name}` : 'Avatar de un usuario anónimo'} 
                style={{ objectFit: 'cover' }}
            />
            <strong>@{comment.author?.name || 'Usuario Anónimo'}</strong>
            <p>{comment.text}</p>
            <span>{new Date(comment.createdAt).toLocaleString()}</span>

        </div>
    );
};
