"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.env = void 0;

var env = function env(key) {
  var value = process.env[key];

  if (!value) {
    throw Error("\uD83E\uDDE8 No environment variable found for ".concat(key, " \uD83E\uDDE8"));
  }

  return value;
};

exports.env = env;