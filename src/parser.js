const gmlPegjs = require('gml-pegjs');

function parse(text) {
  return gmlPegjs.parse(text);
}

module.exports = parse;
