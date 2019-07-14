const React = require('react');
const {IntlProvider} = require('react-intl');
const messages = require('./src/i18n/messages');
const kapo = require('./src/pasko/kapo');
const fostoKorpo = require('./src/pasko/fosto-korpo');

exports.wrapPageElement = ({element, props}) => {
  const {pageContext: {lang}} = props;
  return (
    <IntlProvider locale={lang} messages={messages[lang]}>
      {element}
    </IntlProvider>);
};

exports.onPreRenderHTML = ({
  getHeadComponents, replaceHeadComponents,
  getPostBodyComponents, replacePostBodyComponents
}) => {
  replaceHeadComponents([kapo, ...getHeadComponents()]);
  replacePostBodyComponents([fostoKorpo, ...getPostBodyComponents()]);
};
