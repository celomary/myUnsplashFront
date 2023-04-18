import React from 'react';
import { Typography } from '@mui/material';
import { useFormik } from 'formik';
import propTypes from 'prop-types';
import AuthLayout from '../../components/authLayout/AuthLayout';
import registerValidationSchema from '../../utils/registerValidation';
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
  {
    label: 'Confirm Password',
    type: 'password',
    name: 'confirmPassword',
  },
];

function RegisterContainer({ onSubmit }) {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: registerValidationSchema,
    onSubmit,
  });

  const renderForm = () => (
    <FormAuthContainer onSubmit={formik.handleSubmit}>
      <Fields form={formik} fields={FIELDS} />
      <AuthButton type="submit">Sign Up</AuthButton>
      <Typography>
        Already have an account!&nbsp;
        <FormLink to="/login">Sign In</FormLink>
      </Typography>
    </FormAuthContainer>
  );

  return (
    <AuthLayout
      title="Create Your Account!"
      subtitle="sign up now & show us creative"
      renderForm={renderForm}
    />
  );
}

RegisterContainer.propTypes = {
  onSubmit: propTypes.func.isRequired,
};

export default RegisterContainer;
