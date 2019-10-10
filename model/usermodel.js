const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name : {type: String},
    email : {type: String},
    college : {type: String},
    contact : {type: String},
    pass : {type: String},
    curlevel: {type: String},
    totalhints : {type: Number},
    lefthint: {type: Number},
    score: {type: Number},
    skipleft: {type: Number},
    attempts: {type: Number }
});

module.exports = mongoose.model('User', userSchema);