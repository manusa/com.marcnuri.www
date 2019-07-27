const locales = require('./src/i18n/locales');
const {localizedPath} = require('./src/i18n/path');

exports.onCreatePage = async ({page, actions}) => {
  const {createPage, deletePage} = actions;
  deletePage(page);
  Object.entries(locales).forEach(([key, locale]) => {
    const path = localizedPath(locale)(page.path);
    createPage({...page,
      path,
      context: {...page.context,
        locale,
        lang: key,
        pagePath: page.path,
        localizedPath: path
      }
    });
  });
};

exports.onCreateWebpackConfig = ({
  getConfig, actions
}) => {
  if (getConfig().mode === 'production') {
    actions.setWebpackConfig({
      devtool: false
    });
  }
};
