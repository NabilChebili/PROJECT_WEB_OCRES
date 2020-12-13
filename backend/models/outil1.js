const mongoose = require('mongoose');

const outil1Schema = new mongoose.Schema({
    jour : {
        type : String,
        required : true,
    },
    taches : {
        type : Number,
        required : true,
    },
    visible : {
        type : Boolean,
        required : true,
    },
    numero : {
        type : Number,
        required : true,
    }

})

module.exports = mongoose.model('outil1',outil1Schema)