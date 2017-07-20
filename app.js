var express = require('express'); 
var Mock=require('mockjs'); 
var app = express();

app.get('getName', function (req, res) { 
	res.header("Access-Control-Allow-Origin", "*"); //设置跨域访问 
	res.json(Mock.mock({ 
		"status": 200, 
		"data|1-9": [{ "name|5-8": /[a-zA-Z]/, "id|+1": 1, "value|0-500": 20 }] 
	})); 
});
