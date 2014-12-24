var React = require('react');

var recursivelyMapChildren = module.exports = (children, transform ) => {
  return React.Children.map(children, transform);
};

