var express = require('express');
var app = express();
const outil4 = require('../models/outil4')

const cors = require('cors')
app.use(cors())

/* GET users listing. */
app.get('/', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    try{
        const dataO1 = await outil4.find();
        res.status(200).json({dataO1});
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
    
});

/* PUT users listing. */
app.put('/', (req, res) => {
    const dataO1 = req.body.data;

    for (let i = 0; i < dataO1.length; i++) {
        const dataJ = dataO1[i];
        const paysAjt = new outil4({
            name : dataJ.name,
            value : dataJ.value,
        })
        console.log(paysAjt);
        try {
            const newPays = paysAjt.save();
            res.status(201);
        } catch (error) {
            res.status(400).json({message: error.message})
        }
        
    }
    res.status(200).json({
        message:`Tous les pays ont été ajoutés`
    });
    
    
    
    
});



/* DELETE All. */
app.delete('/', (req, res) => {
    outil4.deleteMany().then(function(){
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