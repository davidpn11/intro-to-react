import React from "react";

function CommentsList({ comments }) {
  return (
    <div className="comments-list">
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <img src={comment.user.profile} alt="" />
            <div className="content">
              <span className="name">{comment.user.name}</span>
              <span className="text">{comment.text}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentsList;
