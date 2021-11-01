import React from 'react';
import kapoFonto from 'raw-loader!./kapo-fonto.txt';

export const Kapo = () => (<style dangerouslySetInnerHTML={{__html: `\n/**\n${kapoFonto}\n**/\n`}} />);
