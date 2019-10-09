var express = require('express');
var router = express.Router();
var Question = require('../model/questionmodel.js');
router.post('/', (req, res) => {
    var qsn = new Question({
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

module.exports = router; 