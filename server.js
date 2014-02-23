var __dirname = "/home/user/Documents/cs/UIC-Off-Campus";

var express = require("express");
var app = express();


app.configure( function(){
  //app.use("/index.html", express.static("/otherIndex.html"));
  app.use(express.static(__dirname + "/css"));
  app.use(express.static(__dirname + "/js"));
  app.use(express.static(__dirname + "/js/vendor"));
  app.use(express.static(__dirname + "/src"));
  app.use(express.static(__dirname + "/"));
  //app.use(app.router);
});

app.set( "/", getFile( __dirname + "/index.html"));

app.get("/", function(req, res){
  var file = getFile( __dirname + "/css/foundation.css");
  console.log("the file: " + file);
  res.send( getFile( __dirname + "/index.html") );
});

/*
app.get("/js/vendor/modernizr.js", function(req, res){
  res.send( getFile( __dirname + "/js/vendor/modernizer.js") );
});
app.get("/js/vendor/jquery.js", function(req, res){
  res.send( getFile( __dirname + "/js/vendor/jquery.js") );
});
app.get("/js/foundation.min.js", function(req, res){
  res.send( getFile( __dirname + "/js/foundation.min.js") );
});
app.get("/src/mapLoader.js", function(req, res){
  res.send( getFile( __dirname + "/src/mapLoader.js") );
});
app.get("/css/foundation.css", function(req, res){
  res.send( getFile( __dirname + "/css/foundation.css") );
});
*/
function getFile( pathAndFile){
  var fileReader = require("fs");
  var returnFile;
  fileReader.readFile( pathAndFile, function(err, file){
    if(err){
      console.log("ERROR LOADING " + pathAndFile);
      throw err;
    }
    //console.log("file found: " + file);
    returnFile = file;
  });
  console.log("ENDING FINDING: " + pathAndFile);
  return returnFile;
};

app.listen(3000);
console.log( app.routes);
console.log("listening");
