import React from 'react';
import ReactMarkdown from 'react-markdown';
import {injectIntl} from 'react-intl';
import Layout from './layout';
import Seo from '../components/seo/seo';
import isotopeMailDemoEn from 'raw-loader!./isotope-mail-demo.en.md';
import isotopeLogo from './assets/isotope-logo.jpg';
import isotopeLogoH from './assets/isotope-logo-h.png';
import ExternalLink from '../components/external-link';

const imageMap = {
  isotopeLogo,
  isotopeLogoH
};

const IsotopeMailDemo = ({pageContext, intl}) => (
  <Layout pageContext={pageContext}>
    <Seo
      pageContext={pageContext}
      lang={pageContext.lang}
      title={intl.formatMessage({id: 'isotopeMailDemo.title'})}
      description={intl.formatMessage({id: 'isotopeMailDemo.privacyPolicy.description'})}
      image={isotopeLogo}
    />
    <ReactMarkdown
      source={isotopeMailDemoEn}
      linkTarget="_blank"
      renderers={{
        link: ExternalLink
      }}
      transformImageUri={image => imageMap[image]}
    />
  </Layout>
);

export default injectIntl(IsotopeMailDemo);
