import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis, Legend, Tooltip, fontSize} from 'recharts';

const data = [
  {
    name: 'osef', pourcentage: 75, fill: '#32CD32',
  },

];


export default class Example extends PureComponent {

  render() {
    return (
    <div class="graph">
    <h5 class="texte">  Part du marché : </h5>
      <RadialBarChart 
        width={300}
        height={299} 
        cx={130} 
        cy={130} 
        innerRadius={80} 
        barSize={35} 
        data={data}
      >

      <RadialBar 
        minAngle={15} 
        label={{ position: 'center', fill: '#32CD32', fontSize: '3rem'}} 
        background
        clockWise 
        dataKey="pourcentage" />

      <PolarAngleAxis 
        type="number" 
        domain={[0, 100]} 
        angleAxisId={0} 
        tick={false} />

      </RadialBarChart>
    </div>
    );
  }
}
