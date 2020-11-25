import React from 'react';
import './AdOutil1.css';

class AdOutil1 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
  
        };
    }
  
    
  
    render(){
        return (           
          <div class="">
              
              <h5>Outil 1 : Vos tâches éffectuées pendant la semaine </h5>
              <h7>Checker les jours dont vous voulez qu'on voit et entrez leurs valeurs</h7>
              <form>
                  <label>
                      <input class="checkbox" type="checkbox" id="lundi" name="lundi" checked></input>
                      <text class="text">Lundi :</text>
                      <input class="checkbox" type="number" name="lundiNum" />
                  </label>
                  <br></br>
                  <label>
                      <input class="checkbox" type="checkbox" id="mardi" name="mardi" checked></input>
                      <text class="text">Mardi :</text>
                      <input type="number" name="mardiNum" />
                  </label>
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