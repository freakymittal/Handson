var $ = require('jquery');
$('form').submit(function(ev){
	ev.preventDefault();
	let userEmail = $('#email').val();
	$.ajax({
	url: '/',
	type: 'POST',
	data: {
		email: userEmail
	},
	success: function(res){
		console.log(res);
	}
});
});
