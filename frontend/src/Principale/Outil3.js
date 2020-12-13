import React, { PureComponent } from 'react';
import './Outil3.css';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

import axios from 'axios';

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
            var dataRecu = response.data.dataO1;
  
                for (let i = 0; i < dataRecu.length; i++) {
                    
                    data.push({name : dataRecu[i].name,profit : dataRecu[i].profit});}
                
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
        <h5 class="texte">  Profit par mois par employé : </h5>
        <div style={{ width: '95%', height: 300 }}>
          <ResponsiveContainer>
            <BarChart
              width={800}
              height={400}
              data={this.state.data}
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
};


/* const data = [
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
 */




export default Outil3;

  

