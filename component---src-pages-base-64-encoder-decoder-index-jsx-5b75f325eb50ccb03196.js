"use strict";(self.webpackChunk_marcnuri_www_marcnuri_com=self.webpackChunk_marcnuri_www_marcnuri_com||[]).push([[26],{7227:function(e,t,a){a.r(t),a.d(t,{Head:function(){return R},default:function(){return X}});var n=a(7294),o=a(4806),r=a(5974),s=a(4680),i=a(3289);const c="function"==typeof atob,l="function"==typeof btoa,d="function"==typeof Buffer,u="function"==typeof TextDecoder?new TextDecoder:void 0,m="function"==typeof TextEncoder?new TextEncoder:void 0,p=Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),f=(e=>{let t={};return e.forEach(((e,a)=>t[e]=a)),t})(p),h=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,g=String.fromCharCode.bind(String),b="function"==typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):e=>new Uint8Array(Array.prototype.slice.call(e,0)),C=e=>e.replace(/=/g,"").replace(/[+\/]/g,(e=>"+"==e?"-":"_")),x=e=>e.replace(/[^A-Za-z0-9\+\/]/g,""),w=e=>{let t,a,n,o,r="";const s=e.length%3;for(let i=0;i<e.length;){if((a=e.charCodeAt(i++))>255||(n=e.charCodeAt(i++))>255||(o=e.charCodeAt(i++))>255)throw new TypeError("invalid character found");t=a<<16|n<<8|o,r+=p[t>>18&63]+p[t>>12&63]+p[t>>6&63]+p[63&t]}return s?r.slice(0,s-3)+"===".substring(s):r},E=l?e=>btoa(e):d?e=>Buffer.from(e,"binary").toString("base64"):w,y=d?e=>Buffer.from(e).toString("base64"):e=>{let t=[];for(let a=0,n=e.length;a<n;a+=4096)t.push(g.apply(null,e.subarray(a,a+4096)));return E(t.join(""))},A=e=>{if(e.length<2)return(t=e.charCodeAt(0))<128?e:t<2048?g(192|t>>>6)+g(128|63&t):g(224|t>>>12&15)+g(128|t>>>6&63)+g(128|63&t);var t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return g(240|t>>>18&7)+g(128|t>>>12&63)+g(128|t>>>6&63)+g(128|63&t)},B=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,v=e=>e.replace(B,A),Z=d?e=>Buffer.from(e,"utf8").toString("base64"):m?e=>y(m.encode(e)):e=>E(v(e)),k=(e,t=!1)=>t?C(Z(e)):Z(e),_=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,D=e=>{switch(e.length){case 4:var t=((7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3))-65536;return g(55296+(t>>>10))+g(56320+(1023&t));case 3:return g((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return g((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},F=e=>e.replace(_,D),M=e=>{if(e=e.replace(/\s+/g,""),!h.test(e))throw new TypeError("malformed base64.");e+="==".slice(2-(3&e.length));let t,a,n,o="";for(let r=0;r<e.length;)t=f[e.charAt(r++)]<<18|f[e.charAt(r++)]<<12|(a=f[e.charAt(r++)])<<6|(n=f[e.charAt(r++)]),o+=64===a?g(t>>16&255):64===n?g(t>>16&255,t>>8&255):g(t>>16&255,t>>8&255,255&t);return o},P=c?e=>atob(x(e)):d?e=>Buffer.from(e,"base64").toString("binary"):M,T=d?e=>b(Buffer.from(e,"base64")):e=>b(P(e).split("").map((e=>e.charCodeAt(0)))),S=d?e=>Buffer.from(e,"base64").toString("utf8"):u?e=>u.decode(T(e)):e=>F(P(e)),q=e=>x(e.replace(/[-_]/g,(e=>"-"==e?"+":"/"))),N=e=>S(q(e));var z=a(3300),I=a(2734),U=a(1508),G=a(5725),H=a(2658),O=a(6914),V=a(4997);var W=(0,o.ZP)((e=>{var t,a;let{intl:o,values:r,onFieldChange:s,onEncodeClick:i,onDecodeClick:c}=e;const l=(0,I.Z)();return n.createElement(U.Z,{sx:{p:l.spacing(4),margin:"auto",flexGrow:1}},n.createElement(G.ZP,{container:!0,spacing:3},n.createElement(G.ZP,{item:!0,xs:12},n.createElement(H.Z,null,o.formatMessage({id:"base64.form.instructions"}))),n.createElement(G.ZP,{item:!0,xs:12},n.createElement(V.K,{id:"input",label:o.formatMessage({id:"base64.form.Input"}),value:r.input,onChange:s,rows:6})),n.createElement(G.ZP,{item:!0,xs:12},n.createElement(O.Z,{color:"primary",disabled:0===(null!==(t=r.input)&&void 0!==t?t:"").length,onClick:i},o.formatMessage({id:"base64.form.Encode"})),n.createElement(O.Z,{color:"primary",disabled:0===(null!==(a=r.input)&&void 0!==a?a:"").length,onClick:c},o.formatMessage({id:"base64.form.Decode"}))),n.createElement(G.ZP,{item:!0,xs:12},n.createElement(V.K,{id:"output",label:o.formatMessage({id:"base64.form.Output"}),value:r.output,onChange:s,rows:6}))))})),j=a(1041),K=a(9552);const L={en:"## What is Base64 encoder/decoder?\nThis is an online tool to encode into and decode from Base64.\n\nBase64 is a binary-to-text encoding scheme commonly used to transport binary data across communication\nchannels that only support text content. This ensures that data remains intact during transportation\nor storage through these channels.\n\n### How to encode data into Base64?\nPaste the data you want to encode into the Input field and press the Encode button.\nThe result Base64 encoded string will be available in the Output field. \n\n### How to decode data from Base64?\nPaste the text you want to decode into the Input field and press the Decode button.\nThe decoded data will be available in the Output field. \n\n## More information\n* [MDN Web Docs > Base64](https://developer.mozilla.org/en-US/docs/Glossary/Base64)\n* [Wikipedia article](https://en.wikipedia.org/wiki/Base64)\n\nYou can check the sourcecode for the project at [GitHub](https://github.com/manusa/com.marcnuri.www).\n",es:"## Qué es Base64 encoder/decoder?\nEsto es una herramienta online que te permite codificar y decodificar datos en Base64.\n\nBase64 es un esquema de codificación de binario a text que se usa frecuentemente para transportar datos\nbinarios a través de canales que únicamente soportan contenido textual. Esto asegura que los datos \nse mantienen intactos durante su transporte o almacenaje a través de estos canales.\n\n### ¿Cómo codificar datos en Base64?\nPega los datos que quieras codificar en el campo Input y presiona sobre el botón Codifica.\nEl texto codificado en Base64 estará disponible en el campo Output.\n\n### ¿Cómo decodificar datos en Base64?\nPega el texto que quieras decodificar en el campo Input y presiona sobre el botón Decodifica.\nLos datos decodificados estarán disponibles en el campo Output.\n\n## Más información\n* [MDN Web Docs > Base64](https://developer.mozilla.org/en-US/docs/Glossary/Base64)\n* [Wikipedia article](https://en.wikipedia.org/wiki/Base64)\n\nPuedes ver el código fuente del proyecto en [GitHub](https://github.com/manusa/com.marcnuri.www).\n"};var Q=(0,o.ZP)((e=>{let{pageContext:t,intl:a}=e;const o=a.formatMessage({id:"base64.title"}),{0:{formValues:c},1:l}=(0,n.useState)({formValues:{input:"",output:""}});return n.createElement(r.Z,{theme:K.$},n.createElement(z.Z,{className:"base64",pageContext:t},n.createElement("div",{className:"base64__title"},n.createElement("div",{className:"base64__title-filter"},n.createElement("h1",{className:"base64__title-text"},o))),n.createElement("section",{className:"base64__form"},n.createElement(s.Z,null,n.createElement(W,{values:c,onFieldChange:e=>{e.persist(),c[e.target.id]=e.target.value,l({formValues:c})},onEncodeClick:()=>l({formValues:{...c,output:k(c.input)}}),onDecodeClick:()=>l({formValues:{...c,output:N(c.input)}})}))),n.createElement("section",{className:"base64__about markdown-section"},n.createElement(i.D,{children:L[t.lang],linkTarget:"_blank",components:{a:j.Z}}))))})),Y=a(7798),$=a(7914),J=a(25);const R=e=>{let{pageContext:t}=e;const a=(0,J.createIntl)({pageContext:t});return n.createElement(Y.p,{pageContext:t,title:a.formatMessage({id:"base64.title"}),description:a.formatMessage({id:"base64.meta.description"}),image:$.Z})};var X=Q}}]);