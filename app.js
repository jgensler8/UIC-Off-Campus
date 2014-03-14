var restify = require("restify");
var server = restify.createServer();

var respond = function( req, res, next){
	res.send("hello");
}

server.get('/', respond);

server.listen( 8000, function(){
	console.log("got a visitor");
});
