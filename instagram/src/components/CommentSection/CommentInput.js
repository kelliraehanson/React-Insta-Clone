import React from 'react';
import './CommentSection.css';

const CommentInput = props => {

  return (

    <form onSubmit={props.submitComment}>
        <div className="commentInput">
    <input type="text" value={props.comment} placeholder="Add comment... " onChange={props.changeComment}/></div>
    </form>
  );
};

export default CommentInput;