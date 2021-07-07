import React from 'react';
import './CommentSection.css';

// const CommentInput = props => {

//   return (

//     <form onSubmit={props.submitComment}>
//         <div className="commentInput">
//     <input onChange={props.changeComment} type="text" value={props.comment} placeholder="Add comment... " />
//     </div>
//     </form>
//   );
// };

// export default CommentInput;

const CommentInput = props => {
    return (
        <form 
            className='comment-form'
            onSubmit={props.addComment}    
        >
            <input 
                className='comment-input'
                name="newComment" 
                value={props.newComment}
                onChange={props.handleChange}
                type='text' 
                placeholder='Add a comment...'   
                autoComplete='off' 
            />            
        </form>
    )
}

export default CommentInput