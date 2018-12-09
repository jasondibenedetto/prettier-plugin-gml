function genericPrint(path) {
  const node = path.getValue();

  console.log(node);

  switch (node.ast_type) {
    case 'gml-pegjs': {
      return node.body;
    }

    default: {
      console.error('Unknown GML node:', node);
      return node.source;
    }
  }
}

module.exports = genericPrint;
