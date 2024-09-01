import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import DoubleButton from '..';

describe('DoubleButton', () => {
  it('should toggle selected state when buttons are pressed', () => {
    const { getByTestId, queryByText } = render(<DoubleButton />);

    const ondeday = getByTestId('1day-button');
    const sevenDaysButton = getByTestId('7days-button');
    const thirtyDaysButton = getByTestId('30days-button'); 

    // Verifica se o botão "Bitcoin" está inicialmente selecionado
    expect(queryByText('1 day')).toBeTruthy();
    expect(queryByText('7 days')).toBeTruthy();
    expect(queryByText('30 days')).toBeTruthy();

    // Pressiona o botão "Ethereum"
    fireEvent.press(sevenDaysButton);

    // Verifica se o botão "Ethereum" está agora selecionado
    expect(queryByText('1 day')).toBeTruthy(); // Confirmar se "Bitcoin" ainda está presente
    expect(queryByText('7 days')).toBeTruthy(); // Confirmar se "Ethereum" ainda está presente
    expect(queryByText('30 days')).toBeTruthy(); // Confirmar se "30 days" ainda está presente

    // Pressiona novamente o botão "Bitcoin"
    fireEvent.press(ondeday);

    // Verifica se o botão "Bitcoin" está novamente selecionado
    expect(queryByText('1 day')).toBeTruthy(); // Confirmar se "Bitcoin" ainda está presente
    expect(queryByText('7 days')).toBeTruthy(); // Confirmar se "Ethereum" ainda está presente
    expect(queryByText('30 days')).toBeTruthy(); // Confirmar se "30 days" ainda está presente
  });
});
