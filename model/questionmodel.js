const mongoose = require('mongoose');

var qsnSchema = new mongoose.Schema({
    qsnno : {type: String},
    qsn : {type: String},
    ans : {type: String},
    hint1 : {type: String},
    hint2 : {type: String},
    hint3 : {type: String},
});

var Question = mongoose.model('Question', qsnSchema);

module.exports = Question;