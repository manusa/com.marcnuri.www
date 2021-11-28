import React from 'react';

const ExternalLink = ({href, title, children}) => (
  <a href={href} title={title} target='_blank' rel='noopener'>{children}</a>
);

export default ExternalLink;
