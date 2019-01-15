import React from 'react';
import './Posts.css';

const Like = props => {
    return (
        <div className="likes">
        <i class="far fa-heart"></i>
        <i className="far fa-comment"></i>
        <div className="numberLikes">{props.likes}  likes</div>

        </div>
    )
}

export default Like;



