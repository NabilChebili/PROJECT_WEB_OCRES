import React from 'react';
import './Outil1.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis,ResponsiveContainer} from 'recharts';

import axios from 'axios';








    


    



class Outil1 extends React.Component{

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
            
            axios.get('http://localhost:3000/outil1')
           .then((response) => 
           {
            var data = [];    
            var dataRecu;
                dataRecu = response.data.dataO1;
                for (let i = 0; i < dataRecu.length; i++) {
                    if(dataRecu[i].visible === true){
                    data.push({name : dataRecu[i].jour,uv : dataRecu[i].taches,pv: 3, amt: 2400});}
                }
                this.setState({data:data})
               
           })
       }
       catch(err){
           console.log(err);
       }
    }

    render(){
        
        return (           
            <div>
                <h6 class="texte">Vos tâches éffectuées pendant la semaine</h6>
               <div style={{ width: '95%', height: 300 }}>
               <ResponsiveContainer>
                <LineChart width={500} height={300} data={this.state.data}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
              </ResponsiveContainer>
              </div>
                
            </div>
        );
    }
}

export default Outil1;

