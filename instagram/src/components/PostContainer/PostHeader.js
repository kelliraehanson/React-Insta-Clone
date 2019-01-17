import React from 'react';
import './Posts.css';
// import styled, {css} from 'styled-components';

// const PostHeader = styled.div`
// display: flex'
// padding: 10px;

// `;

// const PostHeader = props => {
//   return (
//     <PostHeaderThing>

//       <PostHeaderThumb>
//       <img
//           alt="post header"
//           className="postThumbImage"
//           src={props.thumbnailUrl}
//         />
//       </PostHeaderThumb>
      
//     </PostHeaderThing>
//   )
// }

// export default PostHeader;

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