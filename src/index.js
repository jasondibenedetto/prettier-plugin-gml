const parser = require('./parser');
const printer = require('./printer');

const languages = [
  {
    name: 'GML',
    parsers: ['gml'],
    extensions: ['.gml']
  }
];

const parsers = {
  gml: parser
};

const printers = {
  gml: printer
};

const options = {};

module.exports = {
  languages,
  printers,
  parsers,
  options,
  defaultOptions: {
    tabWidth: 2
  }
};
