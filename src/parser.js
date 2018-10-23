const gmlPegjs = require('gml-pegjs');

const parse = (text) => {
  return gmlPegjs.parse(text);
}

const loc = (prop) => (node) => {
  return node[prop];
}

module.exports = {
  parse,
  astFormat: 'gml',
  locStart: loc('start'),
  locEnd: loc('end')
};
