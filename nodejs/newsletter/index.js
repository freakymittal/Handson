const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.listen(3000, function(){
	console.log('listening on 3000');
});

app.post('/', function(req, res){
	addEmail(req.body.email);
	res.end('success!!');
})

function addEmail(email){
	var request = require("request");
	var options = { method: 'POST',
	  url: 'https://us16.api.mailchimp.com/3.0/lists/63046e334f/members',
	  headers: 
	   { 'postman-token': '8f7325f1-8e12-8e86-ef50-21ce9aea3789',
	     'cache-control': 'no-cache',
	     'content-type': 'application/json',
	     authorization: 'Basic YW55c3RyaW5nOjUxYjUyNzE0NWIxZDZiMTU1Y2RjNDFjOTg2MjYzNzIw' },
	  body: { email_address: email, status: 'subscribed' },
	  json: true };

	request(options, function (error, response, body) {
	  if (error) throw new Error(error);

	  console.log(body);
	});

}