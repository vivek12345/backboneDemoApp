define [
 "backbone" 
 "models/book"
],(Backbone,Book)->
 class Library extends Backbone.Collection
  model:Book
  url:'api/books'