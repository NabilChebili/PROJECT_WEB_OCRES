import React, { PureComponent } from 'react';
import './Outil3.css';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

import axios from 'axios';


class Outil3 extends React.Component{

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
            
            axios.get('http://localhost:3000/outil3')
           .then((response) => 
           {
            var data = [];    
            var dataRecu;
                dataRecu = response.data.dataO1;
                for (let i = 0; i < dataRecu.length; i++) {
                    if(dataRecu[i].visible === true){
                    data.push({name : dataRecu[i].jour,uv : dataRecu[i].taches});}
                }
                this.setState({data:data})
               
           })
       }
       catch(err){
           console.log(err);
       }
    }
};


const data = [
  {
    name: 'Jack Danials', profit: 24700,
  },
  {
    name: 'Steven Buff', profit: 73980,
  },
  {
    name: 'Joe Ridden', profit: 98000,
  },
  {
    name: 'Sarah Dupont', profit: 39080,
  },
  {
    name: 'Steve McColneil', profit: 58000,
  },
  {
    name: 'Mia Nowsh', profit: 38000,
  },
  {
    name: 'Anku Sour', profit: 53000,
  },
];



const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p  className="label texte">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export default class Example extends PureComponent {

  render() {
    return (
      <div>
      <h5 class="texte">  Profit par mois par employé : </h5>
      <div style={{ width: '95%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart
            width={800}
            height={400}
            data={data}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="profit" barSize={80} fill="#4C50A4" />
          </BarChart>
        </ResponsiveContainer>
        </div>
      </div>
    );
  }
}
