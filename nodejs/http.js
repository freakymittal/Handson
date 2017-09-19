var http = require('http');
var server = http.createServer(engine);
server.listen(3000, function(){
	console.log('Server was hit by a request');
});
function engine(req, res){
	// console.log(res);
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hey there, from the server! :), request : ' + req.url);
}