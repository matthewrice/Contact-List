var $ = require('jquery');

var view = require('./view/contactsview');
var ContactCollection = require('./models/contactsmodel').ContactCollection;

var contactCollection = new ContactCollection();

var header = new view.HeaderView();
$('.app').append(header.render().el);


var contactListTemplate = new view.FormView({collection: contactCollection});
  $('.app').append(contactListTemplate.render().el);
