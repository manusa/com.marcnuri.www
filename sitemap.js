const locales = require('./src/i18n/locales');

const STATIC_ROUTES = [
  'adr-online',
  'iban'
];

const createStaticRoutes = () => {
  const staticRoutes = [];
  ['', ...Object.keys(locales).map(locale => `${locale}/`)]
    .forEach(locale => {
      STATIC_ROUTES.forEach(route => {
        staticRoutes.push({
          path: `/${locale}${route}`
        });
      });
    });
  return staticRoutes;
};

const resolvePages = ({allSitePage}) => {
  const entries = [];
  entries.push(...allSitePage.nodes);
  entries.push(...createStaticRoutes());
  return entries;
};

module.exports = {
  resolvePages
};
