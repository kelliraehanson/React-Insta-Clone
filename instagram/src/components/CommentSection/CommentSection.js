import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: '',
    };
  }

//   commentInput = event => {
//       this.setState({ comment: event.target.value })
//   }

//   addNewComment = event =>
//   event.preventDefault();
//   const newComment = { text: this.state.comment, username:
//     'kelliraehanson' };
//     const comments = [...this.state.comments];
//     comments.push(newComment);
//     this.setState({ comments, comment: ''});
// }

// componentDidMount() {
//     const id = this.props.postId;
//     if (localStorage.getItem(id)) {
//         this.setState({
//             comments: JSON.parse(localStorage.getItem
//                 (this.props.postId))
//         });
//     }
//     else {
//         this.addComments();
//     }

// }

// componentWillUnmount() {
//     this.addComments();

// }



  render() {

    return (

      <div>
        {this.state.comments.map((hi, yes) => 
        <Comment key={yes} comment={hi} />)}
        <CommentInput />
      </div>

    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string, username: PropTypes.string, 
        
    })
  )
};

export default CommentSection;