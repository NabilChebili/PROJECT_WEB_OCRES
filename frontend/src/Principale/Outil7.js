import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis,} from 'recharts';
import './Outil7.css';
import axios from 'axios';


const COLORS = ['#32CD32'];


class Outil7 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            user: "Adrien",
            data: [],
        };
    }

    componentDidMount(){
        this.retourApi();
    }
    
    retourApi(){
        try{
            
            axios.get('http://localhost:3000/outil7')
           .then((response) => 
           {
            console.log(response.data)   
            var data = [];
            data.push({pourcentage : response.data.dataO1[0].pourcentage});
            this.setState({data:data})
            console.log(data)
               
           })
       }
       catch(err){
           console.log(err);
       }
    }


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
        data={this.state.data}
        fill={COLORS} 
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
export default Outil7;
