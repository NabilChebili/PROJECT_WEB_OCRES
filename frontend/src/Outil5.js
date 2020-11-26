import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Janvier', uv: 1000,
  },
  {
    name: 'Février', uv: 3000,
  },
  {
    name: 'Mars', uv: 2000,
  },
  {
    name: 'Avril', uv: 2780,
  },
  {
    name: 'Mai', uv: 1890,
  },
  {
    name: 'Juin', uv: 2390,
  },
  {
    name: 'Juillet', uv: 6890,
  },
    {
    name: 'Aout', uv: 5310,
  },
    {
    name: 'Septembre', uv: 6770,
  },
      {
    name: 'Octobre', uv: 9890,
  },
      {
    name: 'Novembre', uv: 8750,
  },
      {
    name: 'Décembre', uv: 8020,
  }
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/7j5bbbum/';

  render() {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10, right: 30, left: 0, bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
