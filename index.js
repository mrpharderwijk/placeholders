/*!
 * placeholders <https://github.com/jonschlinkert/placeholders>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var assign = require('assign-deep');
var expand = require('expand');

module.exports = function placeholders(options) {
  var opts = assign({ regex: /:([(\w ),]+)/g }, options);

  return function interpolate(val, locals) {
    if (arguments.length === 1 && !opts.data) {
      return interpolate.bind(null, val);
    }

    locals = assign({}, opts.data, locals);
    return expand(val, locals, { regex: opts.regex });
  };
};