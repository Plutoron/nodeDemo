var file = require('../models/getFile.js')
var formidable = require('formidable')
var path = require('path')
var fs = require('fs')

exports.showIndex = function (req,res,next) {
	//获取到数据后再进行渲染，异构思想
	file.getAllAlbum(function (err,albums) {
		if (err) {
			next();
			return;
		}
		res.render('index',{
			'album' : albums
		})
	})
	//同步直接 调用file get方法
}

exports.showAlbum = function (req,res,next) {
	//遍历所有图片

	var albumName = req.params.albumName

	file.getImgByAlbumname(albumName,function (err,imgArray) {
		if (err) {
			next();
			return;
		}
		res.render('album',{
			'albumName' : albumName,
			'imgs' : imgArray
		})
	})
	
}

exports.up = function (req,res,next) {
	file.getAllAlbum(function (err,albums) {
		if (err) {
			next();	
			return;
		}
		res.render('up',{
			'albums' : albums
		})
	})
}

exports.filePost = function(req,res) {
    var form = new formidable.IncomingForm();
 	
 	form.uploadDir = path.normalize(__dirname + '/../temp/');

    form.parse(req,function(err,fields,files,next) {
    	// console.log(fields)
    	// console.log(files)
    	if (err) {
    		next();
    		return;
    	}
    	// var extname = path.extname(files.file.name)
    	var size = parseInt(files.file.size)
    	if (size > 40960) {
    		res.send('图片过大')
    		fs.unlink(files.file.path)
    		return
    	}
    	var name = files.file.name
    	var wenjianjia = fields.dir
    	var oldpath = files.file.path
    	var newpath = path.normalize(__dirname + '/../uploads/' + wenjianjia + '/' + name);
    	console.log(newpath)
    	fs.rename(oldpath,newpath,function (err,next) {
    		if (err) {
    			res.send('改名失败')
    			return
    		}
    	})
    });

    return;
}
	
