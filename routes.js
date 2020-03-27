
var express = require("express");
var router = express.Router();
var formidable = require('formidable');
var mv = require('mv');

router.get("/",function(req,res){
	    res.sendFile(__dirname + "/public/views/index.html");
});

router.get("/info",function(req,res){
	    //???
});


let fileName = "";

router.post('/fileupload', function(req, res){
	//???
});

router.get('/info2', function(req, res){
	//???
});

module.exports = router;

