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

// {/* This is the header for each post with the user's default photo and username information pulled
// from the state data */}