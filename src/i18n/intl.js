const {createIntl: reactCreateIntl, createIntlCache} = require('react-intl');
const messages = require('./messages');

const intlCache = createIntlCache();

const createIntl = ({pageContext: {lang}}) => reactCreateIntl({
  locale: lang,
  messages: messages[lang]
}, intlCache);

module.exports = {
  createIntl
};
