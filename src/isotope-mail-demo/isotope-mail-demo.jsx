import React from 'react';
import ReactMarkdown from 'react-markdown';
import {injectIntl} from 'react-intl';
import Layout from './layout';
import isotopeMailDemoEn from 'raw-loader!./isotope-mail-demo.en.md';
import isotopeLogo from './assets/isotope-logo.jpg';
import isotopeLogoH from './assets/isotope-logo-h.png';
import ExternalLink from '../components/external-link';

const imageMap = {
  isotopeLogo,
  isotopeLogoH
};

const IsotopeMailDemo = ({pageContext}) => (
  <Layout pageContext={pageContext}>
    <ReactMarkdown
      children={isotopeMailDemoEn}
      linkTarget="_blank"
      components={{
        a: ExternalLink
      }}
      transformImageUri={image => imageMap[image]}
    />
  </Layout>
);

export default injectIntl(IsotopeMailDemo);
