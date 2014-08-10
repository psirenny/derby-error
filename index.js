var express = require('express');

module.exports = function () {
  var app = express();

  app.all('*', function (req, res, next) {
    next('404: ' + req.url);
  });

  app.use(function (err, req, res, next) {
    if (!err) return next();
    var status = parseInt(err.message || err.toString());
    status = (status >= 400 && status < 600) ? status : 500;
    res.redirect('/error/' + status);
  });

  return app;
};
