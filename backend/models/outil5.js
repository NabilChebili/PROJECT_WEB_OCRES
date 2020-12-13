const mongoose = require('mongoose');

const outil5Schema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    "18-25" : {
        type : Number,
        required : true,
    }
    "25-45" : {
        type : Number,
        required : true,
    }
    "45-65" : {
        type : Number,
        required : true,
    }
    "65+" : {
        type : Number,
        required : true,
    }

})

module.exports = mongoose.model('outil5',outil5Schema)