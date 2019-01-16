import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import Like from './Like';
import PropTypes from 'prop-types';

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
    // {/* ^ this is like an if/else statement and is adding 1 like and subtracting 1 like when clicked again */}


    render () { 

  return (
    
    <div className="postBorder">

      <PostHeader
        username={this.state.post.username}
        thumbnailUrl={this.state.post.thumbnailUrl} />

      <div className="postImage">
      
        <img
          alt="post thumbnail"
          className="postImage"
          src={this.state.post.imageUrl} />
      </div>

      <div className="numberLikes">
      <Like likes={this.state.likes} likePost={this.likePost} />
      </div>

      <CommentSection postId={this.props.post.imageUrl} comments={this.state.post.comments} />

    </div>

    )};
};

Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string
    })
}

export default Post;

// {/* ^ Bringing together all the different parts of the 
// Post section and building it while assigning the appropriate state information to each. */}