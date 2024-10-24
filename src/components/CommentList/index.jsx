import React from 'react';

export const CommentList = ({ comment }) => {
  return (
    <div>
      <p><strong>{comment.author.name}</strong></p>
      <p>{comment.text}</p>
      <img src={comment.author.avatar} alt={comment.author.name} width="50" />
      {comment.children.length > 0 && (
        <ul>
          {comment.children.map(childComment => (
            <li key={childComment.id}>
              <Comment comment={childComment} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};