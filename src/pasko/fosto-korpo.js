const React = require('react');
const fostoKorpoFonto = require('raw-loader!./fosto-korpo-fonto.txt');

const fostoKorpo = (<style dangerouslySetInnerHTML={{__html: `\n/**\n${fostoKorpoFonto}\n**/\n`}}></style>);

module.exports = fostoKorpo;
