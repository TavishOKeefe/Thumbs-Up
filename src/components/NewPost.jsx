import React from 'react';

function NewPost(){
  return (
    <div>
      <h1>NewPost is working</h1>
        <form>
          <input
            type='text'
            id='names'
            placeholder='Your name...'/>
          <textarea
            id='issue'
            placeholder='Describe your issue.'/>
          <button type='submit'>Help!</button>
        </form>
    </div>
  );
}

export default NewPost;
