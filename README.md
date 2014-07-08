Derby Error
===========

[Derby JS](http://derbyjs.com) middleware that adds default error handling redirects.

For example:

    http://site.com/unknown/path => http://site.com/error/404

Why should I use this?
----------------------

It allows your client app to handle errors the same way you'd handle normal page requests.
Simply add a route for **/error/:code**.
Now there's no need to create a static app to handle errors.
Of course, you can still do that if you'd like.

Installation
------------

    $ npm install --save derby-error

In your server file:

    var error = require('derby-error');

    expressApp
      // ...
      // ...
      // place after all other middleware
      .use(error(expressApp));

Usage
-----

Create an error handling route:

    // assumes you have views such as: 404.html, 500.html, etc.
    app.get('/error/:code', function (page, model, params) {
      page.render(params.code);
    });
