import React from 'react';
import './Posts.css';

const PostHeader = props => {

  return (

    <div className="postHeader">

      <div className="postThumb">
        <img
          alt="post header"
          className="postThumbImage"
          src={props.thumbnailUrl}
        />
      </div>

      <div className="postUsername">{props.username}</div>
      
    </div>
  );
};

export default PostHeader;