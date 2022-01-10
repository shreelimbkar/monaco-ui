import React from 'react';
import { render, cleanup } from '@testing-library/react';
import InputField from '.';

afterEach(cleanup);

describe('InputField Component', () => {
  test('Renders Correctly', () => {
    const { asFragment } = render(<InputField />);
    expect(asFragment()).toMatchSnapshot();
  });
});
