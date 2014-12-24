var React = require('react');

var recursivelyMapChildren = module.exports = (children, transform) => {
  return React.Children.map(children, (child, index) => {
    if (typeof child === 'string')
      return child;
    if (child.props && child.props.children)
      child.props.children = recursivelyMapChildren(child.props.children, transform);
    return transform(child, index);
  });
};

