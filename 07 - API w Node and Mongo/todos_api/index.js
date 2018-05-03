const 	express = require('express');
		app = express();
		port = process.env.PORT || 3000;

app.get('', function(req, res){
	res.send('This is the home page')
});

app.listen(port, function(){
	console.log('App is running on port ' + port)
});