'use strict';

const modules = [
  require("./eslint-plugin-yaml"),
  require("./eslint-plugin-css"),
  require("./eslint-plugin-json"),
  require("./eslint-plugin-lmjson"),
];

module.exports.processors = modules.map(e => e.processors).reduce((a, b) => { ...a, ...b });