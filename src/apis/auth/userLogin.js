import client from '../client';

const userLogin = async (username, password) => {
  try {
    const response = await client.post('/auth/login', {
      username,
      password,
    });
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};

export default userLogin;
