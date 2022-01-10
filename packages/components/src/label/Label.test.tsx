import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Label from '.';

afterEach(cleanup);

describe('Label Component', () => {
  test('Renders Correctly', () => {
    const { asFragment } = render(<Label />);
    expect(asFragment()).toMatchSnapshot();
  });
});
