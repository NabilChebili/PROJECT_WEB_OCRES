import React, { PureComponent } from 'react';
import './Outil4.css';

import {
  PieChart, Pie, Tooltip,Cell
} from 'recharts';
import axios from 'axios';



const COLORS = ['#4C50A4', '#6A8DD1', '#7BC6F0', '#8C64E2', '#182850' ];



class Outil4 extends React.Component{

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
            
            axios.get('http://localhost:3000/outil4')
           .then((response) => 
           {
            console.log(response.data)
            var data = [];    
            var dataRecu = response.data.data01;
            console.log(dataRecu);
                for (let i = 0; i < dataRecu.length; i++) {
                    
                    data.push({name : dataRecu[i].name,value : dataRecu[i].value});}
                
                this.setState({data:data})
               
           })
       }
       catch(err){
           console.log(err);
       }
    }



  render() {
    return (
            <div>
                <h5 class="texte">Représentation des ventes dans le monde :</h5>
                <PieChart width={400} height={400}>
                  <Pie
                    dataKey="value" 
                    isAnimationActive={false} 
                    data={this.state.data} 
                    cx={185} 
                    cy={160} 
                    outerRadius={120} 
                    fill="#8884d8" 
                    label
                    >
                  
                    {
                      this.state.data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                  </Pie>
                  <Tooltip />
                </PieChart>
            </div>
    );
  }
}
export default Outil4;
