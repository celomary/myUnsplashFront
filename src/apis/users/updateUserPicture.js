import client from '../client';

const updateUserPicture = async (token, newImage) => {
  try {
    const response = await client.post(
      '/users/update_picture',
      {
        imageData: newImage,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export default updateUserPicture;
