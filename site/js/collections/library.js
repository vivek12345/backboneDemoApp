var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(["backbone", "models/book"], function(Backbone, Book) {
  var Library;
  return Library = (function(superClass) {
    extend(Library, superClass);

    function Library() {
      return Library.__super__.constructor.apply(this, arguments);
    }

    Library.prototype.model = Book;

    Library.prototype.url = 'api/books';

    return Library;

  })(Backbone.Collection);
});
