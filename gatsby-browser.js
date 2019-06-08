const gatsbySsr = require('./gatsby-ssr');

exports.onClientEntry = () => {
  window.___GATSBY_RUNNING_IN_BROWSER = true;
};
exports.wrapPageElement = gatsbySsr.wrapPageElement;
