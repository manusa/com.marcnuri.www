const locales = require('./src/i18n/locales');

exports.onCreatePage = async ({page, actions}) => {
  const {createPage, deletePage} = actions;
  deletePage(page);
  Object.entries(locales).forEach(([key, locale]) => {
    const path = locale.default ? page.path : `${locale.path}${page.path}`;
    createPage({...page,
      path,
      context: {...page.context,
        locale: key,
        pagePath: page.path,
        localizedPath: path
      }
    });
  });
};
