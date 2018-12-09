const gmlPegjs = require('gml-pegjs');

function parse(text) {
  const gml = gmlPegjs.parse(text);

  console.log(gml);

  return gml;
}

module.exports = parse;
