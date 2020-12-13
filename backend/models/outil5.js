const mongoose = require('mongoose');

const outil5Schema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    valeur1 : {
        type : Number,
        required : true,
    },
    valeur2 : {
        type : Number,
        required : true,
    },
    valeur3 : {
        type : Number,
        required : true,
    },
    valeur4 : {
        type : Number,
        required : true,
    }

})

module.exports = mongoose.model('outil5',outil5Schema)