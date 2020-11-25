import React from 'react';
import AdOutil1 from './AdOutil1';
import AdOutil2 from './AdOutil2';
import AdOutil3 from './AdOutil3';
import AdOutil4 from './AdOutil4';

//import logo from './logo.svg';
import './Admin.css';

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

class Board extends React.Component{

  constructor(props){
      super(props);
      this.state = {

      };
  }

  

    render(){
      return (           
            <div class="container">
                <h4>Voici ici votre Page ADMIN</h4>
                <p>Ici vous pouvez modifier les données des différentes outil</p>   
                <AdOutil1/>
                <br></br>
                <AdOutil2/>
                <br></br>
                <AdOutil3/>
                <br></br>
                <AdOutil4/>

            </div>
        );
    }
}

class PageAdmin extends React.Component{

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
               <Board />
          </div>
      );
  }
}


export default PageAdmin;
