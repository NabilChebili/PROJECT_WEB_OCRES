import React from 'react';
import './Outil2.css';

var arrayTodoList =[
    {description : "Construire l'architecture du projet", deadline:"25/11/2020", qui:"Charlotte chrisler", statut:"non fait"},
    {description : "Créer le premier composant", deadline:"29/11/2020", qui:"Tom Jersey", statut:"non fait"},
    {description : "Créer le deuxième composant", deadline:"10/12/2020", qui:"Bapt Jim", statut:"en cours"},
    {description : "Créer le trosième composant", deadline:"15/12/2020", qui:"James Litiz", statut:"fait"},
]

var couleur = [];

class Outil2 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            user: "Adrien",
            code:[],
            
        };
    }

    chngStatut(event)
    {
        let num = event.target.name;
        arrayTodoList[num].statut = event.target.value; 
        if(event.target.value === "fait"){
            document.getElementById(num).className='table-success';
        }
        else if(event.target.value === "non fait"){
           document.getElementById(num).className='table-danger';
        }
        else if(event.target.value === "en cours"){
           document.getElementById(num).className='table-warning';
        }
        else{
            document.getElementById(num).className='table-light';
        }
        console.log(arrayTodoList);
    }

    codeRemplissage(){
        for (let i = 0; i < arrayTodoList.length; i++) {
            let check1 = false ;
            let check2 = false ;
            let check3 = false ;

            if(arrayTodoList[i].statut === "fait"){
                couleur.push("table-success");
                check3 = true;
            }
            else if(arrayTodoList[i].statut === "non fait"){
               couleur.push("table-danger");
                check1 = true;
            }
            else if(arrayTodoList[i].statut === "en cours"){
               couleur.push("table-warning");
                check2 = true;
            }
            else{
                couleur.push("table-light");
            }
 
            let radio = "radio"+i;

            this.state.code.push(
            <tr class = {couleur[i]} id={i}>
            <th scope="row">{i+1}</th>
            <td>{arrayTodoList[i].description}</td>
            <td>{arrayTodoList[i].deadline}</td>
            <td>{arrayTodoList[i].qui}</td>
            <td>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name={i} id={radio+1} value="non fait" defaultChecked={check1} onChange={this.chngStatut}  ></input>
                    <label class="form-check-label" for={radio+1}>
                        Non fait
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name={i} id={radio+2}  value="en cours" defaultChecked={check2} onChange={this.chngStatut} ></input>
                    <label class="form-check-label" for={radio+2}>
                        En cours
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name={i} id={radio+3}  value="fait" defaultChecked={check3} onChange={this.chngStatut} ></input>
                    <label class="form-check-label" for={radio+3}>
                        Fait
                    </label>
                </div>
            </td>
            </tr>
            );
            
        }
    }

    render(){
        this.codeRemplissage();
        return (           
            <div class=" ">
                <h6 class="texte">Votre TODO list</h6>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Description</th>
                        <th scope="col">Deadline</th>
                        <th scope="col">Qui</th>
                        <th scope="col ligne">Statut</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.code}
                    </tbody>
                </table>
                
            </div>
        );
    }
}

export default Outil2;
