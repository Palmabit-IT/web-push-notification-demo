var express = require('express');
var router = express.Router();
var userService = require('./../service/user-service');

router.route('/users')
  .get(function(req, res) {
    userService.getAll(function(docs) {
      res.send(docs);
    });
  })

.post(function(req, res) {

  var user = req.body;
  userService.addUser(user, function(doc) {
    res.json({
      message: 'User subscription created!'
    });
  });
});

router.route('/users/:id')
  .get(function(req, res) {
    userService.get(req.params.id, function(doc) {
      res.send(doc);
    });
  })
  .delete(function(req, res) {
    userService.delete(req.params.id, function(err, doc) {
      res.json({
        message: 'Successfully deleted'
      });
    });
  });


module.exports = router;
