import * as Yup from 'yup';

const loginValidationSchema = new Yup.ObjectSchema({
  username: Yup.string()
    .min(6, 'username must have at least 6 characters')
    .required('username is required'),
  password: Yup.string()
    .min(6, 'password should have at least 6 characters')
    .required('password is required'),
});

export default loginValidationSchema;
