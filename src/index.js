const parse = require('./parser');
const print = require('./printer');

const languages = [
  {
    name: 'GML',
    parsers: ['gml'],
    extensions: ['.gml'],
  },
];

function locStart(/* node */) {
  return -1;
}

function locEnd(/* node */) {
  return -1;
}

function hasPragma(/* text */) {
  return false;
}

const parsers = {
  gml: {
    parse,
    astFormat: 'gml',
    locStart,
    locEnd,
    hasPragma,
  },
};

const printers = {
  gml: {
    print,
  },
};

module.exports = {
  languages,
  parsers,
  printers,
};
