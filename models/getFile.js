var fs = require('fs')

exports.getAllAlbum = function (callback) {
	//异构版本
	fs.readdir('./uploads',function (err,files) {
		if (err) {
			callback('没有up文件夹',null)
			return
		}
		var allAlbums = [];
		(function iterator(i) {
			if (i == files.length) {
				callback(null,allAlbums)
				return
			}
			fs.stat('./uploads/' + files[i],function (err,stats) {
				if (err) {
					callback('找不到文件' + files[i],null)
					return
				}
				if (stats.isDirectory()) {
					allAlbums.push(files[i])
				}
				iterator(i + 1)
			})
		})(0)
	})
}

exports.getImgByAlbumname = function (albumName,callback) {
	//异构版本
	fs.readdir('./uploads/' + albumName,function (err,files) {
		if (err) {
			callback('没有img文件',null)
			return
		}
		var allImg = [];
		(function iterator(i) {
			if (i == files.length) {
				callback(null,allImg)
				return
			}
			fs.stat('./uploads/' + albumName + '/'+ files[i],function (err,stats) {
				if (err) {
					callback('找不到文件' + files[i],null)
					return
				}
				if (stats.isFile()) {
					allImg.push(files[i])
				}
				iterator(i + 1)
			})
		})(0)
	})
}
