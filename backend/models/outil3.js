const mongoose = require('mongoose');

const outil3Schema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    profit : {
        type : Number,
        required : true,
    }
})

module.exports = mongoose.model('outil3',outil3Schema)