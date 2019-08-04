import React from 'react';
import ReactMarkdown from 'react-markdown';
import {Container} from '@material-ui/core';
import privacyPolicyEn from 'raw-loader!./privacy-policy.en.md';
import ExternalLink from '../components/external-link';
import '../styles/pages/isotope-privacy-policy.scss';
import {Helmet} from 'react-helmet';


const PrivacyPolicy = () => (
  <div className="isotope-privacy-policy">
    <Helmet>
      <html lang="en" />
      <title>Isotope Mail Client Demo Privacy Policy</title>
    </Helmet>
    <Container maxWidth="lg">
      <ReactMarkdown
        source={privacyPolicyEn}
        linkTarget="_blank"
        renderers={{
          link: ExternalLink
        }}
      />
    </Container>
  </div>
);

export default PrivacyPolicy;
