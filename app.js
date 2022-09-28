const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const https = require("https");
const request = require("request");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.statis("public"));


app.get("/", function(req,res){
	res.sendFile(__dirname + "/index.html");
})

app.listen(process.env.PORT || 3000, function(req,res){
	console.log("Server is running on port 3000");
})
