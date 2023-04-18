import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginContainer from './LoginContainer';
import useAuth from '../../hooks/useAuth';
import useAlerts from '../../hooks/useAlerts';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { addNewAlert } = useAlerts();

  const handleSubmit = async (
    { username, password },
    { resetForm }
  ) => {
    const isLoggedIn = await login(username, password);

    if (isLoggedIn) {
      navigate('/profile');
    } else {
      addNewAlert(
        'error',
        'Invalid username or/and password'
      );
    }
    resetForm();
  };
  return <LoginContainer onSubmit={handleSubmit} />;
}
