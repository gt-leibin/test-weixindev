var express = require('express');
var utility = require
var app = express();


var last = (req,res,next) => console.log("我是最后一个路由中间件")
app.get('/',function (req,res,next) {
	res.send('hello, world');

	next();
},function(req,res,next){
	console.log("还有我～");
	next();
},last)

app.get('/aa',function (req,res) {
	res.send('hello, aa');
})

app.listen(3000,function () {
	console.log("Example app listening on port 3000!");
})