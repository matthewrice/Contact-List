var Backbone = require('backbone');
var $ = require('jquery');
var model = require('../models/contactsmodel');
//
var contactListTemplate = require('../templates/contact-list.hbs');

var HeaderView = Backbone.View.extend({
  tagName: 'h1',
  className: 'contact-list-header',

  render: function(){
    this.$el.html("Contact List");
    return this;
  }
});


var FormView = Backbone.View.extend({
  tagName: 'form',
  className: 'contact-list col-md-offset-4 col-md-5',
  template: contactListTemplate,
  events: {
    'submit': 'addContactInfo'
  },
  render: function(){
    this.$el.append(this.template());
    return this;
  },
  addContactInfo: function(event){
    event.preventDefault();

    this.collection.create({
      'email': $('#email').val(),
      'firstName': $('#firstName').val(),
      'lastName': $('#lastName').val(),
      'twitterUsername': $('#twitterUsername').val(),
      'linkedIn': $('#linkedIn').val()
    });
    this.clearPerson();
  },
  clearPerson: function(){
    $('#email').val('');
    $('#firstName').val('');
    $('#lastName').val('');
    $('#twitterUsername').val('');
    $('#linkedIn').val('');
  }
});

module.exports = {
  'HeaderView': HeaderView,
  'FormView': FormView
};
