import React, { useState, useEffect } from 'react';
import classes from './Posts.module.css';

import Post from '../../components/Post/Post';
import axios from '../../axios-posts';
import Spinner from '../../UI/Spinner/Spinner';

function Posts() {
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);

  const deletePostHandler = (postID) => {
    axios
      .delete(`/posts/${postID}.json`)
      .then(() => {
        const postsArray = [];

        posts.forEach((post) => {
          postsArray.push({
            ...post,
          });
        });

        const postIndex = postsArray.findIndex((post) => {
          return post.id === postID;
        });

        postsArray.splice(postIndex, 1);

        setPosts(postsArray);
      })
      .catch(() => {});
  };

  useEffect(() => {
    axios.get('/posts.json').then((response) => {
      const postsArray = [];

      for (const postID in response.data) {
        postsArray.push({
          id: postID,
          title: response.data[postID].title,
          description: response.data[postID].description,
        });
      }
      setPosts(postsArray);
      setLoading(false);
    });
  }, []);

  let postsVar = (
    <div className={classes.Posts}>
      {posts.map((post) => {
        return (
          <Post
            title={post.title}
            description={post.description}
            key={post.id}
            deletePost={() => {
              deletePostHandler(post.id);
            }}
          />
        );
      })}
    </div>
  );

  if (loading) {
    postsVar = <Spinner />;
  }

  return postsVar;
}

export default Posts;
