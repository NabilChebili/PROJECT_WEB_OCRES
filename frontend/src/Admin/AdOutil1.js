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
        };
        
    }
  
    componentDidMount(){
        var datatemp = [];
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
        var mardi = document.getElementById("mardi").value;
        if(this.state.data.length !== 0 )
        {
            let dataTemp = this.state.data;
            dataTemp[num].taches = mardi
            this.setState({data :  dataTemp})
        }
    }

    Lundi(){
        if(this.state.data.length == 0 )
        {
            return(
                <label>
                    <input class="checkbox" type="checkbox" id="lundi" name="lundi" checked></input>
                    <text class="text">Lundi :</text>
                    <input class="checkbox" type="number" name="lundiNum" />
                </label>
            )
        }
        else{
            return(
            <label>
                <input class="checkbox" type="checkbox" id="lundi" name="lundi" checked></input>
                <text class="text">Lundi :</text>
                <input class="checkbox" type="number" name="lundiNum" value={this.state.data[0].taches} />
            </label>
            )
        }

       
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
        if(this.state.data.length == 0 )
        {
            return(
                <label>
                    <input class="checkbox" type="checkbox" id="lundi" name="lundi" checked></input>
                    <text class="text">Lundi :</text>
                    <input class="checkbox" type="number" name="lundiNum" />
                </label>
            )
        }
        else{
            return(
            <label>
                <input class="checkbox" type="checkbox" id="lundi" name="lundi" checked></input>
                <text class="text">Lundi :</text>
                <input class="checkbox" type="number" name="lundiNum" value={this.state.data[0].taches} />
            </label>
            )
        }

       
    }

    Jeudi(){
        if(this.state.data.length == 0 )
        {
            return(
                <label>
                    <input class="checkbox" type="checkbox" id="lundi" name="lundi" checked></input>
                    <text class="text">Lundi :</text>
                    <input class="checkbox" type="number" name="lundiNum" />
                </label>
            )
        }
        else{
            return(
            <label>
                <input class="checkbox" type="checkbox" id="lundi" name="lundi" checked></input>
                <text class="text">Lundi :</text>
                <input class="checkbox" type="number" name="lundiNum" value={this.state.data[0].taches} />
            </label>
            )
        }

       
    }

    Vendredi(){
        if(this.state.data.length == 0 )
        {
            return(
                <label>
                    <input class="checkbox" type="checkbox" id="lundi" name="lundi" checked></input>
                    <text class="text">Lundi :</text>
                    <input class="checkbox" type="number" name="lundiNum" />
                </label>
            )
        }
        else{
            return(
            <label>
                <input class="checkbox" type="checkbox" id="lundi" name="lundi" checked></input>
                <text class="text">Lundi :</text>
                <input class="checkbox" type="number" name="lundiNum" value={this.state.data[0].taches} />
            </label>
            )
        }

       
    }

    Samedi(){
        if(this.state.data.length == 0 )
        {
            return(
                <label>
                    <input class="checkbox" type="checkbox" id="lundi" name="lundi" checked></input>
                    <text class="text">Lundi :</text>
                    <input class="checkbox" type="number" name="lundiNum" />
                </label>
            )
        }
        else{
            return(
            <label>
                <input class="checkbox" type="checkbox" id="lundi" name="lundi" checked></input>
                <text class="text">Lundi :</text>
                <input class="checkbox" type="number" name="lundiNum" value={this.state.data[0].taches} />
            </label>
            )
        }

       
    }
  

    

    render(){
        
        
        return (           
          <div>
              
              <h5>Outil 1 : Vos tâches éffectuées pendant la semaine </h5>
              <h7>Checker les jours dont vous voulez qu'on voit et entrez leurs valeurs</h7>
              <form>
                  {this.Lundi()}
                  <br></br>
                  {this.Mardi()}
                  <br></br>
                  <label>
                      <input class="checkbox" type="checkbox" id="mercredi" name="mercredi" checked></input> 
                      <text class="text">Mercredi :</text>
                      <input type="number" name="mercrediNum" />
                  </label>
                  <br></br>
                  <label>
                      <input class="checkbox" type="checkbox" id="jeudi" name="jeudi" checked></input>
                      <text class="text">Jeudi :</text>
                      <input type="number" name="jeudiNum" />
                  </label>
                  <br></br>
                  <label>
                      <input class="checkbox" type="checkbox" id="vendredi" name="vendredi" checked></input>
                      <text class="text">Vendredi :</text>
                      <input type="number" name="vendrediNum" />
                  </label>
                  <br></br>
                  <label>
                      <input class="checkbox" type="checkbox" id="samedi" name="samedi" checked></input>
                      <text class="text">Samedi :</text>
                      <input type="number" name="samediNum" />
                  </label>
                  <br></br>
                  <input type="submit" value="Envoyer" />
              </form>
  
          </div>
        );
    }
}

export default AdOutil1;