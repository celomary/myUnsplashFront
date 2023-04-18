import client from '../client';

const getUserPosts = async (token) => {
  try {
    const posts = await client.get('/users/posts', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return posts.data;
  } catch (e) {
    return e.response.data;
  }
};

export default getUserPosts;
