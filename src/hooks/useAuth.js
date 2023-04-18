import { useDispatch, useSelector } from 'react-redux';
import userLogin from '../apis/auth/userLogin';
import getUserPosts from '../apis/users/getUserPosts';
import deletePost from '../apis/posts/deletePost';
import updateUserPicture from '../apis/users/updateUserPicture';
import createPost from '../apis/posts/createPost';
import socket from '../socket';

import {
  authLogin,
  authLogout,
  authAddPosts,
  authAddPost,
  authRemovePost,
  authUpdatePicture,
} from '../store/slices/authSlice';
import useAlerts from './useAlerts';
import usePosts from './usePosts';

const useAuth = () => {
  const user = useSelector((state) => state.auth);
  const { addNewAlert } = useAlerts();
  const { resetAllPosts } = usePosts();
  const dispatch = useDispatch();

  const login = async (username, password) => {
    const resp = await userLogin(username, password);
    if (resp.statusCode === undefined) {
      dispatch(
        authLogin({
          username: resp.username,
          imageUrl: resp.picture,
          accessToken: resp.access_token,
          isAuthenticated: true,
        })
      );
      return true;
    }
    return false;
  };

  const logout = () => dispatch(authLogout());

  const addPosts = async () => {
    const posts = await getUserPosts(user.accessToken);
    if (posts.statusCode === undefined) {
      dispatch(authAddPosts(posts));
      addNewAlert('info', 'Posts are loaded!');

      return true;
    }
    addNewAlert(
      'error',
      'something went wrong while loading the posts!'
    );
    return false;
  };

  const addPost = async (data) => {
    const response = await createPost(
      user.accessToken,
      data
    );
    if (response.status === 201) {
      dispatch(authAddPost(response.post));
      addNewAlert(
        'success',
        'Post has been created successfuly'
      );
      socket.emit('newPost', true);
      resetAllPosts();
      return true;
    }
    addNewAlert(
      'error',
      'Something went wrong while trying to add post'
    );
    return false;
  };

  const removePost = async (postId) => {
    const response = await deletePost(
      user.accessToken,
      postId
    );
    if (response.status === 201) {
      dispatch(authRemovePost(postId));
      addNewAlert(
        'success',
        'Post has been deleted successfuly'
      );
      socket.emit(process.env.REACT_APP_SOCKET_EVENT, true);
      resetAllPosts();
      return true;
    }
    addNewAlert(
      'error',
      'Unable to delete post! try again later'
    );
    return false;
  };

  const updateProfilePicture = async (newImage) => {
    const response = await updateUserPicture(
      user.accessToken,
      newImage
    );
    if (response.status === 201) {
      dispatch(authUpdatePicture(newImage));
      addNewAlert(
        'success',
        'Profile picture has updated successfully'
      );
      return true;
    }
    addNewAlert(
      'error',
      'Unable to update profile picture!'
    );
    return false;
  };
  return {
    login,
    logout,
    addPosts,
    user,
    addPost,
    removePost,
    updateProfilePicture,
  };
};

export default useAuth;
