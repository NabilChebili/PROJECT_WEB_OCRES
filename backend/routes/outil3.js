var express = require('express');
var router = express.Router();
const outil3 = require('../models/outil3')

/* GET users listing. */
router.get('/', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    try{
        const dataO1 = await outil3.find();
        res.status(200).json({dataO1});
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
    
});

/* PUT users listing. */
router.put('/', (req, res) => {
     res.header("Access-Control-Allow-Origin", "*");
    const dataO1 = req.body.data;
    res.status(400).json({message: data01})

    for (let i = 0; i < dataO1.length; i++) {
        const dataJ = dataO1[i];
        const employeAjt = new outil3({
            name : dataJ.name,
            profit : dataJ.profit,
        })
        console.log(employeAjt);

        try {
            const newEmploye = employeAjt.save();
            res.status(201);
        } catch (error) {
            res.status(400).json({message: error.message})
        }
        
    }
    res.status(200).json({
        message:`Tous les employés ont été ajoutés`
    });
    
    
    
    
});



/* DELETE All. */
router.delete('/', (req, res) => {
    outil3.deleteMany().then(function(){
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