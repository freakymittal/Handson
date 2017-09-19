const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/css', express.static(__dirname + '/assets/'));

app.use('/users', router);

router.get('/:username(\\w+)', function(req, res){
	res.end(JSON.stringify(req.params));
});

app.get('/', function(req, res){
	// res.send('Hi There');
	res.sendFile('index.html', {root: path.join(__dirname, './html')});
	res.cookie('cookiefromexpress', 'looks good');
	//GET method
	// let resp = 'hello ' + req.query.name;
	// // res.end(JSON.stringify(req.query));
	// res.end(resp);
});

app.get('/removeCookie', function(req, res){
	res.clearCookie('cookiefromexpress');
	res.end('Wow');
});

app.post('/', function(req, res){
	res.end(JSON.stringify(req.body));
});

app.get(/^(.+)$/, function(req, res){
	try{
		if(fs.statSync(path.join(__dirname, './html/', req.params[0]+'.html')).isFile()){
			res.sendFile(req.params[0] + '.html', {root: path.join(__dirname, './html')});	
		}
	}catch(err){
		res.sendFile('404.html', {root: path.join(__dirname, './html')});	
	}
});

app.listen(1337, function(){
	console.log('Listening on port 1337');
});