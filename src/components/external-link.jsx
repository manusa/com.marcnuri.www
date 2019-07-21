import React from 'react';

const ExternalLink = ({href, children}) => (
  <a href={href} target={'_blank'} rel="noreferrer noopener">{children}</a>
);

export default ExternalLink;
