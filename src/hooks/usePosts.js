import { useDispatch, useSelector } from 'react-redux';
import {
  addPosts,
  resetPosts,
} from '../store/slices/postsSlice';
import getAllPosts from '../apis/posts/getAllPosts';
import useAlerts from './useAlerts';

const usePosts = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const { addNewAlert } = useAlerts();

  const allPosts = async () => {
    const currentPosts = await getAllPosts();
    addNewAlert('info', 'Posts are loaded');
    dispatch(addPosts(currentPosts));
  };
  const resetAllPosts = () => dispatch(resetPosts());
  return {
    posts,
    allPosts,
    resetAllPosts,
  };
};

export default usePosts;
