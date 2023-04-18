import React from 'react';
import {
  render,
  screen,
  cleanup,
  fireEvent,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import Register from '../RegisterContainer';
import store from '../../../store/store';

const onSubmit = (values, { resetForm }) => {
  resetForm();
};
describe.only('Register Test', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Register onSubmit={onSubmit} />
        </BrowserRouter>
      </Provider>
    );
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  test('check all the register inputs and button appeared in the the dom', () => {
    const username = screen.getByLabelText('Username');
    const password = screen.getByLabelText('Password');
    const confirmPassword = screen.getByLabelText(
      'Confirm Password'
    );

    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(confirmPassword).toBeInTheDocument();
  });

  test('check all the register input is changing while tryping', async () => {
    const username = screen.getByLabelText('Username');
    const password = screen.getByLabelText('Password');
    const confirmPassword = screen.getByLabelText(
      'Confirm Password'
    );
    const user = userEvent.setup();
    await user.type(username, 'mohamed');
    await user.type(password, 'secret');
    await user.type(confirmPassword, 'secret');
    expect(username).toHaveValue('mohamed');
    expect(password).toHaveValue('secret');
    expect(confirmPassword).toHaveValue('secret');
  });

  test('check all the inputs is being reset after register button is being clicked', async () => {
    const username = screen.getByLabelText('Username');
    const password = screen.getByLabelText('Password');
    const confirmPassword = screen.getByLabelText(
      'Confirm Password'
    );
    const registerButton = screen.getByText('Sign Up');
    const user = userEvent.setup();
    await user.type(username, 'celomary');
    await user.type(password, '123456');
    await user.type(confirmPassword, '123456');
    expect(username).toHaveValue('celomary');
    expect(password).toHaveValue('123456');
    expect(confirmPassword).toHaveValue('123456');
    await user.click(registerButton);
    expect(username).toHaveValue('');
    expect(password).toHaveValue('');
    expect(confirmPassword).toHaveValue('');
  });

  test('check wether onSumbit function is Being Called', async () => {
    const onSumbitMock = jest.fn();
    cleanup();
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Register onSubmit={onSumbitMock} />
        </BrowserRouter>
      </Provider>
    );
    const username = screen.getByLabelText('Username');
    const password = screen.getByLabelText('Password');
    const confirmPassword = screen.getByLabelText(
      'Confirm Password'
    );
    const registerButton = screen.getByText('Sign Up');
    const user = userEvent.setup();
    await user.type(username, 'celomary');
    await user.type(password, '1234567');
    await user.type(confirmPassword, '1234567');
    expect(username).toHaveValue('celomary');
    expect(password).toHaveValue('1234567');
    expect(confirmPassword).toHaveValue('1234567');
    await user.click(registerButton);
    expect(onSumbitMock).toHaveBeenCalled();
  });

  test('check if the proper error showed when input is empty', async () => {
    const username = screen.getByLabelText('Username');
    const password = screen.getByLabelText('Password');
    const confirmPassword = screen.getByLabelText(
      'Confirm Password'
    );
    const registerButton = screen.getByText('Sign Up');
    const user = userEvent.setup();

    fireEvent.change(username, {
      target: {
        value: '',
      },
    });
    fireEvent.change(password, {
      target: {
        value: '',
      },
    });
    fireEvent.change(confirmPassword, {
      target: {
        value: '',
      },
    });
    await user.click(registerButton);
    const emptyUsername = screen.getByText(
      'username is required'
    );
    const emptyPassword = screen.getByText(
      'password is required'
    );
    const emptyConfirmPassword = screen.getByText(
      'confirm password is required'
    );
    expect(emptyUsername).toBeInTheDocument();
    expect(emptyUsername).toBeVisible();
    expect(emptyPassword).toBeInTheDocument();
    expect(emptyPassword).toBeVisible();
    expect(emptyConfirmPassword).toBeInTheDocument();
    expect(emptyConfirmPassword).toBeVisible();
  });

  test('check if the proper error showed when the inputs have less characters', async () => {
    const username = screen.getByLabelText('Username');
    const password = screen.getByLabelText('Password');
    const registerButton = screen.getByText('Sign Up');
    const user = userEvent.setup();

    await user.type(username, 'Nice');
    await user.type(password, 'Nice');
    await user.click(registerButton);
    const passwordLessCharacters = screen.getByText(
      'password must have at least 6 characters'
    );
    const usernameLessCharacters = screen.getByText(
      'username must have 6 characters at least'
    );
    expect(passwordLessCharacters).toBeInTheDocument();
    expect(passwordLessCharacters).toBeVisible();
    expect(usernameLessCharacters).toBeInTheDocument();
    expect(usernameLessCharacters).toBeVisible();
  });

  test("password didn't match", async () => {
    const password = screen.getByLabelText('Password');
    const confirmPassword = screen.getByLabelText(
      'Confirm Password'
    );
    const registerButton = screen.getByText('Sign Up');
    const user = userEvent.setup();

    await user.type(password, 'Ni');
    await user.type(confirmPassword, 'Nice');
    await user.click(registerButton);
    const passwordDidntMatch = screen.getByText(
      "password didn't match"
    );
    expect(passwordDidntMatch).toBeInTheDocument();
    expect(passwordDidntMatch).toBeVisible();
  });
});
