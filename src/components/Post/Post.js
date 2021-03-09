import React from 'react';

import PostImage from '../../UI/PostImage/PostImage';

function Post(props) {
  return (
    <div className='Post'>
      <PostImage />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Post;
