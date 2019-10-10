const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
mongoose.connect('mongodb://ayushhavelia:ayush12345@ds157956.mlab.com:57956/alchemist',{useNewUrlParser:true});
const http = require('http');
const cors = require('cors');
const app = express();
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var Question = require('./model/questionmodel.js');
var User = require('./model/usermodel.js');

app.post('/addques', (req, res) => {
    var qsn = Question({
        qsnno: req.body.qsnno,
        qsn: req.body.qsn,
        ans: req.body.ans,
        hint1: req.body.hint1,
        hint2: req.body.hint2,
        hint3: req.body.hint3
    });
    qsn.save((err,data) =>{
        if(err)
            res.status(500).json({errmsg:err});
        res.status(200).json({questionrecord: data});
    });
});

app.get('/fetchques', (req,res) => {
    Question.find({}, (err,dd) => {
        res.json({dd});
    });
});

app.post('/adduser',(req,res) => {
    var user = User({
        name: req.body.name,
        email: req.body.email,
        college: req.body.college,
        contact: req.body.contact,
        pass: req.body.pass,
        curlevel: 1,
        totalhints: 0,
        lefthint: 3,
        score: 0,
        skipleft: 1,
        attempts: 0
    });
    user.save((err,data) =>{
        if(err)
            res.status(200).json({errmsg:err});
        res.status(200).json({userrecord: data});
    });
});

app.get('/fetchuser', (req,res) => {
    User.find({}, (err,dd) => {
        res.json({dd});
    });
});

http.createServer(app).listen(process.env.PORT || 3000);
console.log("Backend Server is On", process.env.PORT || 3000);