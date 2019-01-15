import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import Like from './Like';

import './Posts.css';

const Post = props => {
  return (
    <div className="postBorder">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="postImage">
        <img
          alt="post thumbnail"
          className="postImage"
          src={props.post.imageUrl}
        />
      </div>

      <div className="numberLikes">
      <Like likes={props.post.likes}/></div>

      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default Post;