import React from 'react';
import { render } from '@testing-library/react-native';
import CryptoView from '..';// Certifique-se de que o caminho para o componente está correto

describe('CryptoView Component', () => {
  it('should render the image correctly', () => {
    const { getByTestId } = render(<CryptoView />);
    
    const image = getByTestId('crypto-image');

    expect(image).toBeTruthy();
    expect(typeof image.props.source).toBe('number'); // Verifica se a source é um número
    expect(image.props.style).toEqual({ width: 45, height: 45, borderRadius: 30 });
  });
});
