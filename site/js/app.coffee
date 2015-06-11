requirejs.config(
	paths:
		'jquery':'lib/jquery.min'
		'underscore':'lib/underscore-min'
		'backbone':'lib/backbone-min'
	shim:
		'underscore':
			exports:'_'
		'backbone':
			deps:
				[
					"underscore"
					"jquery"
				]
			exports:'Backbone'
)

requirejs [
 "jquery"
 "underscore"
 "backbone"
 "views/libraryview"
],($,_,Backbone,LibraryView)->
 new LibraryView
