import React from 'react';
import PropTypes from 'prop-types';

function NewPost(props){
  let _name = null;
  let _message = null;
  // let _upVote = null;
  // let _downVote = null;

  function handleNewPostSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({name: _name.value, message: _message.value, upVote: 0, downVote: 0});
    _name.value = '';
    _message.value = '';
    // _upVote.value = '';
    // _downVote.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewPostSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Your name'
          ref={(input) => {_name = input;}}/>
        <textarea
          id='message'
          placeholder='Post a comment'
          ref={(textarea) => {_message = textarea;}}/>
        <button type='submit'>Post!</button>
      </form>
    </div>
  );
}

NewPost.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPost;
