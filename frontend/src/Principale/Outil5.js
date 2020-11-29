import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Janvier', "18-25": 2100, "25-45": 2910, "45-65": 4310, "65+": 810,
  },
  {
    name: 'Février', "18-25": 1710, "25-45": 3330, "45-65": 3890, "65+": 630,
  },
  {
    name: 'Mars', "18-25": 1970, "25-45": 3620, "45-65": 3970, "65+": 320,
  },
  {
    name: 'Avril', "18-25": 2210, "25-45": 3840, "45-65": 4620, "65+": 640,
  },
  {
    name: 'Mai', "18-25": 2630, "25-45": 2960, "45-65": 4980, "65+": 1060,
  },
  {
    name: 'Juin', "18-25": 2380, "25-45": 2450, "45-65": 4730, "65+": 590,
  },
  {
    name: 'Juillet', "18-25": 1820, "25-45": 3280, "45-65": 4760, "65+": 1500,
  },
    {
    name: 'Aout', "18-25": 1750, "25-45": 2960, "45-65": 4240, "65+": 860,
  },
    {
    name: 'Septembre', "18-25": 2140,"25-45": 3670, "45-65": 3950, "65+": 580,
  },
      {
    name: 'Octobre', "18-25": 2200,"25-45": 3100, "45-65": 3610, "65+": 910,
  },
      {
    name: 'Novembre', "18-25": 2570,"25-45": 2890, "45-65": 4130, "65+": 830,
  },
      {
    name: 'Décembre', "18-25": 3530,"25-45": 3310, "45-65": 4500, "65+": 700,
  }
];

export default class Example extends PureComponent {

  render() {
    return (
      <div>
      <h5 class="texte">Répartition des abonnés en fonction de leur âge :</h5>
      <div style={{ width: '95%', height: 300 }}>
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
            <Area type="monotone" dataKey="18-25" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="25-45" stackId="1" stroke="#182850" fill="#182850" />
            <Area type="monotone" dataKey="45-65" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="65+" stackId="1" stroke="#FFBB28" fill="#FFBB28" />

          </AreaChart>
        </ResponsiveContainer>
      </div>
      </div>
    );
  }
}
