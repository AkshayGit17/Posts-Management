import React, { useState } from 'react';
import { useFormik } from 'formik';
import classes from './NewPost.module.css';

import * as Yup from 'yup';
import axios from '../../axios-posts';
import Spinner from '../../UI/Spinner/Spinner';

function NewPost() {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      postTitle: '',
      postDescription: '',
    },
    validationSchema: Yup.object({
      postTitle: Yup.string().required('Required'),
      postDescription: Yup.string().required('Required'),
    }),
    onSubmit: (values, actions) => {
      setLoading(true);

      const postData = {
        title: values.postTitle,
        description: values.postDescription,
      };

      axios.post('/posts.json', postData).then(() => {
        actions.resetForm();
        setLoading(false);
      });
    },
  });

  let form = (
    <form onSubmit={formik.handleSubmit} className={classes.PostForm}>
      <h3 className={classes.PostForm__Title}>Enter Post Details</h3>
      <div className={classes.PostForm__Field}>
        <input
          id='postTitle'
          name='postTitle'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.postTitle}
          className={classes.PostForm__Control}
          placeholder='Title'
        />
        {formik.touched.postTitle && formik.errors.postTitle ? (
          <div className={classes.PostForm__Error}>
            Please enter valid title
          </div>
        ) : null}
      </div>
      <div className={classes.PostForm__Field}>
        <textarea
          id='postDescription'
          name='postDescription'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.postDescription}
          className={classes.PostForm__Control}
          placeholder='Description'
        ></textarea>
        {formik.touched.postDescription && formik.errors.postDescription ? (
          <div className={classes.PostForm__Error}>
            Please enter valid description
          </div>
        ) : null}
      </div>
      <button
        type='submit'
        className={classes.PostForm__Button}
        disabled={
          formik.values.postTitle === '' || formik.values.postDescription === ''
        }
      >
        CREATE
      </button>
    </form>
  );

  if (loading) {
    form = <Spinner />;
  }

  return <div className={classes.Container}>{form}</div>;
}

export default NewPost;
