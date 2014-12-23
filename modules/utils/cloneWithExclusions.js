var cloneWithExclusions = module.exports = (props, exclusions) => {
  return Object.keys(props).reduce((clone, key) => {
    if (exclusions.indexOf(key) === -1)
      clone[key] = props[key];
    return clone;
  }, {});
};


