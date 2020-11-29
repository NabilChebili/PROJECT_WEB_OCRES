import React from 'react';
import './AdOutil7.css';

class AdOutil7 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
  
        };
    }
  
    
  
    render(){
        return (           
            <div class="">

            <h5>Outil 4 : Représentation des ventes dans le monde </h5>
            <h7>Checker les jours dont vous voulez qu'on voit et entrez leurs valeurs</h7>
            <br></br><br></br>
            <form>
            <text class="text">Pourcentage :</text>
            <input class="text" type="number" name="addDate" min="0" max="100"/>
            <br></br>
            <input type="submit" value="Envoyer" />
            </form>
            </div>
        );
    }
}

export default AdOutil7;