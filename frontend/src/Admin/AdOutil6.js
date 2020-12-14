import React from 'react';
import './AdOutil6.css';

import axios from 'axios';

// Lodash utils library
const _ = require('lodash');

class AdOutil6 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data : []
        };
    }
    
    componentDidMount(){
        
        try{
            axios.get('http://localhost:3000/outil6')
            .then((response) => 
            {       
                var dataRecu;
                dataRecu = response.data.dataO1;
                console.log(response.data.dataO1)
                
                this.setState({ data : dataRecu})
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    
        }
        catch(err){
            console.log(err);
        }
       
    }


    change(){
        let dataTemp = this.state.data;
        dataTemp[0].chartValue = document.getElementById("chartValueChange").value;
                fetch('http://localhost:3000/outil6', {
                    method: 'DELETE',
                    mode:"cors",
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
                        "Content-Type":"application/json"
                    },
                
                })
                .then(function (response) {
                    
                })
                .catch(function (error) {
                    console.log(error);
                }); 

                axios.put('http://localhost:3000/outil6',{ data: dataTemp })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
    }


 
    render(){
        return (           
            <div class="">

            <h5>Outil 6 : Epanouissement des salariés </h5>
            <h7>Entrez un pourcentage</h7>
            <br></br>
            <form>
            <text class="text">Pourcentage :</text>
            <input class="text" type="number" id="chartValueChange" min="0" max="100"/>%
            <br></br>
            <input type="submit" value="Envoyer" onClick={() => this.change()}/>
            </form>
            </div>
        );
    }
}

export default AdOutil6;