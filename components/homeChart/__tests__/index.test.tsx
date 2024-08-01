import React from 'react';
import { render } from '@testing-library/react-native';
import HomeChart from '..';

describe('HomeChart', () => {
  it('deve renderizar o VictoryChart e seus componentes', () => {
    // Renderiza o componente
    const { toJSON, getByTestId } = render(<HomeChart />);

    // Verifica se o container do VictoryChart está presente
    const chartContainer = getByTestId('victory-chart-container');
    expect(chartContainer).toBeTruthy();

    // Verifica a renderização geral do componente
    //expect(toJSON()).toMatchSnapshot();
  });
});
