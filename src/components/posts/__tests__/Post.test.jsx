import React from 'react';
import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import Post from '../post/Post';
import store from '../../../store/store';

describe('Post Tests', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Post
          id="1"
          label="Michael Angelo's painting on top of the Palace of Versailles"
          imageUrl="https://source.unsplash.com/1rBg5YSi00c"
          date=""
          user={{
            username: 'cadi',
            picture:
              'https://source.unsplash.com/rDEOVtE7vOs',
          }}
        />
      </Provider>
    );
  });

  test('check wether entered props is placed in a proper place', () => {
    const image = screen.getByTestId('postImage');
    const label = screen.getByTestId('postLabel');

    expect(image).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(image).toHaveAttribute(
      'src',
      'https://source.unsplash.com/1rBg5YSi00c'
    );
    expect(label).toHaveTextContent(
      "Michael Angelo's painting on top of the Palace of Versailles"
    );
  });
});
