import client from '../client';

const createPost = async (token, { label, imageUrl }) => {
  try {
    const response = await client.post(
      '/users/posts/add',
      {
        label,
        url: imageUrl,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (e) {
    return e.response.token;
  }
};

export default createPost;
