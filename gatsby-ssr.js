const React = require('react');
const {IntlProvider} = require('react-intl');
const messages = require('./src/i18n/messages');

exports.wrapPageElement = ({element, props}) => {
  const {pageContext: {locale}} = props;
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {element}
    </IntlProvider>);
};
