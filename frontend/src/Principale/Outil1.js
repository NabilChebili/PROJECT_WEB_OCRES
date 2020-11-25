import React from 'react';
import './Outil1.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis} from 'recharts';


const data = [{name: 'Lundi', uv: 5, pv: 3, amt: 2400},
              {name: 'Mardi', uv: 10, pv: 2400, amt: 2400},
              {name: 'Mercredi', uv: 10, pv: 2400, amt: 2400},
              {name: 'Jeudi', uv: 10, pv: 2400, amt: 2400},
              {name: 'Vendredi', uv: 10, pv: 2400, amt: 2400},
              {name: 'Samedi', uv: 10, pv: 2400, amt: 2400}];


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
                <LineChart width={500} height={300} data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
                
            </div>
        );
    }
}

export default Outil1;

