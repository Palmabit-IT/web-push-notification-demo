var low = require('lowdb'),
  uuid = require('uuid'),
  db = low('db.json');

db._.mixin(require('underscore-db'));

var noop = function() {};

exports.addUser = function(user, callback) {
  callback = (callback || noop);

  // set unique id
  user.id = uuid();

  // Add it to the collection.
  db('users').push(user);

  callback(user);
  return (this);
};


// I delete the user with the given ID.
exports.delete = function(id, callback) {
  // Make sure a callback is defined.
  callback = (callback || noop);

  db('users').remove({
    id: id
  })

  callback();
  return (this);
};


// I return the user with the given id.
exports.get = function(id, callback) {
  callback = (callback || noop);

  var that = this;
  var doc = db('users')
    .chain()
    .find({
      'id': id
    }).value();

  callback(doc);
  return (that);
};


exports.getAll = function(callback) {
  callback = (callback || noop);

  var orderedUsers = db('users').chain().sortBy('id').value();

  callback(orderedUsers);
  return (this);
};
