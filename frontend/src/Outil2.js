import React from 'react';
import './Outil2.css';



class Outil2 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            user: "Adrien",
        };
    }

    

    render(){
        return (           
            <div class=" ">
                <h6>Votre TODO list</h6>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">Numéro</th>
                        <th scope="col">Description</th>
                        <th scope="col">Deadline</th>
                        <th scope="col">Qui</th>
                        <th scope="col">Statut</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                            <label class="form-check-label" for="exampleRadios1">
                                Default radio
                            </label>
                        </td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        );
    }
}

export default Outil2;
