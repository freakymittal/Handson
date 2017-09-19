const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('myCustomEvent', function(arg1, arg2){
	console.log('event fired' + arg1 + arg2);
});
setTimeout(function(){
	eventEmitter.emit('myCustomEvent', 's1', 's2');
}, 2000);