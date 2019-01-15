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
  comments: PropTypes.arrayOf(
    PropTypes.shape({ 
        username: PropTypes.string, 
        text: PropTypes.string, 
    })
  )
};

export default CommentSection;