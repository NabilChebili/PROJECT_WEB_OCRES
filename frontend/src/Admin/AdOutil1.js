import React from 'react';
import './AdOutil1.css';

import axios from 'axios';
import { Component } from 'react';



class AdOutil1 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            user: "Adrien",
            data : [],
            err : "",
        };
        
    }
  
    componentDidMount(){
        var datatemp = [];
        try{
            axios.get('http://localhost:3000/outil1')
            .then((response) => 
            {       
                var dataRecu;
                dataRecu = response.data.dataO1;
                for (let i = 0; i < dataRecu.length; i++) {
                    if(dataRecu[i].visible === true){
                        datatemp.push({jour : dataRecu[i].jour,taches : dataRecu[i].taches,visible : dataRecu[i].taches});
                    }
                }
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

    changeVisible(num){
        if(this.state.data.length !== 0 )
        {
            let dataTemp = this.state.data;
            dataTemp[num].visible = !this.state.data[num].visible
            this.setState({data :  dataTemp})
        }
    }

    changeNombre(num){
        let jour = 0;
        if(num === 0)
        {
            jour = document.getElementById("lundi").value;
        }
        else if(num === 1){
            jour = document.getElementById("mardi").value;
        }
        else if(num === 2){
            jour = document.getElementById("mercredi").value;
        }
        else if(num === 3){
            jour = document.getElementById("jeudi").value;
        }
        else if(num === 4){
            jour = document.getElementById("vendredi").value;
        }
        else if(num === 5){
            jour = document.getElementById("samedi").value;
        }
        
        if(this.state.data.length !== 0 )
        {
            let dataTemp = this.state.data;
            dataTemp[num].taches = jour
            this.setState({data :  dataTemp})
        }
    }

    Lundi(){
        
               /*  <label>
                    <input class="checkbox" type="checkbox" id="lundi" name="lundi" checked></input>
                    <text class="text">Lundi :</text>
                    <input class="checkbox" type="number" name="lundiNum" />
                </label> */
            

        let check = false;
        let taches = 0;
        
        if(this.state.data.length !== 0 )
        {
            taches = this.state.data[0].taches;
            if(this.state.data[0].visible === true)
            {
                check = true
            }
        }
        
        return(
            <label>
                <input class="checkbox" type="checkbox"  name="lundi" checked={check} onChange={() => this.changeVisible(0)} ></input>
                <text class="text">Lundi :</text>
                <input type="number" id="lundi" name="lundiNum" placeholder={taches} onChange={() => this.changeNombre(0)}/>
            </label>
        )

       
    }

    Mardi(){
        
        let check = false;
        let taches = 0;
        
        if(this.state.data.length !== 0 )
        {
            taches = this.state.data[1].taches;
            if(this.state.data[1].visible === true)
            {
                check = true
            }
        }
        
        return(
            <label>
                <input class="checkbox" type="checkbox"  name="mardi" checked={check} onChange={() => this.changeVisible(1)} ></input>
                <text class="text">Mardi :</text>
                <input type="number" id="mardi" name="mardiNum" placeholder={taches} onChange={() => this.changeNombre(1)}/>
            </label>
        )
        
        

       
    }

    Mercredi(){
        let check = false;
        let taches = 0;
        
        if(this.state.data.length !== 0 )
        {
            taches = this.state.data[2].taches;
            if(this.state.data[2].visible === true)
            {
                check = true
            }
        }
        
        return(
            <label>
                <input class="checkbox" type="checkbox"  name="mercredi" checked={check} onChange={() => this.changeVisible(2)} ></input>
                <text class="text">Mercredi :</text>
                <input type="number" id="mercredi" name="mercrediNum" placeholder={taches} onChange={() => this.changeNombre(2)}/>
            </label>
        )

       
    }

    Jeudi(){
        let check = false;
        let taches = 0;
        
        if(this.state.data.length !== 0 )
        {
            taches = this.state.data[3].taches;
            if(this.state.data[3].visible === true)
            {
                check = true
            }
        }
        
        return(
            <label>
                <input class="checkbox" type="checkbox"  name="jeudi" checked={check} onChange={() => this.changeVisible(3)} ></input>
                <text class="text">Jeudi :</text>
                <input type="number" id="jeudi" name="jeudiNum" placeholder={taches} onChange={() => this.changeNombre(3)}/>
            </label>
        )

       
    }

    Vendredi(){
        let check = false;
        let taches = 0;
        
        if(this.state.data.length !== 0 )
        {
            taches = this.state.data[4].taches;
            if(this.state.data[4].visible === true)
            {
                check = true
            }
        }
        
        return(
            <label>
                <input class="checkbox" type="checkbox"  name="vendredi" checked={check} onChange={() => this.changeVisible(4)} ></input>
                <text class="text">Vendredi :</text>
                <input type="number" id="vendredi" name="vendrediNum" placeholder={taches} onChange={() => this.changeNombre(4)}/>
            </label>
        )

       
    }

    Samedi(){
        let check = false;
        let taches = 0;
        
        if(this.state.data.length !== 0 )
        {
            taches = this.state.data[5].taches;
            if(this.state.data[5].visible === true)
            {
                check = true
            }
        }
        
        return(
            <label>
                <input class="checkbox" type="checkbox"  name="samedi" checked={check} onChange={() => this.changeVisible(5)} ></input>
                <text class="text">Samedi :</text>
                <input type="number" id="samedi" name="samediNum" placeholder={taches} onChange={() => this.changeNombre(5)}/>
            </label>
        )

       
    }
  
    majBDD(){

        let data1 = this.state.data;
        console.log(data1);

        fetch('http://localhost:3000/outil1', {
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

        axios.put('http://localhost:3000/outil1',{ data: data1 }).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

        /* fetch('http://localhost:3000/outil1', {
            method: 'PUT',
            mode:"cors",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
                "Content-Type":"application/json"
            },
             body: JSON.stringify({jour:"dimanche",taches:10,visible:false})
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
*/
       
    } 
    

    render(){
        
        
        return (           
          <div>
              
              <h5>Outil 1 : Vos tâches éffectuées pendant la semaine </h5>
              <h4 class="bg-danger">{this.state.err}</h4>
              <h7>Checker les jours dont vous voulez qu'on voit et entrez leurs valeurs</h7>
              <form>
                  {this.Lundi()}
                  <br></br>
                  {this.Mardi()}
                  <br></br>
                  {this.Mercredi()}
                  <br></br>
                  {this.Jeudi()}
                  <br></br>
                  {this.Vendredi()}
                  <br></br>
                  {this.Samedi()}
                  <br></br>
                  
              </form>
              <button value="Envoyer" onClick={() => this.majBDD()}>Envoyer</button>
  
          </div>
        );
    }
}

export default AdOutil1;