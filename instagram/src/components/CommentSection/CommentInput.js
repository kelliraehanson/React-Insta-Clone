import React from 'react';
import './CommentSection.css';

const CommentInput = props => {

  return (

    <form>
        <div className="commentInput">
    <input type="text" value={props.comment} placeholder="Add comment... " /></div>
    </form>
  );
};

export default CommentInput;