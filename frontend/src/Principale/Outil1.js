import React from 'react';
import './Outil1.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis,ResponsiveContainer} from 'recharts';


const data = [{name: 'Lundi', uv: 5, pv: 3, amt: 2400},
              {name: 'Mardi', uv: 2, pv: 2400, amt: 2400},
              {name: 'Mercredi', uv: 6, pv: 2400, amt: 2400},
              {name: 'Jeudi', uv: 8, pv: 2400, amt: 2400},
              {name: 'Vendredi', uv: 9, pv: 2400, amt: 2400},
              {name: 'Samedi', uv: 1, pv: 2400, amt: 2400}];


class Outil1 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            user: "Adrien",
        };
    }

    

    render(){
        return (           
            <div>
                <h6 class="texte">Vos tâches éffectuées pendant la semaine</h6>
               <div style={{ width: '95%', height: 300 }}>
               <ResponsiveContainer>
                <LineChart width={500} height={300} data={data}>
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

