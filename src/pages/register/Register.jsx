import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterContainer from './RegisterContainer';
import createUser from '../../apis/users/createUser';
import useAlerts from '../../hooks/useAlerts';

export default function Register() {
  const navigate = useNavigate();
  const { addNewAlert } = useAlerts();

  const handleSumbit = async (values, { resetForm }) => {
    const response = await createUser(
      values.username,
      values.password
    );

    if (response.status === 201) {
      addNewAlert(
        'success',
        'your account has been created!'
      );
      navigate('/login');
    } else if (response.status === 400) {
      addNewAlert('error', 'username already exist!');
    } else {
      addNewAlert(
        'error',
        'something went wrong please try again later!'
      );
    }
    resetForm();
  };
  return <RegisterContainer onSubmit={handleSumbit} />;
}
