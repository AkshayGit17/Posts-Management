import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import classes from './Blog.module.css';

import NewPost from '../NewPost/NewPost';
import Posts from '../Posts/Posts';

function Blog() {
  return (
    <div className={classes.Blog}>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to='/' exact activeClassName={classes.Active}>
                Posts
              </NavLink>
            </li>
            <li>
              <NavLink to='/new-post' activeClassName={classes.Active}>
                New Post
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path='/' exact component={Posts} />
        <Route path='/new-post' component={NewPost} />
      </Switch>
    </div>
  );
}

export default Blog;
