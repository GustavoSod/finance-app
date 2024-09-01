import React from 'react';
import { render } from '@testing-library/react-native'
import Congrats from '..'

describe('Congrats Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Congrats />);

    expect(getByText('👏')).toBeTruthy();
    expect(getByText('Well done, User!!')).toBeTruthy();
    expect(getByText('Your stocks are growing')).toBeTruthy();
  });
});
