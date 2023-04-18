import React from 'react';
import {
  render,
  screen,
  fireEvent,
  act,
} from '@testing-library/react';
import { TextField, Button, Box } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AuthLayout from '../AuthLayout';
import store from '../../../store/store';
import { addAlert } from '../../../store/slices/alertsSlice';

describe('Authentication Layout', () => {
  beforeEach(() => {
    const userForm = () => (
      <Box component="form">
        <TextField name="username" label="username" />
        <TextField
          name="password"
          label="password"
          type="password"
        />
        <Button>Submit</Button>
      </Box>
    );
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AuthLayout
            renderForm={userForm}
            title="Welcome Back"
            subtitle="Sign in and share your adventures"
          />
        </BrowserRouter>
      </Provider>
    );
  });

  test('form field should be appear in the document', () => {
    const username = screen.getByLabelText('username');
    const password = screen.getByLabelText('password');
    const button = screen.getByText('Submit');
    expect(username).toBeInTheDocument();
    expect(username).toBeVisible();
    expect(password).toBeInTheDocument();
    expect(password).toBeVisible();
    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();
  });

  test('header should be appear in the document', () => {
    const logo = screen.getByText(/Unsplash/i);
    const header = screen.getByText('Welcome Back');
    const subHeader = screen.getByText(
      'Sign in and share your adventures'
    );
    expect(logo).toBeInTheDocument();
    expect(logo).toBeVisible();
    expect(header).toBeInTheDocument();
    expect(subHeader).toBeInTheDocument();
  });

  test('home link', async () => {
    const homeLogo = screen.getByTestId('homeLink');
    expect(homeLogo).toBeInTheDocument();
    expect(homeLogo).toHaveAttribute('href', '/');
    fireEvent.click(homeLogo);
    expect(window.location.pathname).toBe('/');
  });

  test('check wether alerts appeared on the layout when they triggered', async () => {
    act(() => {
      store.dispatch(
        addAlert({
          id: '12554',
          type: 'error',
          message: 'some errors',
        })
      );
    });

    const error = await screen.findByText('some errors');
    expect(error).toBeInTheDocument();
  });
});
