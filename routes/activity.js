var data = require('../activities.json');

exports.view = function(req, res){
	res.render('activity', data);
};

