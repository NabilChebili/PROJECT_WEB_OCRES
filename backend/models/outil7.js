const mongoose = require('mongoose');

const outil7Schema = new mongoose.Schema({

    pourcentage : {
        type : Number,
        required : true,
    }
})

module.exports = mongoose.model('outil7',outil7Schema)