import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import postsSlice from './slices/postsSlice';
import alertsSlice from './slices/alertsSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    posts: postsSlice.reducer,
    alerts: alertsSlice.reducer,
  },
});

export default store;
