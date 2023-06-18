
const express = require("express");
const bodyParser = require("body-parser");


const app =  express();

app.use(bodyParser.urlencoded({extended : true}));

app.get("/" , function(req , res){

   res.sendFile(__dirname + "/index.html");

});

app.get("/bmimetric.html" , function(req , res){

    res.sendFile(__dirname + "/bmimetric.html");
 
 });
app.post("/" , function(req , res){

    var num1 = parseFloat(req.body.num1);                           // imperial
    var num2 = parseFloat(req.body.num2);

    result = ((num1 / Math.pow(num2 , 2)) * 703 ).toFixed(1);

    res.send("BMI IS " + result);
});

app.post("/bmimetric.html" , function(req , res){

    var num1 = parseFloat(req.body.num1);
    var num2 = parseFloat(req.body.num2);                           // meteric

    result = ((num1 / Math.pow(num2 , 2)) ).toFixed(2);

    res.send("BMI IS " + result);
});

app.listen("100" , function(){

    console.log("server is running on port 100" );

});