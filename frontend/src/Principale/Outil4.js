import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Legend, Tooltip,Cell
} from 'recharts';

const data01 = [
  { name: 'Moyen-Orient', value: 98000 }, { name: 'Europe', value: 140000 }, 
  { name: 'Asie', value: 310000 }, { name: 'Amerique', value: 230000 },
  { name: 'Afrique', value: 63000 }
];


const COLORS = ['#4C50A4', '#6A8DD1', '#7BC6F0', '#8C64E2', '#182850' ];


export default class Example extends PureComponent {

  render() {
    return (
            <div>
                <h5 class="texte">Représentation des ventes dans le monde :</h5>
                <PieChart width={400} height={400}>
                  <Pie
                    dataKey="value" 
                    isAnimationActive={false} 
                    data={data01} 
                    cx={185} 
                    cy={160} 
                    outerRadius={120} 
                    fill="#8884d8" 
                    label
                    >
                  
                    {
                      data01.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                  </Pie>
                  <Tooltip />
                </PieChart>
            </div>
    );
  }
}
