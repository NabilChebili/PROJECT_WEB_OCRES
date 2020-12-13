var express = require('express');
var app = express();
const outil6 = require('../models/outil6')

const cors = require('cors')
app.use(cors()) 

/* GET users listing. */
app.get('/', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    try{
        const dataO1 = await outil6.find();
        res.status(200).json({dataO1});
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
    
});

/* PUT users listing. */
app.put('/', (req, res) => {
    const dataO1 = req.body.data;

        const dataJ = dataO1;
        const jaugeAjt = new outil6({
            chartValue : dataJ.chartValue*2,

        })
        console.log(jaugeAjt);
        try {
            const newJauge = jaugeAjt.save();
            res.status(201);
        } catch (error) {
            res.status(400).json({message: error.message})
        }
        
    res.status(200).json({
        message:`Le pourcentage`
    });
    
    
    
    
});



/* DELETE All. */
app.delete('/', (req, res) => {
    outil6.deleteMany().then(function(){
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