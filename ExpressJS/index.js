// // Server using http
// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
// 	res.statusCode = 200;
// 	res.setHeader('Content-Type', 'text/plain');
// 	res.end('Hello world');
// });

// server.listen(port, hostname, () => {
// 	console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/users', (req, res) => {
	let users = [
	{
		first_name: "John",
		last_name: "Doe",
		Age: 14,
		gender: "male"
	},
	{
		first_name: "Tom",
		last_name: "Hardy",
		Age: 24,
		gender: "male"
	},
	{
		first_name: "Tracy",
		last_name: "McArthy",
		Age: 38,
		gender: "female"
	}
	];
	res.json(users);
});

app.get('/download', (req, res) => {
	res.download(path.join(__dirname, 'downloads/file.pdf'));
});

app.get('/about', (req, res) => {
	res.redirect('/about.html');
});

app.post('/subscribe', (req, res) => {
	let email = req.body.email;
	// res.send('You are subscribed' + email);
	res.json(req.body);
});

// app.get('/users/:name', (req, res) => {
// 	let user = req.params.name;
// 	res.send(`<h1>${user.toUpperCase()}</h1>`);
// });

app.listen(3000, () => {
	console.log('Server running on port 3000');
});