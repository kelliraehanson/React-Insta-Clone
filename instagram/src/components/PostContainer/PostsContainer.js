import React from 'react';
import Post from './Post';
import './Posts.css';

const PostsContainer = props => {

  return (

    <div className="postsContainer">

      {props.dummyData.map (kelli=> 
      <Post key={kelli.imageUrl} post={kelli} />)}

    </div>

  );
};

export default PostsContainer;

