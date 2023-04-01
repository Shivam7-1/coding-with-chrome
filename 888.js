/*! For license information please see 888.js.LICENSE.txt */
"use strict";(self.webpackChunkcoding_with_chrome=self.webpackChunkcoding_with_chrome||[]).push([[888],{3707:(e,t,r)=>{var a=r(4836);t.Z=void 0;var i=a(r(4938)),n=r(5893),o=(0,i.default)((0,n.jsx)("path",{d:"m19 8-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"}),"Cached");t.Z=o},6522:(e,t,r)=>{var a=r(4836);t.Z=void 0;var i=a(r(4938)),n=r(5893),o=(0,i.default)((0,n.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.5 16.5v-9l7 4.5-7 4.5z"}),"PlayCircle");t.Z=o},8034:(e,t,r)=>{var a=r(4836);t.Z=void 0;var i=a(r(4938)),n=r(5893),o=(0,i.default)((0,n.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 14H8V8h8v8z"}),"StopCircle");t.Z=o},7888:(e,t,r)=>{r.r(t),r.d(t,{Preview:()=>ae});var a=r(5671),i=r(3144),n=r(136),o=r(2963),l=r(1120),s=r(4567),c=r(1508),d=r(3707),h=r(3366),m=r(7462),p=r(7294),u=r(6010),v=r(4780),f=r(917),g=r(8216),w=r(6122),x=r(9602),Z=r(1588),b=r(4867);function S(e){return(0,b.Z)("MuiCircularProgress",e)}(0,Z.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var k=r(5893);const y=["className","color","disableShrink","size","style","thickness","value","variant"];let C,I,P,R,L=e=>e;const E=44,M=(0,f.F4)(C||(C=L`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),A=(0,f.F4)(I||(I=L`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),N=(0,x.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,g.Z)(r.color)}`]]}})((({ownerState:e,theme:t})=>(0,m.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,f.iv)(P||(P=L`
      animation: ${0} 1.4s linear infinite;
    `),M))),z=(0,x.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),W=(0,x.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${(0,g.Z)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})((({ownerState:e,theme:t})=>(0,m.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,f.iv)(R||(R=L`
      animation: ${0} 1.4s ease-in-out infinite;
    `),A))),T=p.forwardRef((function(e,t){const r=(0,w.Z)({props:e,name:"MuiCircularProgress"}),{className:a,color:i="primary",disableShrink:n=!1,size:o=40,style:l,thickness:s=3.6,value:c=0,variant:d="indeterminate"}=r,p=(0,h.Z)(r,y),f=(0,m.Z)({},r,{color:i,disableShrink:n,size:o,thickness:s,value:c,variant:d}),x=(e=>{const{classes:t,variant:r,color:a,disableShrink:i}=e,n={root:["root",r,`color${(0,g.Z)(a)}`],svg:["svg"],circle:["circle",`circle${(0,g.Z)(r)}`,i&&"circleDisableShrink"]};return(0,v.Z)(n,S,t)})(f),Z={},b={},C={};if("determinate"===d){const e=2*Math.PI*((E-s)/2);Z.strokeDasharray=e.toFixed(3),C["aria-valuenow"]=Math.round(c),Z.strokeDashoffset=`${((100-c)/100*e).toFixed(3)}px`,b.transform="rotate(-90deg)"}return(0,k.jsx)(N,(0,m.Z)({className:(0,u.Z)(x.root,a),style:(0,m.Z)({width:o,height:o},b,l),ownerState:f,ref:t,role:"progressbar"},C,p,{children:(0,k.jsx)(z,{className:x.svg,ownerState:f,viewBox:"22 22 44 44",children:(0,k.jsx)(W,{className:x.circle,style:Z,ownerState:f,cx:E,cy:E,r:(E-s)/2,fill:"none",strokeWidth:s})})}))}));var D=r(1796);function $(e){return(0,b.Z)("MuiDivider",e)}(0,Z.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const j=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],B=(0,x.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,m.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,D.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>(0,m.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>(0,m.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,m.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),V=(0,x.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,m.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),F=p.forwardRef((function(e,t){const r=(0,w.Z)({props:e,name:"MuiDivider"}),{absolute:a=!1,children:i,className:n,component:o=(i?"div":"hr"),flexItem:l=!1,light:s=!1,orientation:c="horizontal",role:d=("hr"!==o?"separator":void 0),textAlign:p="center",variant:f="fullWidth"}=r,g=(0,h.Z)(r,j),x=(0,m.Z)({},r,{absolute:a,component:o,flexItem:l,light:s,orientation:c,role:d,textAlign:p,variant:f}),Z=(e=>{const{absolute:t,children:r,classes:a,flexItem:i,light:n,orientation:o,textAlign:l,variant:s}=e,c={root:["root",t&&"absolute",s,n&&"light","vertical"===o&&"vertical",i&&"flexItem",r&&"withChildren",r&&"vertical"===o&&"withChildrenVertical","right"===l&&"vertical"!==o&&"textAlignRight","left"===l&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,v.Z)(c,$,a)})(x);return(0,k.jsx)(B,(0,m.Z)({as:o,className:(0,u.Z)(Z.root,n),role:d,ref:t,ownerState:x},g,{children:i?(0,k.jsx)(V,{className:Z.wrapper,ownerState:x,children:i}):null}))}));var _=r(6867),K=r(8719),q=r(326),H=r(6522),J=r(5697),U=r.n(J),X=r(8034);const Y="n9tVpFtLPX6yWdRd3Ajh",Q="jok8Jcgaq9Ulgh_r6BaV",G="BHlEjZvUQjria8K8fY7c",O="Ybn8Sdm8_ZWBcRT9JGyA",ee="C14ht1xaETdlFKC9JuNZ",te="nQsUC9Be6zSqcM2MbPkX";function re(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=(0,l.Z)(e);if(t){var i=(0,l.Z)(this).constructor;r=Reflect.construct(a,arguments,i)}else r=a.apply(this,arguments);return(0,o.Z)(this,r)}}var ae=function(e){(0,n.Z)(r,e);var t=re(r);function r(e){var i;return(0,a.Z)(this,r),(i=t.call(this,e)).state={location:"",loaded:!1,loading:!1},i.windowId=e.windowId,i.toolbar=p.createRef(),i.contentWrapper=p.createRef(),i.contentIframe=p.createRef(),i.contentLoadTimer=null,i}return(0,i.Z)(r,[{key:"resize",value:function(){}},{key:"setPreviewLocation",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.contentIframe&&(t.startsWith("/preview/")||(t="/preview/"+t),t.startsWith("/")&&(t=t.substring(1)),t.length<=3&&(t=""),console.log("Change preview location",t),this.setState({location:t}),this.setState({loaded:!1}),this.setState({loading:!0}),this.contentLoadTimer=setTimeout((function(){console.warn("Timeout ..."),e.stop()}),1e4),this.contentIframe.current.src=t)}},{key:"updatePreviewLocation",value:function(){this.setPreviewLocation(this.state.location)}},{key:"handleContentIframeLoad",value:function(e){console.log("Iframe Content Loaded ..."),this.setState({loaded:!0}),this.setState({loading:!1}),this.contentLoadTimer&&clearTimeout(this.contentLoadTimer)}},{key:"handleChangeInput",value:function(e){var t;null!=e&&null!==(t=e.target)&&void 0!==t&&t.value&&this.setState({location:e.target.value})}},{key:"handleKeyPress",value:function(e){"Enter"!=e.code&&"NumpadEnter"!=e.code||this.setPreviewLocation(this.state.location)}},{key:"reload",value:function(){this.contentIframe&&(console.log("Reloading Iframe ..."),this.setState({loaded:!1}),this.setState({loading:!0}),this.contentIframe.current.contentWindow.location.reload())}},{key:"stop",value:function(){this.contentIframe&&(console.log("Stopping Iframe ..."),this.contentIframe.current.contentWindow.stop(),this.setState({loaded:!1}),this.setState({loading:!1}))}},{key:"render",value:function(){return p.createElement(p.StrictMode,null,p.createElement(c.Z,{className:Y,sx:{p:"2px 4px",display:"flex",alignItems:"center"}},p.createElement(_.Z,{color:"primary",sx:{p:"10px"},"aria-label":"menu"},p.createElement(q.Z,null)),p.createElement("span",{className:te},"/preview/"),p.createElement(K.ZP,{color:"primary",sx:{paddingTop:"3px",marginLeft:"1px",ml:1,flex:1},size:"small",placeholder:"test123",className:ee,onChange:this.handleChangeInput.bind(this),onKeyPress:this.handleKeyPress.bind(this)}),p.createElement(_.Z,{edge:"start",color:"primary","aria-label":"reload",onClick:this.reload.bind(this),sx:{p:"10px"}},p.createElement(d.Z,null)),p.createElement(F,{sx:{height:28,m:.5},orientation:"vertical"}),!this.state.loaded&&p.createElement(_.Z,{edge:"start",color:"primary","aria-label":"run",onClick:this.updatePreviewLocation.bind(this),sx:{p:"10px"}},p.createElement(H.Z,null)),this.state.loaded&&p.createElement(_.Z,{edge:"start",color:"primary","aria-label":"stop",onClick:this.stop.bind(this),sx:{p:"10px"}},p.createElement(X.Z,null))),p.createElement(c.Z,{className:Q,ref:this.contentWrapper},this.state.loading&&p.createElement(s.Z,{className:G,sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:this.state.loading},p.createElement(T,{color:"inherit"}),p.createElement("span",{className:O},"Loading ...")),p.createElement("iframe",{ref:this.contentIframe,src:"preview/",allow:"geolocation; microphone; camera; midi; encrypted-media; xr-spatial-tracking; fullscreen",allowFullScreen:!0,onLoad:this.handleContentIframeLoad.bind(this),sandbox:"allow-scripts allow-modals allow-forms allow-same-origin allow-top-navigation-by-user-activation allow-downloads"})))}}]),r}(p.PureComponent);ae.propTypes={windowId:U().string.isRequired}}}]);