import React from 'react';
import ReactMarkdown from 'react-markdown';
import {injectIntl} from 'react-intl';
import privacyPolicyEn from 'raw-loader!./privacy-policy.en.md';
import ExternalLink from '../components/external-link';
import Seo from '../components/seo/seo';
import isotopeLogo from './assets/isotope-logo.jpg';
import Layout from './layout';


const PrivacyPolicy = ({pageContext, intl}) => (
  <Layout pageContext={pageContext}>
    <Seo
      pageContext={pageContext}
      lang={pageContext.lang}
      title={intl.formatMessage({id: 'isotopeMailDemo.privacyPolicy.title'})}
      description={intl.formatMessage({id: 'isotopeMailDemo.privacyPolicy.description'})}
      image={isotopeLogo}
    />
    <ReactMarkdown
      children={privacyPolicyEn}
      linkTarget="_blank"
      components={{
        a: ExternalLink
      }}
    />
  </Layout>
);

export default injectIntl(PrivacyPolicy);
