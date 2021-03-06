import React from 'react';
import { Cell, PieChart, Pie } from 'recharts';
import axios from 'axios';

const colorData = [
    {
        value: 50, color: '#FF0000'
    },

    {
        value: 50, color: '#FF7F50'
    },

    {
        value: 50, color: '#FFD700'
    },

    {
        value: 50, color: '#00FF00'
    },
];

const sumValues = colorData
    .map(cur => cur.value)
    .reduce((a, b) => a + b);



const Arrow = ({ cx, cy, midAngle, outerRadius }) => {
    const RADIAN = Math.PI / 180;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const mx = cx + (outerRadius + width * 0.05) * cos;
    const my = cy + (outerRadius + width * 0.05) * sin;
    return (
        <g>
            <circle cx={cx} cy={cy} r={width * 0.06} fill="#696969" stroke="none"/> //le cercle de l'aiguille
            <path d={`M${cx},${cy}L${mx},${my}`} strokeWidth="8" stroke="#696969" strokeLinecap="round" />  //la flèche de l'aiguille
        </g>
    );
};
const width = 400;

class GaugeChart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arrowData : [
                { value: 0 },
                { value: 0 },
                { value: 200 - 0 }
            ]
        };
    }

    componentDidMount(){
        
        try{
            
            axios.get('http://localhost:3000/outil6')
           .then((response) => 
           {
            let dataTemp = [
                { value:  parseInt(response.data.dataO1[0].chartValue) },
                { value: 0 },
                { value: 200 - parseInt(response.data.dataO1[0].chartValue) }
            ]

            console.log(response.data.dataO1[0].chartValue);

            
            this.setState({
                arrowData : dataTemp  
            })
            
           })
       }
       catch(err){
           console.log(err);
       }
    }
    
    


        





    render(){
        return (
            <div>
                <h5 class="texte">  Epanouissement des salariés : </h5>
                <PieChart width={320} height={320}>
                    <Pie
                        data={colorData}
                        innerRadius={80}
                        outerRadius={130}
                        startAngle={180}
                        endAngle={0}   
                    >
                        {
                            colorData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colorData[index].color} />    //pour remplir les couleurs du cercle 
                            ))
                        }
                    </Pie>
                    <Pie
                        stroke="none"
                        activeIndex={1}
                        activeShape={ Arrow }   //affiche l'aiguille
                        data={ this.state.arrowData }
                        outerRadius={90}        //taille de la flèche
                        fill="none"             //pour que le demi-cercle à l'interieur de la jauge soit transparent
                        startAngle={180}
                        endAngle={0}   
                    />
                </PieChart>
            </div>
        );
    }
}

export default GaugeChart;