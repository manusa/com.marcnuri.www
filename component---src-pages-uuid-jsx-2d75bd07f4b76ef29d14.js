/*! For license information please see component---src-pages-uuid-jsx-2d75bd07f4b76ef29d14.js.LICENSE.txt */
(self.webpackChunk_marcnuri_www_marcnuri_com=self.webpackChunk_marcnuri_www_marcnuri_com||[]).push([[222],{5928:function(e,t,r){var n=r(5034);e.exports={siteMetadata:{title:"Marc Nuri",siteUrl:"https://www.marcnuri.com",year:2021,description:"I craft code",author:"Marc Nuri",social:{twitter:"@MarcNuri"},api:{uuid:"/api/uuid"}},plugins:["gatsby-plugin-sass","gatsby-plugin-material-ui",{resolve:"gatsby-plugin-google-analytics-gtag",options:{trackingId:"UA-1509094-4",enableLocalStorage:!1}},{resolve:"gatsby-plugin-sitemap",options:{resolvePages:n.resolvePages}},{resolve:"gatsby-plugin-robots-txt",options:{policy:[{userAgent:"*",allow:"/"}]}},{resolve:"gatsby-plugin-manifest",options:{short_name:"Marc Nuri",start_url:"/",background_color:"#78bcda",theme_color:"#78bcda",display:"browser",icon:"src/components/avatar/face-512-t.png"}},{resolve:"gatsby-source-rss-feed",options:{url:"https://blog.marcnuri.com/feed.xml",name:"BlogMarcNuriCom"}},{resolve:"gatsby-plugin-remote-images",options:{nodeType:"FeedBlogMarcNuriCom",imagePath:"enclosure.url"}},{resolve:"gatsby-source-rss-feed",options:{url:"https://blog.marcnuri.com/es/feed.xml",name:"BlogMarcNuriComEs"}},{resolve:"gatsby-plugin-remote-images",options:{nodeType:"FeedBlogMarcNuriComEs",imagePath:"enclosure.url"}},"gatsby-plugin-image",{resolve:"gatsby-plugin-sharp",options:{defaultQuality:90,failOnError:!0}},"gatsby-transformer-sharp"]}},5034:function(e,t,r){var n=r(861),a=r(4185),o=["adr-online","iban"];e.exports={resolvePages:function(e){var t,r=e.allSitePage,i=[];return i.push.apply(i,n(r.nodes)),i.push.apply(i,n((t=[],[""].concat(n(Object.keys(a).map((function(e){return e+"/"})))).forEach((function(e){o.forEach((function(r){t.push({path:"/"+e+r})}))})),t))),i}}},5013:function(e,t,r){"use strict";r.r(t),r.d(t,{Head:function(){return He},default:function(){return Ye}});var n=r(7294),a=r(8588),o=r(7326),i=r(4578),c=r(4687),s=r.n(c),l=r(5333),u=r(9804),d=r(5668),p=r(8953),m=r(6449),f=r(9211),h=r(4320),v=r(7137),g=r(4527),b=r(4334),y=r(1535),w=r(4942),x=r(3366),Z=r(7462),k=r(5505),C=r(9236),S=r(8230),E=r(9308),P=r(9240),j=r(3656),U=r(184),I=r(1351),L=r(9508);function M(e){return(0,I.Z)("MuiFormControlLabel",e)}var R=(0,L.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),_=r(1825),N=r(5893),D=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","value"],F=(0,j.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[(0,w.Z)({},"& .".concat(R.label),t.label),t.root,t["labelPlacement".concat((0,P.Z)(r.labelPlacement))]]}})((function(e){var t=e.theme,r=e.ownerState;return(0,Z.Z)((0,w.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(R.disabled),{cursor:"default"}),"start"===r.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===r.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===r.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,w.Z)({},"& .".concat(R.label),(0,w.Z)({},"&.".concat(R.disabled),{color:(t.vars||t).palette.text.disabled})))})),B=n.forwardRef((function(e,t){var r=(0,U.Z)({props:e,name:"MuiFormControlLabel"}),a=r.className,o=r.componentsProps,i=void 0===o?{}:o,c=r.control,s=r.disabled,l=r.disableTypography,u=r.label,d=r.labelPlacement,p=void 0===d?"end":d,m=(0,x.Z)(r,D),f=(0,S.Z)(),h=s;void 0===h&&void 0!==c.props.disabled&&(h=c.props.disabled),void 0===h&&f&&(h=f.disabled);var v={disabled:h};["checked","name","onChange","value","inputRef"].forEach((function(e){void 0===c.props[e]&&void 0!==r[e]&&(v[e]=r[e])}));var g=(0,_.Z)({props:r,muiFormControl:f,states:["error"]}),b=(0,Z.Z)({},r,{disabled:h,labelPlacement:p,error:g.error}),y=function(e){var t=e.classes,r=e.disabled,n=e.labelPlacement,a=e.error,o={root:["root",r&&"disabled","labelPlacement".concat((0,P.Z)(n)),a&&"error"],label:["label",r&&"disabled"]};return(0,C.Z)(o,M,t)}(b),w=u;return null==w||w.type===E.Z||l||(w=(0,N.jsx)(E.Z,(0,Z.Z)({component:"span",className:y.label},i.typography,{children:w}))),(0,N.jsxs)(F,(0,Z.Z)({className:(0,k.Z)(y.root,a),ownerState:b,ref:t},m,{children:[n.cloneElement(c,v),w]}))})),O=r(7663),G=r(9439),z=r(6127),T=r(6171);function q(e){return(0,I.Z)("PrivateSwitchBase",e)}(0,L.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var A=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],V=(0,j.ZP)(T.Z)((function(e){var t=e.ownerState;return(0,Z.Z)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),W=(0,j.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),X=n.forwardRef((function(e,t){var r=e.autoFocus,n=e.checked,a=e.checkedIcon,o=e.className,i=e.defaultChecked,c=e.disabled,s=e.disableFocusRipple,l=void 0!==s&&s,u=e.edge,d=void 0!==u&&u,p=e.icon,m=e.id,f=e.inputProps,h=e.inputRef,v=e.name,g=e.onBlur,b=e.onChange,y=e.onFocus,w=e.readOnly,E=e.required,j=e.tabIndex,U=e.type,I=e.value,L=(0,x.Z)(e,A),M=(0,z.Z)({controlled:n,default:Boolean(i),name:"SwitchBase",state:"checked"}),R=(0,G.Z)(M,2),_=R[0],D=R[1],F=(0,S.Z)(),B=c;F&&void 0===B&&(B=F.disabled);var O="checkbox"===U||"radio"===U,T=(0,Z.Z)({},e,{checked:_,disabled:B,disableFocusRipple:l,edge:d}),X=function(e){var t=e.classes,r=e.checked,n=e.disabled,a=e.edge,o={root:["root",r&&"checked",n&&"disabled",a&&"edge".concat((0,P.Z)(a))],input:["input"]};return(0,C.Z)(o,q,t)}(T);return(0,N.jsxs)(V,(0,Z.Z)({component:"span",className:(0,k.Z)(X.root,o),centerRipple:!0,focusRipple:!l,disabled:B,tabIndex:null,role:void 0,onFocus:function(e){y&&y(e),F&&F.onFocus&&F.onFocus(e)},onBlur:function(e){g&&g(e),F&&F.onBlur&&F.onBlur(e)},ownerState:T,ref:t},L,{children:[(0,N.jsx)(W,(0,Z.Z)({autoFocus:r,checked:n,defaultChecked:i,className:X.input,disabled:B,id:O&&m,name:v,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var t=e.target.checked;D(t),b&&b(e,t)}},readOnly:w,ref:h,required:E,ownerState:T,tabIndex:j,type:U},"checkbox"===U&&void 0===I?{}:{value:I},f)),_?a:p]}))}));function H(e){return(0,I.Z)("MuiSwitch",e)}var Y=(0,L.Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),$=["className","color","edge","size","sx"],J=(0,j.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.edge&&t["edge".concat((0,P.Z)(r.edge))],t["size".concat((0,P.Z)(r.size))]]}})((function(e){var t,r=e.ownerState;return(0,Z.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===r.edge&&{marginLeft:-8},"end"===r.edge&&{marginRight:-8},"small"===r.size&&(t={width:40,height:24,padding:7},(0,w.Z)(t,"& .".concat(Y.thumb),{width:16,height:16}),(0,w.Z)(t,"& .".concat(Y.switchBase),(0,w.Z)({padding:4},"&.".concat(Y.checked),{transform:"translateX(16px)"})),t))})),Q=(0,j.ZP)(X,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:function(e,t){var r=e.ownerState;return[t.switchBase,(0,w.Z)({},"& .".concat(Y.input),t.input),"default"!==r.color&&t["color".concat((0,P.Z)(r.color))]]}})((function(e){var t,r=e.theme;return t={position:"absolute",top:0,left:0,zIndex:1,color:r.vars?r.vars.palette.Switch.defaultColor:"".concat("light"===r.palette.mode?r.palette.common.white:r.palette.grey[300]),transition:r.transitions.create(["left","transform"],{duration:r.transitions.duration.shortest})},(0,w.Z)(t,"&.".concat(Y.checked),{transform:"translateX(20px)"}),(0,w.Z)(t,"&.".concat(Y.disabled),{color:r.vars?r.vars.palette.Switch.defaultDisabledColor:"".concat("light"===r.palette.mode?r.palette.grey[100]:r.palette.grey[600])}),(0,w.Z)(t,"&.".concat(Y.checked," + .").concat(Y.track),{opacity:.5}),(0,w.Z)(t,"&.".concat(Y.disabled," + .").concat(Y.track),{opacity:r.vars?r.vars.opacity.switchTrackDisabled:"".concat("light"===r.palette.mode?.12:.2)}),(0,w.Z)(t,"& .".concat(Y.input),{left:"-100%",width:"300%"}),t}),(function(e){var t,r=e.theme,n=e.ownerState;return(0,Z.Z)({"&:hover":{backgroundColor:r.vars?"rgba(".concat(r.vars.palette.action.activeChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,O.Fq)(r.palette.action.active,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&(t={},(0,w.Z)(t,"&.".concat(Y.checked),(0,w.Z)({color:(r.vars||r).palette[n.color].main,"&:hover":{backgroundColor:r.vars?"rgba(".concat(r.vars.palette[n.color].mainChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,O.Fq)(r.palette[n.color].main,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(Y.disabled),{color:r.vars?r.vars.palette.Switch["".concat(n.color,"DisabledColor")]:"".concat("light"===r.palette.mode?(0,O.$n)(r.palette[n.color].main,.62):(0,O._j)(r.palette[n.color].main,.55))})),(0,w.Z)(t,"&.".concat(Y.checked," + .").concat(Y.track),{backgroundColor:(r.vars||r).palette[n.color].main}),t))})),K=(0,j.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:function(e,t){return t.track}})((function(e){var t=e.theme;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:"".concat("light"===t.palette.mode?t.palette.common.black:t.palette.common.white),opacity:t.vars?t.vars.opacity.switchTrack:"".concat("light"===t.palette.mode?.38:.3)}})),ee=(0,j.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:function(e,t){return t.thumb}})((function(e){var t=e.theme;return{boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}})),te=n.forwardRef((function(e,t){var r=(0,U.Z)({props:e,name:"MuiSwitch"}),n=r.className,a=r.color,o=void 0===a?"primary":a,i=r.edge,c=void 0!==i&&i,s=r.size,l=void 0===s?"medium":s,u=r.sx,d=(0,x.Z)(r,$),p=(0,Z.Z)({},r,{color:o,edge:c,size:l}),m=function(e){var t=e.classes,r=e.edge,n=e.size,a=e.color,o=e.checked,i=e.disabled,c={root:["root",r&&"edge".concat((0,P.Z)(r)),"size".concat((0,P.Z)(n))],switchBase:["switchBase","color".concat((0,P.Z)(a)),o&&"checked",i&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},s=(0,C.Z)(c,H,t);return(0,Z.Z)({},t,s)}(p),f=(0,N.jsx)(ee,{className:m.thumb,ownerState:p});return(0,N.jsxs)(J,{className:(0,k.Z)(m.root,n),sx:u,ownerState:p,children:[(0,N.jsx)(Q,(0,Z.Z)({type:"checkbox",icon:f,checkedIcon:f,ref:t,ownerState:p},d,{classes:(0,Z.Z)({},m,{root:m.switchBase})})),(0,N.jsx)(K,{className:m.track,ownerState:p})]})})),re=r(6968),ne=r(168),ae=r(3431);function oe(e){return(0,I.Z)("MuiLinearProgress",e)}(0,L.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var ie,ce,se,le,ue,de,pe,me,fe,he,ve,ge,be=["className","color","value","valueBuffer","variant"],ye=(0,ae.keyframes)(pe||(pe=ie||(ie=(0,ne.Z)(["\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n"])))),we=(0,ae.keyframes)(me||(me=ce||(ce=(0,ne.Z)(["\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n"])))),xe=(0,ae.keyframes)(fe||(fe=se||(se=(0,ne.Z)(["\n  0% {\n    opacity: 1;\n    background-position: 0 -23px;\n  }\n\n  60% {\n    opacity: 0;\n    background-position: 0 -23px;\n  }\n\n  100% {\n    opacity: 1;\n    background-position: -200px -23px;\n  }\n"])))),Ze=function(e,t){return"inherit"===t?"currentColor":e.vars?e.vars.palette.LinearProgress["".concat(t,"Bg")]:"light"===e.palette.mode?(0,O.$n)(e.palette[t].main,.62):(0,O._j)(e.palette[t].main,.5)},ke=(0,j.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["color".concat((0,P.Z)(r.color))],t[r.variant]]}})((function(e){var t=e.ownerState,r=e.theme;return(0,Z.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:Ze(r,t.color)},"inherit"===t.color&&"buffer"!==t.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===t.variant&&{backgroundColor:"transparent"},"query"===t.variant&&{transform:"rotate(180deg)"})})),Ce=(0,j.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:function(e,t){var r=e.ownerState;return[t.dashed,t["dashedColor".concat((0,P.Z)(r.color))]]}})((function(e){var t=e.ownerState,r=e.theme,n=Ze(r,t.color);return(0,Z.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===t.color&&{opacity:.3},{backgroundImage:"radial-gradient(".concat(n," 0%, ").concat(n," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,ae.css)(he||(he=le||(le=(0,ne.Z)(["\n    animation: "," 3s infinite linear;\n  "]))),xe)),Se=(0,j.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:function(e,t){var r=e.ownerState;return[t.bar,t["barColor".concat((0,P.Z)(r.color))],("indeterminate"===r.variant||"query"===r.variant)&&t.bar1Indeterminate,"determinate"===r.variant&&t.bar1Determinate,"buffer"===r.variant&&t.bar1Buffer]}})((function(e){var t=e.ownerState,r=e.theme;return(0,Z.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===t.color?"currentColor":(r.vars||r).palette[t.color].main},"determinate"===t.variant&&{transition:"transform .".concat(4,"s linear")},"buffer"===t.variant&&{zIndex:1,transition:"transform .".concat(4,"s linear")})}),(function(e){var t=e.ownerState;return("indeterminate"===t.variant||"query"===t.variant)&&(0,ae.css)(ve||(ve=ue||(ue=(0,ne.Z)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    "]))),ye)})),Ee=(0,j.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:function(e,t){var r=e.ownerState;return[t.bar,t["barColor".concat((0,P.Z)(r.color))],("indeterminate"===r.variant||"query"===r.variant)&&t.bar2Indeterminate,"buffer"===r.variant&&t.bar2Buffer]}})((function(e){var t=e.ownerState,r=e.theme;return(0,Z.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==t.variant&&{backgroundColor:"inherit"===t.color?"currentColor":(r.vars||r).palette[t.color].main},"inherit"===t.color&&{opacity:.3},"buffer"===t.variant&&{backgroundColor:Ze(r,t.color),transition:"transform .".concat(4,"s linear")})}),(function(e){var t=e.ownerState;return("indeterminate"===t.variant||"query"===t.variant)&&(0,ae.css)(ge||(ge=de||(de=(0,ne.Z)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;\n    "]))),we)})),Pe=n.forwardRef((function(e,t){var r=(0,U.Z)({props:e,name:"MuiLinearProgress"}),n=r.className,a=r.color,o=void 0===a?"primary":a,i=r.value,c=r.valueBuffer,s=r.variant,l=void 0===s?"indeterminate":s,u=(0,x.Z)(r,be),d=(0,Z.Z)({},r,{color:o,variant:l}),p=function(e){var t=e.classes,r=e.variant,n=e.color,a={root:["root","color".concat((0,P.Z)(n)),r],dashed:["dashed","dashedColor".concat((0,P.Z)(n))],bar1:["bar","barColor".concat((0,P.Z)(n)),("indeterminate"===r||"query"===r)&&"bar1Indeterminate","determinate"===r&&"bar1Determinate","buffer"===r&&"bar1Buffer"],bar2:["bar","buffer"!==r&&"barColor".concat((0,P.Z)(n)),"buffer"===r&&"color".concat((0,P.Z)(n)),("indeterminate"===r||"query"===r)&&"bar2Indeterminate","buffer"===r&&"bar2Buffer"]};return(0,C.Z)(a,oe,t)}(d),f=(0,m.Z)(),h={},v={bar1:{},bar2:{}};if("determinate"===l||"buffer"===l)if(void 0!==i){h["aria-valuenow"]=Math.round(i),h["aria-valuemin"]=0,h["aria-valuemax"]=100;var g=i-100;"rtl"===f.direction&&(g=-g),v.bar1.transform="translateX(".concat(g,"%)")}else 0;if("buffer"===l)if(void 0!==c){var b=(c||0)-100;"rtl"===f.direction&&(b=-b),v.bar2.transform="translateX(".concat(b,"%)")}else 0;return(0,N.jsxs)(ke,(0,Z.Z)({className:(0,k.Z)(p.root,n),ownerState:d,role:"progressbar"},h,{ref:t},u,{children:["buffer"===l?(0,N.jsx)(Ce,{className:p.dashed,ownerState:d}):null,(0,N.jsx)(Se,{className:p.bar1,ownerState:d,style:v.bar1}),"determinate"===l?null:(0,N.jsx)(Ee,{className:p.bar2,ownerState:d,style:v.bar2})]}))})),je=r(4997),Ue=function(e){e.preventDefault();var t=e.target;t&&(t.select(),t.focus())},Ie=function(e){var t=Object.assign({},e);return n.createElement(je.K,Object.assign({InputProps:{sx:{borderTopWidth:0,borderTopLeftRadius:0,borderTopRightRadius:0}}},t))},Le=function(e){var t=e.intl,r=e.values,a=e.loading,o=e.result,i=e.onFieldChange,c=e.onGenerateClick,s=(0,m.Z)();return n.createElement(f.Z,{sx:{mx:s.spacing(4),py:s.spacing(4)}},n.createElement(h.ZP,{container:!0,spacing:3},n.createElement(h.ZP,{item:!0,xs:12,sm:6},n.createElement(v.Z,{id:"amount",value:r.amount,onChange:i,label:t.formatMessage({id:"uuid.form.Amount"}),inputProps:{min:"1",max:"20000"},type:"number",fullWidth:!0})),n.createElement(h.ZP,{item:!0,xs:12,sm:6},n.createElement(g.Z,{fullWidth:!0},n.createElement(b.Z,{id:"separator-label"},t.formatMessage({id:"uuid.form.Separator"})),n.createElement(y.Z,{id:"separator",labelId:"separator-label",label:t.formatMessage({id:"uuid.form.Separator"}),value:r.separator,onChange:i,inputProps:{id:"separator",name:"separator"},native:!0},n.createElement("option",{value:"\n"},t.formatMessage({id:"uuid.form.Separator.NewLine"})),n.createElement("option",{value:":"},t.formatMessage({id:"uuid.form.Separator.Colon"})),n.createElement("option",{value:";"},t.formatMessage({id:"uuid.form.Separator.Semicolon"})),n.createElement("option",{value:"|"},t.formatMessage({id:"uuid.form.Separator.Pipe"}))))),n.createElement(h.ZP,{item:!0},n.createElement(B,{control:n.createElement(te,{id:"upperCase",type:"checkbox",checked:r.upperCase,onChange:i}),label:t.formatMessage({id:"uuid.form.UpperCase"})})),n.createElement(h.ZP,{item:!0},n.createElement(B,{control:n.createElement(te,{id:"braces",type:"checkbox",checked:r.braces,onChange:i}),label:t.formatMessage({id:"uuid.form.Braces"})+" {}"})),n.createElement(h.ZP,{item:!0},n.createElement(B,{control:n.createElement(te,{id:"hyphens",type:"checkbox",checked:r.hyphens,onChange:i}),label:t.formatMessage({id:"uuid.form.Hyphens"})})),n.createElement(h.ZP,{container:!0,justifyContent:"flex-end"},n.createElement(re.Z,{color:"primary",disabled:a,onClick:c},t.formatMessage({id:"uuid.form.Generate"}))),n.createElement(h.ZP,{item:!0,xs:12},n.createElement(Pe,{variant:!0===a?"indeterminate":"determinate",value:100}),n.createElement(Ie,{id:"result",value:o,inputProps:{onMouseOver:Ue}}))))};Le.defaultProps={};var Me=(0,l.ZP)(Le),Re=r(1041),_e=r(3300),Ne=r(5928),De=r.n(Ne),Fe=2e4,Be=function(){var e=(0,a.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===t&&(t=1),(r=new URL(""+De().siteMetadata.siteUrl+De().siteMetadata.api.uuid)).search=new URLSearchParams({quantity:t}).toString(),e.next=5,fetch(r,{headers:{Accept:"application/json"}});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function Oe(e){if(!e.ok)throw Error(""+e.status);return e.json()}var Ge=function(e){return void 0===e&&(e=[]),function(t){var r=t.upperCase,n=void 0!==r&&r,a=t.braces,o=void 0!==a&&a,i=t.hyphens,c=void 0===i||i,s=t.separator,l=void 0===s?"\n":s;return e.map((function(e){var t=e;return n&&(t=t.toUpperCase()),o&&(t="{"+t+"}"),c||(t=t.replace(/-/g,"")),t})).join(l)}},ze=r(1048),Te={en:"_Use these UUIDs at your own risk, their uniqueness is not guaranteed._\n\n## About\nThis is an online tool to generate UUID / GUID.\nUUID/GUID comes from the acronym Universally/Globally Unique Identifier,\nwhich is a 128-bit number used to identify information in computer systems.\n\nYou can check the sourcecode for the project at:\n\n[Front-End (Gatsby static site)](https://github.com/manusa/com.marcnuri.www)\n\n[Back-End (microservice)](https://github.com/manusa/com.marcnuri.uuid)\n\n## What's a version 4 UUID?\nVersion 4 UUIDs use random numbers for its generation (except for 6 bits reserved for variant and version).\nVersions 1, 2, 3 and 5 are not completely random and use information such as MAC address and date-time (1/2)\nor namespace (3/5) for its generation.\n\nThis application uses the method `randomUUID()` of the java \n[`java.util.UUID`](https://docs.oracle.com/javase/8/docs/api/java/util/UUID.html) class.\nThe generated keys are type 4 pseudo randomly generated UUIDs. The Java implementation \nuses [`java.security.SecureRandom`](https://docs.oracle.com/javase/8/docs/api/java/security/SecureRandom.html)\nthat uses an unpredictable value as the seed in order to comply with\n[RFC 1750](https://www.ietf.org/rfc/rfc1750.txt) making its output strong and lowering the chances \nof collisions.\n\n## What's the difference between GUID and UUID?\nBoth terms refer to the same technical concept published in the \n[RFC 4122](https://www.ietf.org/rfc/rfc4122.txt) specification.\n\nIn general, the term GUID is most used across developers using Microsoft technologies.\n\n## More information\n[RFC 4122](https://www.ietf.org/rfc/rfc4122.txt)\n\n[java.util.UUID](https://docs.oracle.com/javase/8/docs/api/java/util/UUID.html)\n\n[java.security.SecureRandom](https://docs.oracle.com/javase/8/docs/api/java/security/SecureRandom.html)\n\n[RFC 1750](https://www.ietf.org/rfc/rfc1750.txt)\n\n[Wikipedia article](https://en.wikipedia.org/wiki/Universally_unique_identifier)\n",es:"_La unícidad de las claves que aquí se proporcionan no está garantizada, usálo bajo tu responsabilidad._\n\n## Acerca de...\nEsta aplicación es un generador de claves únicas UUID/GUID.\nUn UUID es un identificador único global/universal, que es un número de 128 bits empleado\nen sistemas de computación para identificar información.\n\nEl código fuente de este proyecto está disponible en:\n\n[Front-End (Página estática generada con Gatsby)](https://github.com/manusa/com.marcnuri.www)\n\n[Back-End (microservicio)](https://github.com/manusa/com.marcnuri.uuid)\n\n## ¿Qué es un UUID versión 4?\nLos UUIDs de versión 4 emplean números aleatorios apra su generación (excepto 6 birs reservados para \nla variante y la versión). Las versiones 1, 2, 3 y 5 no son completamente aleatoriasy emplean información como\nla dirección MAC y la fecha-hora (1/2) o el namespace (3/5) para su generación.\n\nEsta aplicación utiliza el método `randomUUID()` de la clase de java \n[`java.util.UUID`](https://docs.oracle.com/javase/8/docs/api/java/util/UUID.html).\nLas claves generadas son de tipo 4. La implementación Java utiliza \n[`java.security.SecureRandom`](https://docs.oracle.com/javase/8/docs/api/java/security/SecureRandom.html)\nque emplea un valor impredecible como semilla de para cumplir con \n[RFC 1750](https://www.ietf.org/rfc/rfc1750.txt) haciendo que su salida sea criptográficamente fuerte\ny minimizando las probabilidades de obtener una colisión.\n\n## ¿Cuál es la diferencia entre GUID y UUID?\nAmbos términos se refieren al mismo concepto técnico publicado en la especificación \n[RFC 4122](https://www.ietf.org/rfc/rfc4122.txt).\n\nEn general, el término GUID se emplea más entre los desarrolladores que trabajan con tecnologías\nMicrosoft.\n\n## Más información\n[RFC 4122](https://www.ietf.org/rfc/rfc4122.txt)\n\n[java.util.UUID](https://docs.oracle.com/javase/8/docs/api/java/util/UUID.html)\n\n[java.security.SecureRandom](https://docs.oracle.com/javase/8/docs/api/java/security/SecureRandom.html)\n\n[RFC 1750](https://www.ietf.org/rfc/rfc1750.txt)\n\n[Artículo en Wikipedia](https://es.wikipedia.org/wiki/Universally_unique_identifier)\n"},qe=function(e){function t(t){var r;return(r=e.call(this,t)||this).handleOnFieldChange=r.onFieldChange.bind((0,o.Z)(r)),r.handleOnGenerate=r.onGenerate.bind((0,o.Z)(r)),r.state={formValues:{amount:1,upperCase:!1,braces:!1,hyphens:!0,separator:"\n"},loading:!1,result:""},r}(0,i.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){this.handleOnGenerate(),window.addEventListener("load",this.handleOnGenerate)},r.componentWillUnmount=function(){window.removeEventListener("load",this.handleOnGenerate)},r.onFieldChange=function(e){e.persist();var t=Object.assign({},this.state.formValues),r=e.target.value;switch(e.target.type){case"number":r=e.target.valueAsNumber;break;case"checkbox":r=e.target.checked}t[e.target.id]=r,this.setState({formValues:t})},r.onGenerate=function(){var e=(0,a.Z)(s().mark((function e(){var t,r,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.formValues,(r=this.state.formValues.amount)>Fe?(r=Fe,this.setState({formValues:{amount:Fe}})):r<1&&(r=1),this.setState({loading:!0,formValues:Object.assign({},t,{amount:r})}),e.prev=4,e.next=7,Be(r).then(Oe);case 7:n=e.sent,a=Ge(n)(this.state.formValues),this.setState({result:a});case 10:return e.prev=10,this.setState({loading:!1}),e.finish(10);case 13:case"end":return e.stop()}}),e,this,[[4,,10,13]])})));return function(){return e.apply(this,arguments)}}(),r.render=function(){var e=this.props,t=e.pageContext,r=e.intl,a=this.state,o=a.formValues,i=a.loading,c=a.result,s=r.formatMessage({id:"uuid.title"});return n.createElement(d.Z,{theme:ze.$},n.createElement(_e.Z,{className:"uuid",pageContext:t},n.createElement("div",{className:"uuid__title"},n.createElement("div",{className:"uuid__title-filter"},n.createElement("h1",{className:"uuid__title-text"},s))),n.createElement("section",{className:"uuid__form"},n.createElement(p.Z,null,n.createElement(Me,{values:o,loading:i,result:c,onFieldChange:this.handleOnFieldChange,onGenerateClick:this.handleOnGenerate}))),n.createElement("section",{className:"uuid__about markdown-section"},n.createElement(u.D,{children:Te[t.lang],linkTarget:"_blank",components:{a:Re.Z}}))))},t}(n.Component),Ae=(0,l.ZP)(qe),Ve=r(7798),We=r(7914),Xe=r(25),He=function(e){var t=e.pageContext,r=(0,Xe.createIntl)({pageContext:t});return n.createElement(Ve.p,{pageContext:t,title:r.formatMessage({id:"uuid.title"}),description:r.formatMessage({id:"uuid.meta.description"}),image:We.Z})},Ye=Ae},7061:function(e,t,r){var n=r(8698).default;function a(){"use strict";e.exports=a=function(){return t},e.exports.__esModule=!0,e.exports.default=e.exports;var t={},r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(U){u=function(e,t,r){return e[t]=r}}function d(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),i=new E(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=p(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(e,r,i),o}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(U){return{type:"throw",arg:U}}}t.wrap=d;var m={};function f(){}function h(){}function v(){}var g={};u(g,c,(function(){return this}));var b=Object.getPrototypeOf,y=b&&b(b(P([])));y&&y!==r&&o.call(y,c)&&(g=y);var w=v.prototype=f.prototype=Object.create(g);function x(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function Z(e,t){function r(a,i,c,s){var l=p(e[a],e,i);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==n(d)&&o.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,c,s)}),(function(e){r("throw",e,c,s)})):t.resolve(d).then((function(e){u.value=e,c(u)}),(function(e){return r("throw",e,c,s)}))}s(l.arg)}var a;this._invoke=function(e,n){function o(){return new t((function(t,a){r(e,n,t,a)}))}return a=a?a.then(o,o):o()}}function k(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var n=p(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,m;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function P(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(o.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:j}}function j(){return{value:void 0,done:!0}}return h.prototype=v,u(w,"constructor",v),u(v,"constructor",h),h.displayName=u(v,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,u(e,l,"GeneratorFunction")),e.prototype=Object.create(w),e},t.awrap=function(e){return{__await:e}},x(Z.prototype),u(Z.prototype,s,(function(){return this})),t.AsyncIterator=Z,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new Z(d(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},x(w),u(w,l,"Generator"),u(w,c,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;S(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:P(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},t}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},4687:function(e,t,r){var n=r(7061)();e.exports=n;try{regeneratorRuntime=n}catch(a){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},8588:function(e,t,r){"use strict";function n(e,t,r,n,a,o,i){try{var c=e[o](i),s=c.value}catch(l){return void r(l)}c.done?t(s):Promise.resolve(s).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var i=e.apply(t,r);function c(e){n(i,a,o,c,s,"next",e)}function s(e){n(i,a,o,c,s,"throw",e)}c(void 0)}))}}r.d(t,{Z:function(){return a}})}}]);