var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(["backbone"], function(Backbone) {
  var BookView;
  return BookView = (function(superClass) {
    extend(BookView, superClass);

    function BookView() {
      return BookView.__super__.constructor.apply(this, arguments);
    }

    BookView.prototype.tagName = 'div';

    BookView.prototype.className = 'bookContainer';

    BookView.prototype.template = _.template($('#books_template').html());

    BookView.prototype.events = function() {
      return {
        'click #deleteBook': 'deleteBook'
      };
    };

    BookView.prototype.render = function() {
      this.$el.html(this.template(this.model.attributes));
      return this;
    };

    BookView.prototype.deleteBook = function() {
      this.model.destroy();
      return this.remove();
    };

    return BookView;

  })(Backbone.View);
});
