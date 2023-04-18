import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import NotFound from './pages/notFound/NotFound';
import PrivateRoute from './routers/PrivateRoutes';
import PublicRoute from './routers/PublicRoutes';
import socket from './socket';
import usePosts from './hooks/usePosts';

function App() {
  const { resetAllPosts } = usePosts();

  useEffect(() => {
    socket.on(
      process.env.REACT_APP_SOCKET_EVENT,
      resetAllPosts
    );
    return () => {
      socket.off(
        process.env.REACT_APP_SOCKET_EVENT,
        resetAllPosts
      );
    };
  }, [resetAllPosts]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
