import client from '../client';

const createUser = async (username, password) => {
  try {
    const response = await client.post('/users/create', {
      username,
      password,
    });
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};

export default createUser;
