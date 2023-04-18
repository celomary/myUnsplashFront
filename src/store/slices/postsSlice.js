/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  isLoaded: false,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPosts: (state, { payload: posts }) => {
      state.data = posts;
      state.isLoaded = true;
    },
    resetPosts: (state) => {
      state.isLoaded = false;
    },
  },
});

export const { addPosts, resetPosts } = postsSlice.actions;
export default postsSlice;
