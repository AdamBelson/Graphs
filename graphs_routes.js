var express = require('express');

module.exports = function(app){

	//var comments = require('./controllers/comments_controller');
	//var photos = require('./controllers/photos_controller');
	//var pages = require('./controllers/pages_controller');
	
	app.use('/static', express.static('./static')).
	use('/images', express.static('./images')).
	use('/lib', express.static('./lib')).
	use('/views', express.static('./views'));
	
	//app.get('/', function(req, res){
	//	res.render('photos');
	//});
	
	//app.get('/photos', photos.getPhotos);
	//app.get('/photo', photos.getPhoto);
	//app.get('/page', pages.getPage);
	//app.get('/comments/get', comments.getComment);
	//app.post('/comments/add', comments.addComment);
	
};