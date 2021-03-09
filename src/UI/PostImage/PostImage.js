import React from 'react';
import postImage from '../../assets/images/project-1.jpeg';
import classes from './PostImage.module.css';

function PostImage() {
  return (
    <div>
      <img src={postImage} alt='post image' />
    </div>
  );
}

export default PostImage;
