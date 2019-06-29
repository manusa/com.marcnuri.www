const localizedPath = locale => path => {
  if (locale.default) {
    return path;
  }
  return `/${locale.path}${path}`;
};

module.exports = {
  localizedPath
};
