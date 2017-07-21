let express = require('express'); 
let Mock=require('mockjs'); 
let app = express();

app.get('/getData', function (req, res) { 
	res.header("Access-Control-Allow-Origin", "*"); //设置跨域访问 
	res.json(Mock.mock({ 
		"status": 200, 
		"data|1-9": [{ "name|5-8": /[a-zA-Z]/, "id|+1": 1, "value|0-500": 20 }] 
	})); 
});
let server=app.listen('3000',function(){
	let host=server.address().address;
	let port=server.address().port;
	console.log('Mock listening at http://localhost:'+port); 
});