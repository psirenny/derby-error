exports.app = function (app) {
  app.get('/error/:code', function (page, model, params) {
    page.render('error:' + params.code)
  });
};

exports.server = function (app) {
  app.all('*', function (req, res, next) {
    next('404: ' + req.url);
  });

  return function (err, req, res, next) {
    if (!err) return next();
    console.error(err.stack || err);
    var status = parseInt(err.message || err.toString());
    status = (status >= 400 && status < 600) ? status : 500;
    res.redirect('/error/' + status);
  };
};