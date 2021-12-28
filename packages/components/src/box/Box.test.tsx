import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Box from '.';

afterEach(cleanup);

describe('Box Component', () => {
  test('Renders Correctly', () => {
    const { asFragment } = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
  });
});
