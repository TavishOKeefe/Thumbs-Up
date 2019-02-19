import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Thumbs Up / Down Test</h1>
      <Link to="/">PostList</Link> <Link to="/newpost">New Post</Link>
    </div>
  );
}

export default Header;
