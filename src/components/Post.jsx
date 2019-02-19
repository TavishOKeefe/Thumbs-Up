import React from 'react';
import PropTypes from 'prop-types';

function Post(props){

  function upTheVote() {}

  function downTheVote() {}

  return (
    <div>
      <h3>Name: {props.name}</h3>
      <p><em>Message: {props.message}</em></p>
      <h3>Up Votes: {props.upVote}</h3><button type='button' onClick={upTheVote}>Up Vote</button>
      <h3>Down Votes: {props.downVote}</h3><button type='button' onClick={downTheVote}>Down Vote</button>
      <hr/>
    </div>
  );
}

Post.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  upVote: PropTypes.number,
  downVote: PropTypes.number
};

export default Post;
