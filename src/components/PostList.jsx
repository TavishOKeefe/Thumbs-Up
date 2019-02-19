import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props){
  return (
    <div>
      <hr/>
      {props.postList.map((post, index) =>
        <Post name={post.name}
          message={post.message}
          upVote={post.upVote}
          downVote={post.downVote}
          key={index}/>
      )}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.array
};

export default PostList;
