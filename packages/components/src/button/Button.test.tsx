import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Button from '.';

afterEach(cleanup);

describe('Button Component', () => {
  test('Renders Correctly', () => {
    const { asFragment } = render(<Button />);
    expect(asFragment()).toMatchSnapshot();
  });
});
