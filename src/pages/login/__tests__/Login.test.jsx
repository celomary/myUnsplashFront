import React from 'react';
import {
  render,
  screen,
  cleanup,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import Login from '../LoginContainer';
import store from '../../../store/store';

const onSubmit = (values, { resetForm }) => {
  resetForm();
};
describe('Login Test', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login onSubmit={onSubmit} />
        </BrowserRouter>
      </Provider>
    );
  });
  test('check all the login inputs and button appeared in the the dom', () => {
    const username = screen.getByLabelText('Username');
    const password = screen.getByLabelText('Password');

    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  test('check all the login input is changing while tryping', async () => {
    const username = screen.getByLabelText('Username');
    const password = screen.getByLabelText('Password');
    const user = userEvent.setup();
    await user.type(username, 'mohamed');
    await user.type(password, 'secret');
    expect(username).toHaveValue('mohamed');
    expect(password).toHaveValue('secret');
  }, 10000);

  test('check all the inputs is being rests after login button is being clicked', async () => {
    const username = screen.getByLabelText('Username');
    const password = screen.getByLabelText('Password');
    const loginButton = screen.getByText('Login');
    const user = userEvent.setup();
    await user.type(username, 'celomary');
    await user.type(password, '123456');
    expect(username).toHaveValue('celomary');
    expect(password).toHaveValue('123456');
    await user.click(loginButton);
    expect(username).toHaveValue('');
    expect(password).toHaveValue('');
  });

  test('check wether onSumbit function Is being called', async () => {
    const onSubmitMock = jest.fn();
    cleanup();
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login onSubmit={onSubmitMock} />
        </BrowserRouter>
      </Provider>
    );
    const username = screen.getByLabelText('Username');
    const password = screen.getByLabelText('Password');
    const loginButton = screen.getByText('Login');
    const user = userEvent.setup();
    await user.type(username, 'celomary');
    await user.type(password, '123456');
    expect(username).toHaveValue('celomary');
    expect(password).toHaveValue('123456');
    await user.click(loginButton);
    expect(onSubmitMock).toHaveBeenCalledTimes(1);
  }, 10000);

  test('check if the proper error showed when input is empty', async () => {
    const loginButton = screen.getByText('Login');
    const user = userEvent.setup();
    await user.click(loginButton);
    const emptyUsername = screen.getByText(
      'username is required'
    );
    const emptyPassword = screen.getByText(
      'password is required'
    );
    expect(emptyUsername).toBeInTheDocument();
    expect(emptyUsername).toBeVisible();
    expect(emptyPassword).toBeInTheDocument();
    expect(emptyPassword).toBeVisible();
  });

  test('check if the proper error showed whe input has less characters', async () => {
    const username = screen.getByLabelText('Username');
    const password = screen.getByLabelText('Password');
    const loginButton = screen.getByText('Login');
    const user = userEvent.setup();
    await user.type(username, 'Nice', {});
    await user.type(password, 'Nice');
    await user.click(loginButton);
    const passwordLessCharacters = screen.getByText(
      'username must have at least 6 characters'
    );
    const usernameLessCharacters = screen.getByText(
      'username must have at least 6 characters'
    );
    expect(passwordLessCharacters).toBeInTheDocument();
    expect(passwordLessCharacters).toBeVisible();
    expect(usernameLessCharacters).toBeInTheDocument();
    expect(usernameLessCharacters).toBeVisible();
  });
});
