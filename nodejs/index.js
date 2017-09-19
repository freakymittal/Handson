const express = require('express');
const bodyParser = require('body-parser');
const sessions = require('express-session');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(sessions({
	secret: '&4309483048230259#$#403843#$#$^$#$39058084',
	resave: false,
	saveUnitialized: true
}));
app.get('/login', function(req, res){
	session = req.session;
	if(session.uid){
		res.redirect('/redirects');
	}
	res.sendFile('./html/login.html', {root: __dirname});
});

app.post('/login', function(req, res){
	session = req.session;
	if(session.uid){
		res.redirect('/redirects');
	}
		session.uid = req.body.username;
	res.redirect('/redirects');
});
app.get('/admin', function(req, res){
	session = req.session;
	if(req.session.uid !== 'admin'){
		res.end('You are not authorized');
	}else{
		res.send('You are the demigod <a href="/logout">KILL SESSION</a>');
	}
});
app.get('/redirects', function(req, res){
	session = req.session;
	if(session.uid === 'admin'){
		res.redirect('/admin');
	}else{
		res.send(req.session.uid + 'Not authorized <a href="/logout">KILL SESSION</a>');
	}
});
app.get('/logout', function(req, res){
	req.session.destroy();
	res.redirect('/login');
})
app.listen(1337, function(){
	console.log('Listening on port 1337');
});