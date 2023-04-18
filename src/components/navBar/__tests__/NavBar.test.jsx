import React from 'react';
import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../NavBar';
import store from '../../../store/store';

jest.mock('axios');
describe('Navabar', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>
    );
  });

  test('login link', () => {
    const login = screen.getByText('Login');
    fireEvent.click(login);
    expect(window.location.pathname).toBe('/login');
  });

  test('register link', () => {
    const register = screen.getByText('Register');
    fireEvent.click(register);
    expect(window.location.pathname).toBe('/register');
  });
});
