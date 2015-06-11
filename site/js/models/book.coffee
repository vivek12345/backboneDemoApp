define [
 "backbone"
],(Backbone)->
    class Book extends Backbone.Model
     defaults:->
      title:'unknown'
      price:'0.0'
     parse:(response)->
      response.id=response._id
      response
