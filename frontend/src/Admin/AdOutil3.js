import React from 'react';
import './AdOutil3.css';

class AdOutil3 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
  
        };
    }
  
    
  
    render(){
        return (           
            <div class="">

            <h5>Outil 3 : Profit par mois par employé </h5>
            <h7>Checker les jours dont vous voulez qu'on voit et entrez leurs valeurs</h7>
            <br></br><br></br>
            <form>
            <h6>Add :</h6> 
            <text class="text">Nom de l'employé :</text>
            <input class="text" type="textarea" name="addDesc" />
            <br></br>
            <text class="text">Profit :</text>
            <input class="text" type="number" name="addDate" />
            <br></br>
            <input type="submit" value="Envoyer" />
            </form>
            
            <br></br>

            <form>
            <h6>Change :</h6> 
            <text class="text">Nom de l'employé :</text>
            <input class="text" type="textarea" name="addDesc" />
            <br></br>
            <text class="text">Profit :</text>
            <input class="text" type="number" name="addDate" />
            <br></br>
            <input type="submit" value="Envoyer" />
            </form>   

            <br></br>

            <form>
            <h6>Delete :</h6> 
            <text class="text">Nom de l'employé :</text>
            <input class="text" type="textarea" name="addDesc" />
            <br></br>
            
            <input type="submit" value="Envoyer" />
            </form>

            </div>
        );
    }
}

export default AdOutil3;