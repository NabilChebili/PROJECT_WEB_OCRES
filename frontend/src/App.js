import React from 'react';
import Outil1 from './Outil1';
import Outil2 from './Outil2';
import Outil3 from './Outil3';
import Outil4 from './Outil4';

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
              <h2 class="p-2"> Bienvenue { this.state.user } </h2>
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
          <div class="container">
              <h4>Votre Dashboard</h4>
              <Outil1/>
              <Outil2/>
              <Outil3/>
              <Outil4/>


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
          <div class="container">
               <Toolbar />
               <hr></hr>
               <DashBorad />
          </div>
      );
  }
}


export default Page;
