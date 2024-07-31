import React from 'react'
import { View } from 'react-native'
import { VictoryChart,  VictoryLine, VictoryAxis } from 'victory-native'

export default function HomeChart() {
  return (
    <View className='flex'>
      <VictoryChart>
            <VictoryAxis
              tickValues={['nov 9', 'nov 10', 'nov 11', 'nov 12', 'nov 13']}
              tickFormat={(t) => (t)}
              offsetY={40}
              tickCount={4}
              style={{
                axis: { stroke: '#888888', strokeWidth: 0 },
                grid: { stroke: 'transparent' },
                tickLabels: {fill: '#888888', fontSize: 12}
              }}
            />
            <VictoryAxis
              tickValues={['0', '150', '300', '450', '600', '750']}
              tickFormat={(t) => (t)}
              dependentAxis
              tickCount={5}
              style={{
                axis: { stroke: '#888888', strokeWidth: 0 },
                grid: { stroke: 'transparent' },
                tickLabels: {fill: '#888888', fontSize: 12}
              }}
            />
            <VictoryLine
              interpolation="natural"
              style={{ data: { stroke: 'rgb(8 145 178)', strokeWidth: 3 } }}
              data={[
                { x: 1, y: 1 },
                { x: 2, y: 3 },
                { x: 3, y: 4 },
                { x: 4, y: 2 },
                { x: 5, y: 5.5 }
              ]}
            />
        </VictoryChart>
    </View>
  )
}
