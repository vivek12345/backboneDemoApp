define [
 "backbone"
 "views/bookview"
 "models/book"
 "collections/library"
],(Backbone,BookView,Book,Library)->
   class LibraryView extends Backbone.View
  el:'.container'
  events:->
   'click #addbook':'addBook'
  initialize:->
   @collection=new Library
   @collection.fetch reset:true
   @listenTo @collection,'add',@renderBook
   @listenTo @collection,'reset',@render
  render:->
   @collection.each ((book) ->
	@renderBook book
	return
   ), this
   true
  renderBook:(item)->
   bookView=new BookView { model:item }
   @$el.append bookView.render().el
   true
  addBook:(e)->
   e.preventDefault()
   formData={}
   formData[el.id]=$(el).val() for el in $('#addBook').children 'input' when $(el).val() isnt ''
   @collection.create new Book formData
   true
