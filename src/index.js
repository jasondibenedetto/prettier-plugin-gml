const parse = require('./parser');
const print = require('./printer');

const languages = [
  {
    name: 'GML',
    parsers: ['gml'],
    extensions: ['.gml'],
  },
];

const parsers = {
  gml: {
    parse,
    astFormat: 'gml-pegjs',
  },
};

const printers = {
  'gml-pegjs': {
    print,
  },
};

module.exports = {
  languages,
  parsers,
  printers,
};
