var app = require('./app/main');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log('palmapushy server listening on port ' + server.address().port);
});
