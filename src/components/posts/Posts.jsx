import React, { useState, useEffect } from 'react';
import { ImageList, ImageListItem } from '@mui/material';
import propTypes from 'prop-types';
import Post from './post/Post';

export default function Posts({ posts }) {
  const [imageContainerWidth, setImageContainerWidth] =
    useState(window.innerWidth * 0.8);
  const numCols = window.matchMedia('(max-width:768px)')
    .matches
    ? 1
    : 3;

  useEffect(() => {
    window.addEventListener('resize', () => {
      setImageContainerWidth(window.innerWidth * 0.8);
    });

    return () => {
      window.removeEventListener('resize', () => {
        setImageContainerWidth(window.innerWidth * 0.8);
      });
    };
  }, []);

  const renderPosts = () =>
    posts.map((post) => (
      <ImageListItem key={post._id}>
        <Post
          id={post._id}
          label={post.label}
          imageUrl={post.url}
          date={post.createdAt}
          user={post.user}
        />
      </ImageListItem>
    ));

  return (
    <ImageList
      variant="masonry"
      cols={numCols}
      gap={8}
      sx={{
        width: imageContainerWidth,
        margin: '0 auto',
      }}
    >
      {renderPosts()}
    </ImageList>
  );
}

Posts.propTypes = {
  posts: propTypes.arrayOf(
    propTypes.shape({
      _id: propTypes.string,
      label: propTypes.string,
      url: propTypes.string,
      createdAt: propTypes.string,
      __v: propTypes.number,
      user: propTypes.shape({
        username: propTypes.string,
        picture: propTypes.string,
      }).isRequired,
    })
  ).isRequired,
};
