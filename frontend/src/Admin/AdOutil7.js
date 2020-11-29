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

            <h5>Outil 7 : Part du marché </h5>
            <h7>Entrez un pourcentage</h7>
            <br></br>
            <form>
            <text class="text">Pourcentage :</text>
            <input class="text" type="number" name="addDate" min="0" max="100"/>%
            <br></br>
            <input type="submit" value="Envoyer" />
            </form>
            </div>
        );
    }
}

export default AdOutil7;