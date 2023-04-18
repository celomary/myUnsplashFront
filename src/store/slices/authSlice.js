/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  imageUrl: '',
  isAuthenticated: false,
  accessToken: '',
  posts: [],
  isPostLoaded: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authLogin: (state, { payload: user }) => {
      state.accessToken = user.accessToken;
      state.imageUrl = user.imageUrl;
      state.isAuthenticated = true;
      state.username = user.username;
    },
    authLogout: (state) => {
      state.accessToken = '';
      state.imageUrl = '';
      state.isAuthenticated = false;
      state.posts = [];
      state.isPostLoaded = false;
      state.username = '';
    },
    authAddPosts: (state, { payload: posts }) => {
      state.isPostLoaded = true;
      state.posts = posts;
    },
    authAddPost: (state, { payload: post }) => {
      state.posts = [post, ...state.posts];
    },
    authRemovePost: (state, { payload: deletedPostId }) => {
      state.posts = state.posts.filter(
        (post) => post._id !== deletedPostId
      );
    },
    authUpdatePicture: (state, { payload: newPicture }) => {
      state.imageUrl = newPicture;
    },
  },
});

export const {
  authLogin,
  authLogout,
  authAddPosts,
  authAddPost,
  authRemovePost,
  authUpdatePicture,
} = authSlice.actions;
export default authSlice;
