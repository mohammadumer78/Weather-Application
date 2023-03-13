//sever start

const express = require("express");

var app =express();

app.listen(3000,function(){console.log("server is runing");});

//require other packages

const https = require('https');

//fetch body-parser files

var bodyParser= require('body-parser');

//use body parser in express

// url encoded means the value has come with same Format and extended true means it can be use further
app.use(bodyParser.urlencoded({extended: true}));




//get method

app.get("/",function(req, res){
    
  res.sendFile(__dirname +"/index.html");
});

//post method

app.post("/",function(req,res){
  const key= "b75fd06362f3945fd5e892e0c4502149";

  const unit="metric";
  const country= req.body.countryName;
  var url= "https://api.openweathermap.org/data/2.5/weather?appid="+ key +"&q="+ country +"&units="+unit;
  https.get(url,function(responce){

   responce.on("data",function(data)
   {
       // console.log(data);
       var weather= JSON.parse(data);
       const temp= weather.main.temp;
       const description =weather.weather[0].description;
       const icon =weather.weather[0].icon;
       res.write("<h1>Temperature is "+ temp +"</h1>");
       res.write("<h3>Weather descrition is "+ description +"</h3>");
       res.write("<img src=' http://openweathermap.org/img/wn/"+ icon +"@2x.png'>");
       res.send();
   });
  });
})
var url= "https://api.openweathermap.org/data/2.5/weather?appid="+ key +"&q="+ country +"&units="+unit;
   https.get(url,function(responce){

    responce.on("data",function(data)
    {
        // console.log(data);
        var weather= JSON.parse(data);
        const temp= weather.main.temp;
        const description =weather.weather[0].description;
        const icon =weather.weather[0].icon;
        res.write("<h1>Temperature is "+ temp +"</h1>");
        res.write("<h3>Weather descrition is "+ description +"</h3>");
        res.write("<img src=' http://openweathermap.org/img/wn/"+ icon +"@2x.png'>");
        res.send();
    });
   });