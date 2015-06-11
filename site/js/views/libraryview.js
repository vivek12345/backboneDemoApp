var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

define(["backbone", "views/bookview", "models/book", "collections/library"], function(Backbone, BookView, Book, Library) {
  var LibraryView;
  return LibraryView = (function(superClass) {
    extend(LibraryView, superClass);

    function LibraryView() {
      return LibraryView.__super__.constructor.apply(this, arguments);
    }

    LibraryView.prototype.el = '.container';

    LibraryView.prototype.events = function() {
      return {
        'click #addbook': 'addBook'
      };
    };

    LibraryView.prototype.initialize = function() {
      this.collection = new Library;
      this.collection.fetch({
        reset: true
      });
      this.listenTo(this.collection, 'add', this.renderBook);
      return this.listenTo(this.collection, 'reset', this.render);
    };

    LibraryView.prototype.render = function() {
      this.collection.each((function(book) {
        this.renderBook(book);
      }), this);
      return true;
    };

    LibraryView.prototype.renderBook = function(item) {
      var bookView;
      bookView = new BookView({
        model: item
      });
      this.$el.append(bookView.render().el);
      return true;
    };

    LibraryView.prototype.addBook = function(e) {
      var el, formData, i, len, ref;
      e.preventDefault();
      formData = {};
      ref = $('#addBook').children('input');
      for (i = 0, len = ref.length; i < len; i++) {
        el = ref[i];
        if ($(el).val() !== '') {
          formData[el.id] = $(el).val();
        }
      }
      this.collection.create(new Book(formData));
      return true;
    };

    return LibraryView;

  })(Backbone.View);
});
