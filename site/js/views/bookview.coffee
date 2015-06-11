define [
 "backbone"
],(Backbone)->
   class BookView extends Backbone.View
    tagName:'div'
    className:'bookContainer' 
    template:_.template $('#books_template').html()
    events:->
     'click #deleteBook':'deleteBook'
    render:->
      @$el.html this.template this.model.attributes
      @
    deleteBook:->
     @model.destroy()
     @remove()

