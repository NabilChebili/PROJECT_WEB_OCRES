import React from 'react';
import './AdOutil2.css';

class AdOutil2 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
  
        };
    }
  
    
  
    render(){
        return (           
          <div class="">

            <h5>Outil 2 : Votre TODO list </h5>
           
            <br></br>
            <form>
            <h6>Add :</h6> 
            <text class="text">Description :</text>
            <input class="text" type="textarea" name="addDesc" />
            <br></br>
            <text class="text">Date :</text>
            <input class="text" type="date" name="addDate" />
            <br></br>
            <text class="text">Qui :</text>
            <input class="text" type="text" name="addDate" />
            <br></br>
            <input type="submit" value="Envoyer" />
            </form>
            
            <br></br>

            <form>
            <h6>Change :</h6> 
            <text class="text">ID :</text>
            <input class="text" type="number" name="addDate" />
            <br></br>
            <text class="text">Description :</text>
            <input class="text" type="textarea" name="addDesc" />
            <br></br>
            <text class="text">Date :</text>
            <input class="text" type="date" name="addDate" />
            <br></br>
            <text class="text">Qui :</text>
            <input class="text" type="text" name="addDate" />
            <br></br>
            <input type="submit" value="Envoyer" />
            </form>   

            <br></br>

            <form>
            <h6>Delete :</h6> 
            <text class="text">ID :</text>
            <input class="text" type="number" name="addDate" />
            <br></br>
            
            <input type="submit" value="Envoyer" />
            </form>

        </div>
    );
}
}

export default AdOutil2;