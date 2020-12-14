import React from 'react';
import './AdOutil7.css';

import axios from 'axios';

const _ = require('lodash');

class AdOutil7 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            user: "Adrien",
            data : [],
            err : "",
        };
    }
  
        componentDidMount(){
        
       try{
            axios.get('http://localhost:3000/outil7')
            .then((response) => 
            {       
                var dataRecu;
                dataRecu = response.data.dataO1;
                
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
        dataTemp[0].pourcentage = document.getElementById("pourcentageChange").value;
                fetch('http://localhost:3000/outil7', {
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

                axios.put('http://localhost:3000/outil7',{ data: dataTemp })
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

            <h5>Outil 7 : Part du marché </h5>
            <h7>Entrez un pourcentage</h7>
            <br></br>
            <form>
            <text class="text">Pourcentage :</text>
            <input class="text" type="number" id="pourcentageChange" min="0" max="100"/>%
            <br></br>
            <input type="submit" value="Envoyer" onClick={() => this.change()}/>
            </form>
            </div>
        );
    }
}

export default AdOutil7;