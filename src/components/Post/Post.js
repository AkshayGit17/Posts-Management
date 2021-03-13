import React from 'react';
import classes from './Post.module.css';

import PostImage from '../../UI/PostImage/PostImage';

function Post(props) {
  return (
    <div className={classes.Post}>
      <PostImage />
      <div className={classes.Post__Body}>
        <h3 className={classes.Post__Title}>{props.title}</h3>
        <p>
          {!props.description
            ? null
            : props.description.length > 26
            ? props.description.substr(0, 54) + '...'
            : props.description}
        </p>
      </div>
      <div className={classes.Post__Footer}>
        <button type='button' className={classes.Post__View}>
          VIEW
        </button>
        <button
          type='button'
          className={classes.Post__Delete}
          onClick={props.deletePost}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default Post;
