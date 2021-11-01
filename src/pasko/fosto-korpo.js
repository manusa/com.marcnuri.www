import React from 'react';
import fostoKorpoFonto from 'raw-loader!./fosto-korpo-fonto.txt';

const consoleBanner = `%c
███╗   ███╗ █████╗ ██████╗  ██████╗    ███╗   ██╗██╗   ██╗██████╗ ██╗
████╗ ████║██╔══██╗██╔══██╗██╔════╝    ████╗  ██║██║   ██║██╔══██╗██║
██╔████╔██║███████║██████╔╝██║         ██╔██╗ ██║██║   ██║██████╔╝██║
██║╚██╔╝██║██╔══██║██╔══██╗██║         ██║╚██╗██║██║   ██║██╔══██╗██║
██║ ╚═╝ ██║██║  ██║██║  ██║╚██████╗    ██║ ╚████║╚██████╔╝██║  ██║██║
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝    ╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝╚═╝
`.replace(/\n/g, '\\n');

export const FostoKorpo = () => (
  <>
    <style dangerouslySetInnerHTML={{__html: `\n/**\n${fostoKorpoFonto}\n**/\n`}} />
    <script dangerouslySetInnerHTML={{__html: `
      if (console.log) console.log('${consoleBanner}',
        'font-family:monospace;font-size:12px;color:#2f2739;');`
    }} />
  </>
);
