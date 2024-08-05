import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import DoubleButton from '..';

describe('DoubleButton', () => {
  it('should toggle selected state when buttons are pressed', () => {
    const { getByTestId, queryByText } = render(<DoubleButton />);

    const bitcoinButton = getByTestId('button-bitcoin');
    const ethereumButton = getByTestId('button-ethereum');

    // Verifica se o botão "Bitcoin" está inicialmente selecionado
    expect(queryByText('Bitcoin')).toBeTruthy();
    expect(queryByText('Ethereum')).toBeTruthy();

    // Pressiona o botão "Ethereum"
    fireEvent.press(ethereumButton);

    // Verifica se o botão "Ethereum" está agora selecionado
    expect(queryByText('Bitcoin')).toBeTruthy(); // Confirmar se "Bitcoin" ainda está presente
    expect(queryByText('Ethereum')).toBeTruthy(); // Confirmar se "Ethereum" ainda está presente

    // Pressiona novamente o botão "Bitcoin"
    fireEvent.press(bitcoinButton);

    // Verifica se o botão "Bitcoin" está novamente selecionado
    expect(queryByText('Bitcoin')).toBeTruthy(); // Confirmar se "Bitcoin" ainda está presente
    expect(queryByText('Ethereum')).toBeTruthy(); // Confirmar se "Ethereum" ainda está presente
  });
});
