var fs = require('fs');
console.log('before');
var data = fs.readFileSync('./http.js', 'utf-8', function(err, data){
	console.log(data);
});
console.log('before');


var fs = require('fs');
console.log('before');
var data = fs.readFileSync('./http.js', 'utf-8');
console.log(data);
console.log('before');