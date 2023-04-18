import * as Yup from 'yup';

const registerValidationSchema = new Yup.ObjectSchema({
  username: Yup.string()
    .min(6, 'username must have 6 characters at least')
    .required('username is required'),
  password: Yup.string()
    .min(6, 'password must have at least 6 characters')
    .required('password is required'),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref('password'), null],
      "password didn't match"
    )
    .required('confirm password is required'),
});

export default registerValidationSchema;
