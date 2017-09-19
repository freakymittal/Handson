var fs = require('fs');
var input = "Hello there";
// var data = fs.writeFile('./newfile', input, 'utf-8', function(error){
// 	if(error) throw error;
// 	console.log('File written');
// });

var data = fs.writeFileSync('./newfile2', input, 'utf-8');
console.log('File Written');