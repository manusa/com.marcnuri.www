const {addLocaleData} = require('react-intl');
const enData = require('react-intl/locale-data/en');
const esData = require('react-intl/locale-data/es');
const en = require('./en.json');
const es = require('./es.json');

addLocaleData([...enData, ...esData]);

const messages = {en, es};

module.exports = messages;
