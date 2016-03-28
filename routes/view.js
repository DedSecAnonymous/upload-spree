var express = require('express');
var router = express.Router();
var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var appDir = path.dirname(require.main.filename).replace('bin', 'uploads/');

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(JSON.stringify(req.query));
	console.log("json i and appdir beloo");
	console.log(appDir);
	if (_.has(req.query, 'id') && req.query.id) {
		var filename = appDir + req.query.id;
		console.log(filename);
		fs.stat(filename, function(err, stats) {
			if (err) {
				console.log(err);
				res.json({
					error: err
				});
			} else if (err == null) {
				//res.download(filename);
				fs.readFile(filename, 'utf8', function(err, data) {
					if (err)
						console.log(err);
					res.setHeader('Content-Type', 'text/html');
					res.end(data);
				});
                /*
				fs.readFile(filename, 'utf8', function(err, data) {
					if (err)
						console.log(err);
					else {
						res.render('tex_render', {
							title: 'TDP ',
							filename: req.query.id,
							
						});
					}
				});*/


			} else
				res.json({
					error: 'file not available'
				});
		});
	} else {
		res.json({
			error: 'no id parameter specified'
		});
	}
});

module.exports = router;