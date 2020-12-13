var express = require('express');
var router = express.Router();
const outil5 = require('../models/outil5')

/* GET users listing. */
router.get('/', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    try{
        const dataO1 = await outil5.find();
        res.status(200).json({dataO1});
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
    
});

/* PUT users listing. */
router.put('/', (req, res) => {
    const dataO1 = req.body.data;

    for (let i = 0; i < dataO1.length; i++) {
        const dataJ = dataO1[i];
        const ageAjt = new outil5({
            name : dataJ.name,
            valeur1 : dataJ.valeur1,
            valeur2 : dataJ.valeur2,
            valeur3 : dataJ.valeur3,
            valeur4 : dataJ.valeur4,

        })
        console.log(ageAjt);
        try {
            const newAge = ageAjt.save();
            res.status(201);
        } catch (error) {
            res.status(400).json({message: error.message})
        }
        
    }
    res.status(200).json({
        message:`Tous les ages ont été ajoutés`
    });
    
    
    
    
});



/* DELETE All. */
router.delete('/', (req, res) => {
    outil5.deleteMany().then(function(){
        res.status(200).json({
            message: "tout à été supprimé"
        })
    }).catch(function(error){
        res.status(400).json({
            message: "Erreur"
        });
    });
    
});

module.exports = router;