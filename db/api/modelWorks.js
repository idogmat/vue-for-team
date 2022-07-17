'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WorksSchema = new Schema({
    id: {
        type: Number,
    },
    name: {
        type: String,
    },
    body: {
        type: String,
    },
    description:{
        type:String
    },
    img:{
        type: String
    },

});

//one o instead of 2
module.exports = mongoose.model('Works', WorksSchema);