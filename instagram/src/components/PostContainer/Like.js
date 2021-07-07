import React from 'react';
import './Posts.css';

const Like = props => {
    return (
        <div className="likes">

        <i onClick={props.likePost} class="far fa-heart"></i>

        <i className="far fa-comment"></i>
        <div className="numberLikes">{props.likes}  likes</div>

        </div>
    )
}

export default Like;

// {/* This is assigning the likes to go up in number when the user clicks on the heart icon */}



