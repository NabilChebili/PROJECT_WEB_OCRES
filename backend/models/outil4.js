const mongoose = require('mongoose');

const outil4Schema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    value : {
        type : Number,
        required : true,
    }
})

module.exports = mongoose.model('outil4',outil4Schema)