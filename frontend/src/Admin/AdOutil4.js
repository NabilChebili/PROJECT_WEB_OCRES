import React from 'react';
import './AdOutil4.css';

class AdOutil4 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
  
        };
    }
  
    
  
    render(){
        return (           
            <div class="">

            <h5>Outil 4 : Représentation des ventes dans le monde </h5>
            
            <br></br>
            <form>
            <h6>Add :</h6> 
            <text class="text">Pays :</text>
            <input class="text" type="textarea" name="addDesc" />
            <br></br>
            <text class="text">Ventes :</text>
            <input class="text" type="number" name="addDate" />
            <br></br>
            <input type="submit" value="Envoyer" />
            </form>
            
            <br></br>

            <form>
            <h6>Change :</h6> 
            <text class="text">Pays :</text>
            <input class="text" type="textarea" name="addDesc" />
            <br></br>
            <text class="text">Vente :</text>
            <input class="text" type="number" name="addDate" />
            <br></br>
            <input type="submit" value="Envoyer" />
            </form>   

            <br></br>

            <form>
            <h6>Delete :</h6> 
            <text class="text">Pays :</text>
            <input class="text" type="textarea" name="addDesc" />
            <br></br>
            
            <input type="submit" value="Envoyer" />
            </form>

            </div>
        );
    }
}

export default AdOutil4;