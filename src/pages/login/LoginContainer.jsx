import React from 'react';
import { Typography } from '@mui/material';
import { useFormik } from 'formik';
import propTypes from 'prop-types';
import AuthLayout from '../../components/authLayout/AuthLayout';
import loginValidationSchema from '../../utils/loginValidation';
import Fields from '../../components/ui/Fields';
import {
  FormLink,
  FormAuthContainer,
  AuthButton,
} from '../../components/authLayout/styled';

const FIELDS = [
  {
    label: 'Username',
    type: 'text',
    name: 'username',
  },
  {
    label: 'Password',
    type: 'password',
    name: 'password',
  },
];

function LoginContainer({ onSubmit }) {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit,
  });

  const renderForm = () => (
    <FormAuthContainer onSubmit={formik.handleSubmit}>
      <Fields form={formik} fields={FIELDS} />
      <AuthButton type="submit">Login</AuthButton>
      <Typography>
        You don&apos;t have an account!&nbsp;
        <FormLink to="/register">Sign Up</FormLink>
      </Typography>
    </FormAuthContainer>
  );

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in and share your adventures"
      renderForm={renderForm}
    />
  );
}
LoginContainer.propTypes = {
  onSubmit: propTypes.func.isRequired,
};

export default LoginContainer;
