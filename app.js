// var http = require('http')
// var fs = require('fs')
// var url = require('url')
// var router = require('router')

var express = require('express')
var app = express()


var router = require('./controller')
app.set('view engine','ejs')

//路由中间件 静态文件
app.use(express.static('./public'))
app.use(express.static('./uploads'))

// 向下获取
app.get('/',router.showIndex)
app.get('/up',router.up)
app.get('/:albumName',router.showAlbum)
app.post('/up',router.filePost)
//404
app.use(function (req,res) {
	res.render("err")
})

app.listen(3000)


// http.createServer((req,res) => {
// 	var pathName = url.parse(req.url).pathName
// 	cosole.log(pathName)
// 	if (true) {}
// }).listen(80,'127.0.0.1')