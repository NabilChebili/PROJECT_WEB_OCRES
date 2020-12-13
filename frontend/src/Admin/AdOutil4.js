import React from 'react';
import './AdOutil4.css';

import axios from 'axios';

// Lodash utils library
const _ = require('lodash');

class AdOutil4 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data : []
        };
    }
    
    componentDidMount(){
        
        try{
            axios.get('http://localhost:3000/outil4')
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
        dataTemp.push({name : document.getElementById("nameAdd").value, value : document.getElementById("valueAdd").value});

        fetch('http://localhost:3000/outil4', {
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

        axios.put('http://localhost:3000/outil4',{ data: dataTemp }).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    change(){
        let dataTemp = this.state.data;
        for (let i = 0; i < dataTemp.length; i++) {
            if(dataTemp[i].name === document.getElementById("nameChange").value){
                dataTemp[i].value = document.getElementById("valueChange").value;
                fetch('http://localhost:3000/outil4', {
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

                axios.put('http://localhost:3000/outil4',{ data: dataTemp }).then(function (response) {
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
            if(dataTemp[i].name === document.getElementById("nameDelete").value){
                dataTemp.splice(i,1);
                fetch('http://localhost:3000/outil4', {
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

                axios.put('http://localhost:3000/outil4',{ data: dataTemp }).then(function (response) {
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

            <h5>Outil 4 : Représentation des ventes dans le monde </h5>
            
            <br></br>
            <form>
            <h6>Add :</h6> 
            <text class="text">Pays :</text>
            <input class="text" type="textarea"  id="nameAdd" />
            <br></br>
            <text class="text">Ventes :</text>
            <input class="text" type="number"  id="valueAdd" />
            <br></br>
            <input type="submit" value="Envoyer" onClick={() => this.add()}/>
            </form>
            
            <br></br>

            <form>
            <h6>Change :</h6> 
            <text class="text">Pays :</text>
            <input class="text" type="textarea"  id="nameChange" />
            <br></br>
            <text class="text">Vente :</text>
            <input class="text" type="number"  id="valueChange" />
            <br></br>
            <input type="submit" value="Envoyer" onClick={() => this.change()}/>
            </form>   

            <br></br>

            <form>
            <h6>Delete :</h6> 
            <text class="text">Pays :</text>
            <input class="text" type="textarea"  id="nameDelete" />
            <br></br>
            
            <input type="" value="Envoyer" onClick={() => this.delete()}/>
            </form>

            </div>
        );
    }
}

export default AdOutil4;