import React from 'react';
import './AdOutil3.css';

import axios from 'axios';

// Lodash utils library
const _ = require('lodash');

class AdOutil3 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data : []
        };
    }
    
    componentDidMount(){
        
        try{
            axios.get('http://localhost:3000/outil3')
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

    add(){
        let dataTemp = this.state.data;
        dataTemp.push({name : document.getElementById("nomAdd").value, profit : document.getElementById("profitAdd").value});

        fetch('http://localhost:3000/outil3', {
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

        axios.put('http://localhost:3000/outil3',{ data: dataTemp }).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    change(){
        let dataTemp = this.state.data;
        for (let i = 0; i < dataTemp.length; i++) {
            if(dataTemp[i].name === document.getElementById("nomChange").value){
                dataTemp[i].profit = document.getElementById("profitChange").value;
                fetch('http://localhost:3000/outil3', {
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

                axios.put('http://localhost:3000/outil3',{ data: dataTemp }).then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
            
        }
       

        

    }


    delete(){
        let dataTemp = this.state.data;
        for (let i = 0; i < dataTemp.length; i++) {
            if(dataTemp[i].name === document.getElementById("nomDelete").value){
                dataTemp.splice(i,1);
                fetch('http://localhost:3000/outil3', {
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

                axios.put('http://localhost:3000/outil3',{ data: dataTemp }).then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
            
        }
    }

    
  
    render(){
        return (           
            <div class="">

            <h5>Outil 3 : Profit par mois par employé </h5>
            
            <br></br>
            <form>
            <h6>Add :</h6> 
            <text class="text">Nom de l'employé :</text>
            <input class="text" type="textarea" id="nomAdd"  />
            <br></br>
            <text class="text">Profit :</text>
            <input class="text" type="number" id="profitAdd"  />
            <br></br>
            <input type="submit" value="Envoyer" onClick={() => this.add()}/>
            </form>
            
            <br></br>

            <form>
            <h6>Change :</h6> 
            <text class="text">Nom de l'employé :</text>
            <input class="text" type="textarea" id="nomChange" />
            <br></br>
            <text class="text">Profit :</text>
            <input class="text" type="number" id="profitChange" />
            <br></br>
            <input type="submit" value="Envoyer" onClick={() => this.change()}/>
            </form>   
            

            <br></br>

            <form>
            <h6>Delete :</h6> 
            <text class="text">Nom de l'employé :</text>
            <input class="text" type="textarea" id="nomDelete" />
            <br></br>
            
            <input type="submit" value="Envoyer" onClick={() => this.delete()}/>
            </form>

            </div>
        );
    }
}

export default AdOutil3;