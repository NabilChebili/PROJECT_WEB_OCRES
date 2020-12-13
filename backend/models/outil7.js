const mongoose = require('mongoose');

const outil7Schema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    pourcentage : {
        type : Number,
        required : true,
    }
})

module.exports = mongoose.model('outil7',outil7Schema)