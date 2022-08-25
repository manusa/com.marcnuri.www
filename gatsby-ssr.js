const React = require('react');
const {IntlProvider} = require('react-intl');
const messages = require('./src/i18n/messages');
const {FostoKorpo} = require('./src/pasko/fosto-korpo');
const {Kapo} = require('./src/pasko/kapo');
const {SearchConsoleVerification} = require('./src/components/google/search-console');

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
  replaceHeadComponents([<Kapo />, <SearchConsoleVerification />, ...getHeadComponents()]);
  replacePostBodyComponents([<FostoKorpo />, ...getPostBodyComponents()]);
};

exports.onRenderBody = ({pathname, setHtmlAttributes, loadPageDataSync}) => {
  if (process.env.NODE_ENV !== 'development') {
    const {
      result: {pageContext: {lang}}
    } = loadPageDataSync(pathname);
    setHtmlAttributes({lang});
  }
};
