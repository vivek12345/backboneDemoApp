var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(["backbone"], function(Backbone) {
  var Book;
  return Book = (function(superClass) {
    extend(Book, superClass);

    function Book() {
      return Book.__super__.constructor.apply(this, arguments);
    }

    Book.prototype.defaults = function() {
      return {
        title: 'unknown',
        price: '0.0'
      };
    };

    Book.prototype.parse = function(response) {
      response.id = response._id;
      return response;
    };

    return Book;

  })(Backbone.Model);
});
