import client from '../client';

const deletePost = async (token, postId) => {
  try {
    const deleted = await client.post(
      `users/posts/${postId}/delete`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return deleted;
  } catch (e) {
    return e.response.data;
  }
};
export default deletePost;
