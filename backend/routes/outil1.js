var express = require('express');
var app = express();
const outil1 = require('../models/outil1')

const cors = require('cors')
app.use(cors()) 
 
/* GET users listing. */
app.get('/', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    try{
        const dataO1 = await outil1.find();
        res.status(200).json({dataO1});
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
    
});

/* PUT users listing. */
app.put('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const dataO1 = req.body.data;
    for (let i = 0; i < dataO1.length; i++) {
        const dataJ = dataO1[i];
        const jourAjt = new outil1({
            jour : dataJ.jour,
            taches : dataJ.taches,
            visible : dataJ.visible,
            numero : dataJ.numero,
        })
        console.log(jourAjt);
        try {
            const newDay = jourAjt.save();
            res.status(201);
        } catch (error) {
            res.status(400).json({message: error.message})
        }
        
    }
    res.status(200).json({
        message:`Tout les jours ont été ajoutés`
    });
    
    
    
    
});



/* DELETE All. */
app.delete('/',async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const dataO1 = await outil1.deleteMany().then(function(){
        res.status(200).json({
            message: "tout à été supprimé"
        })
    }).catch(function(error){
        res.status(400).json({
            message: "Erreur"
        });
    });
    
});

module.exports = app;