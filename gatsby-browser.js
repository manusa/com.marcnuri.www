require('whatwg-fetch');

const gatsbySsr = require('./gatsby-ssr');

exports.wrapPageElement = gatsbySsr.wrapPageElement;
