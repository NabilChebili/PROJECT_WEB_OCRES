import React from 'react';
import Outil1 from './Outil1';
import Outil2 from './Outil2';
import Outil3 from './Outil3';
import Outil4 from './Outil4';
import Outil5 from './Outil5';
import Outil6 from './Outil6';
import Outil7 from './Outil7';



//import logo from './logo.svg';
import './App.css';

class Toolbar extends React.Component{

  constructor(props){
      super(props);
      this.state = {
        user: "Adrien",
      };
  }

  render(){
      return (    
          
        <div class="d-flex justify-content-between nav">
                <h2 class="p-2 texte"> Bienvenue { this.state.user } </h2>
                <form class="p-2 barre_recherche " method="POST" action="index.html" >
                    <input type="search" required class="search"/>
                    <input type="submit" name="submit" value="🔎" class="submit"/>
                </form>
        </div>
           
      );
  }
}

class DashBorad extends React.Component{

  constructor(props){
      super(props);
      this.state = {

      };
  }

  

  render(){
      return (           
          <div class="container ">
                <h4 class="texte">Votre Dashboard</h4>
                
                <div class = "outil o2 col-xl-12"><Outil2/></div>
                
                <div class="row o14">
                    <div class = "outil o1 col-xl-6"><Outil1/></div>
                    
                    <div class = "outil o4 col-xl-5"><Outil4/></div>
                    
                </div>
                <div class = "outil o3 col-xl-12 "><Outil3/></div>

                <div class = "outil o5 col-xl-12 "><Outil5/></div>

                <div class="row o14">
                    <div class = "outil o6 col-xl-6"><Outil6/></div>
                    
                    <div class = "outil o7 col-xl-5"><Outil7/></div>
                    
                </div>

          </div>
      );
  }
}

class Page extends React.Component{

  constructor(props){
      super(props);
      this.state = {

      };
  }

  

  render(){
      return (           
          <div class="">
              <meta name="viewport" content="initial-scale=0.7"></meta>
               <Toolbar />
               <hr></hr>
               <DashBorad />
          </div>
      );
  }
}


export default Page;
