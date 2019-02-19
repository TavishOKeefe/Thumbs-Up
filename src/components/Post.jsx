import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  return (
    <div>
      <h3>{props.name}</h3>
      <p><em>{props.message}</em></p>
      <hr/>
    </div>
  );
}

Post.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Post;
