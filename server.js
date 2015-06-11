var application_root=__dirname,
	express = require( 'express' ), //Web framework
    bodyParser = require('body-parser'), //Parser for reading request body
    path = require( 'path' ), //Utilities for dealing with file paths
    mongoose = require( 'mongoose' ); //MongoDB integration

var app = express();

//Where to serve static content
app.use( express.static( path.join( application_root, 'site') ) );
app.use(bodyParser());

//Start server
var port = 4711;

app.listen( port, function() {
    console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
    console.log(application_root);
});

// Configure server
app.configure( function() {
    //parses request body and populates request.body
    app.use( express.bodyParser() );

    //checks request.body for HTTP method overrides
    app.use( express.methodOverride() );

    //perform route lookup based on url and HTTP method
    app.use( app.router );

    //Where to serve static content
    app.use( express.static( path.join( application_root, 'site') ) );

    //Show all errors in development
    app.use( express.errorHandler({ dumpExceptions: true, showStack: true }));
});
mongoose.connect( 'mongodb://localhost/library_database' );
var Book=new mongoose.Schema({
	title:String,
	price:String
});

var BookModel=mongoose.model('Book',Book);

app.get('/api/books',function(request,response){
	console.log(response.id);
	return BookModel.find(function(err,books){
		if(!err){
			return response.send(books);
		}
		else
			console.log(err);
	});
});

app.post('/api/books',function(request,response){
	var book=new BookModel({
		title:request.body.title,
		price:request.body.price
	});

	return book.save(function(err){
		if(!err){
			return response.send(book);
		}
		else
			console.log(err);
	});
});

app.get('/api/books/:id',function(request,response){
	return BookModel.findById(request.params.id,function(err,book){
		if(!err){
			return response.send(book);
		}
		else
			console.log(err);
	});
});

app.delete('/api/books/:id',function(request,response){
	return BookModel.findById(request.params.id,function(err,book){
		console.log(book);
		return book.remove(function(err){
			if(!err){
				return response.send("");
			}
			else
				console.log(err);
		});
	});
});

