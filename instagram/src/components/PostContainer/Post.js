import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import Like from './Like';

import './Posts.css';

class Post extends Component { 
    constructor(props) {
        super(props);
        this.state= {
            liked: false,
            likes: props.post.likes, 
            post: props.post,

        }



    }

    likePost = () => {
        this.setState(prev => ({
            likes: (this.state.liked) ? --prev.likes : ++prev.likes,
            liked: !prev.liked,
        }))
    }

    render () { 

  return (
    
    <div className="postBorder">
      <PostHeader
        username={this.state.post.username}
        thumbnailUrl={this.state.post.thumbnailUrl}
      />
      <div className="postImage">
        <img
          alt="post thumbnail"
          className="postImage"
          src={this.state.post.imageUrl}
        />
      </div>

      <div className="numberLikes">
      <Like likes={this.state.likes} likePost={this.likePost}

      
      />
      
      </div>

      <CommentSection comments={this.state.post.comments} />
    </div>

    )};
};

export default Post;