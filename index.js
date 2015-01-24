module.exports = function (callback) {
  return function (err, req, res, next) {
    if (!err) return next();
    var status = parseInt(err.message || err.toString());
    status = (status >= 400 && status < 600) ? status : 500;
    status = (res.statusCode === 200) ? status : res.statusCode;
    res.status(status);
    var url = '/error/' + status;
    if (callback) callback(req, err);
    if (req.url === url) return next();
    res.redirect(url);
  };
};
