const locales = require('./src/i18n/locales');

const STATIC_ROUTES = [
  'adr-online',
  'uuid',
  'iban'
];

const createRegularEntries = ({site, allSitePage}) =>
  allSitePage.edges.map(edge => (
    {
      url: `${site.siteMetadata.siteUrl}${edge.node.path}`,
      changefreq: 'daily',
      priority: 0.7
    })
  );

const createStaticRoutes = site => {
  const staticRoutes = [];
  ['', ...Object.keys(locales).map(locale => `${locale}/`)]
    .forEach(locale => {
      STATIC_ROUTES.forEach(route => {
        staticRoutes.push({
          url: `${site.siteMetadata.siteUrl}/${locale}${route}}`,
          changefreq: 'yearly',
          priority: 0.7
        });
      });
    });
  return staticRoutes;
};

const serializer = ({site, allSitePage}) => {
  const entries = [];
  entries.push(...createRegularEntries({site, allSitePage}));
  entries.push(...createStaticRoutes(site));
  return entries;
};

module.exports = {
  serializer
};
