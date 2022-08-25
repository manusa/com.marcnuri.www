import React from 'react';
import ReactMarkdown from 'react-markdown';
import {injectIntl} from 'react-intl';
import privacyPolicyEn from 'raw-loader!./privacy-policy.en.md';
import ExternalLink from '../components/external-link';
import Layout from './layout';


const PrivacyPolicy = ({pageContext}) => (
  <Layout pageContext={pageContext}>
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
