import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';

const Comment = props => {
    return (
        <div 
            className="comment"
            onMouseEnter={props.showDelete}
            onMouseLeave={props.removeDelete}    
        >
            <span className="comment-username">{props.username}</span>
            <span className="comment-text">{props.comment}</span>
            <span 
                onClick={() => props.deleteComment(props.id)} 
                className="delete-comment hide">
            &#9747;
            </span>

        </div>
    );
};

Comment.propTypes = {
    username: PropTypes.string,
    comment: PropTypes.string
}

export default Comment; 

// import React from 'react';
// import PropTypes from 'prop-types';
// import './CommentSection.css';

// const Comment = props => {
//   return (
//     <div className="commentText">
//         <span className="user">{props.comment.username}</span>{''}

//         <span className="comment">{props.comment.text}</span>
      
//     </div>
//   );
// };

// Comment.propTypes = {
//   comment: PropTypes.shape({
//     text: PropTypes.string,
//     username: PropTypes.string,
//   })
// };

// export default Comment;