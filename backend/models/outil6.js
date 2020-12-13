const mongoose = require('mongoose');

const outil6Schema = new mongoose.Schema({
    chartValue : {
        type : String,
        required : true,
    },

})

module.exports = mongoose.model('outil6',outil6Schema)