import client from '../client';

const getAllPosts = async () => {
  try {
    const response = await client.get('/posts/all');
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};

export default getAllPosts;
