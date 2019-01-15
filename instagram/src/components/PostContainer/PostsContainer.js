import React from 'react';
import Post from './Post';
import './Posts.css';

const PostsContainer = props => {

  return (

    <div className="postsContainer">

      {props.dummyData.map (k=> 
      <Post key={k.imageUrl} post={k} />)}

    </div>

  );
};

export default PostsContainer;

