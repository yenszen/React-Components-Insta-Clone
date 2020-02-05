import React from 'react';
import './Comment.css';

const Comment = props => {
  return (
    <div className="comment-text">
      <span className="user">{props.comment.username}</span>
      {' '}
      <span className="comment">{props.comment.text}</span>
    </div>
  );
};


export default Comment;

// explanation
// 1. by inheriting props from CommentSectionContainer, we can then return each comment with its username and text property