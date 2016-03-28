var express = require('express');
var router = express.Router();
var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var appDir = path.dirname(require.main.filename).replace('bin', 'uploads/');

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(JSON.stringify(req.query));
	console.log(appDir);
	if (_.has(req.query, 'id') && req.query.id) {
		var filename = appDir + req.query.id;
		console.log("filename");
		console.log(filename);
		res.download(filename);
		
	} else {
		res.json({
			error: 'no id parameter specified'
		});
	}
});

module.exports = router;