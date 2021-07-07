import React from 'react';
import './Posts.css';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';

const PostsContainer = props => {
    return (
        <div className="post">
            <div className="title">
                <img className="thumbnail" src={props.post.thumbnailUrl} alt='thumbnail'/>
                <h3 className="title-username">{props.post.username}</h3>
            </div>
            <img className="main-img" src={props.post.imageUrl} alt='main-post' />
            <CommentSection 
                post={props.post}
                addLike={props.addLike}
                id={props.id}    
            />
        </div>
    );
};

PostsContainer.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string, 
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        })),
        addLike: PropTypes.func
    })
}

export default PostsContainer; 

// import React from 'react';
// import Post from './Post';
// import './Posts.css';


// const PostsContainer = props => {

//   return (

//     <div className="postsContainer">

//       {props.dummyData.map (kelli=> 
//       <Post key={kelli.imageUrl} post={kelli} />)}

//     </div>

//   );
// };

// export default PostsContainer;

