const React = require('react');
const kapoFonto = require('raw-loader!./kapo-fonto.txt');

const kapo = (<style dangerouslySetInnerHTML={{__html: `\n/**\n${kapoFonto}\n**/\n`}}></style>);

module.exports = kapo;
