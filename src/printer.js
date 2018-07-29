function genericPrint(path) {
  const node = path.getValue();

  switch (node.ast_type) {
    case 'gml-pegjs': {
      console.log(node);
      return node.body;
    }

    default: {
      console.error('Unknown GML node:', node);
      return node.source;
    }
  }
}

module.exports = genericPrint;
