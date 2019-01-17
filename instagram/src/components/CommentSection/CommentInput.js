import React from 'react';
import './CommentSection.css';

const CommentInput = props => {

  return (

    <form onSubmit={props.submitComment}>
        <div className="commentInput">
    <input onChange={props.changeComment} type="text" value={props.comment} placeholder="Add comment... " />
    </div>
    </form>
  );
};

export default CommentInput;