(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(198)}])},198:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return W}});var n=r(5893),o=r(9008),s=r(5506),a=r(4343),i=r(1359),c=r(4051),l=r.n(c);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e,t,r,n,o,s,a){try{var i=e[s](a),c=i.value}catch(l){return void r(l)}i.done?t(c):Promise.resolve(c).then(n,o)}function h(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var s=e.apply(t,r);function a(e){d(s,n,o,a,i,"next",e)}function i(e){d(s,n,o,a,i,"throw",e)}a(void 0)}))}}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){f(e,t,r[t])}))}return e}function p(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(){return g.apply(this,arguments)}function g(){return g=h(l().mark((function e(){var t,r,n,o,s=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=s.length,r=new Array(t),n=0;n<t;n++)r[n]=s[n];return r[0]="https://healthchecks.io/api"+r[0],r[1]=m({},r[1],{headers:{Accept:"application/json","X-Api-Key":"UQU87W-Evubk4ncV7wzd0Ih2jqynk-uo"}}),e.next=5,fetch.apply(void 0,p(r));case 5:return o=e.sent,e.abrupt("return",o.json());case 7:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}var b=r(7294),y=r(8264),v=r(547),j=r(9210),w=r(3680),S=r(381),N=r.n(S),_=r(1758),A=r(9753),k=r(30),O=r(4345),P=r(4283);function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){E(e,t,r[t])}))}return e}function T(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var Z=function(e){e.node;var t=e.inline,r=e.className,o=e.children,s=T(e,["node","inline","className","children"]),a=(0,b.useState)(!1),i=a[0],c=a[1],l=/language-(\w+)/.exec(r||""),u=String(o).replace(/\n$/,""),d=!t&&l?(0,n.jsx)(O.Z,H({style:P.MS,language:l[1]},s,{children:u+"   "})):(0,n.jsx)("code",H({className:r},s,{children:o}));return(0,n.jsxs)("div",{className:"relative",children:[d,(0,n.jsx)("button",{className:"absolute top-2.5 right-1 p-2 bg-gray-100 rounded",onClick:function(){navigator.clipboard.writeText(u),c(!0)},children:i?(0,n.jsx)(k.Z,{className:"h-5 w-5 text-green-500"}):(0,n.jsx)(A.Z,{className:"h-5 w-5 text-black"})})]})},I=function(e){var t="Bastion"===e?"SSH_PRIV_KEY_PATH=<path_to_priv_key>; SSH_USERNAME=<username>; ssh -v -i $SSH_PRIV_KEY_PATH $SSH_USERNAME@bastion.watonomous.ca":'SSH_PRIV_KEY_PATH=<path_to_priv_key>; SSH_USERNAME=<username>; ssh -v -o ProxyCommand="ssh -W %h:%p -i $SSH_PRIV_KEY_PATH $SSH_USERNAME@bastion.watonomous.ca" -i $SSH_PRIV_KEY_PATH $SSH_USERNAME@'.concat(e,".watocluster.local");return"\n  Access ".concat(e).concat("Bastion"!==e?" by using Bastion as an [SSH jumphost](https://www.tecmint.com/access-linux-server-using-a-jump-host/)":"",":\n  ~~~shell\n  ").concat(t,"\n  ~~~\n  ")},C=function(e){var t=e.name,r=e.checksData,o=["Ceph"],i=(0,b.useState)(!1),c=i[0],l=i[1],u=function(){return l(!1)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"".concat(!o.includes(t)&&"cursor-pointer"," text-white bg-gray-800 rounded-lg p-4 flex flex-col my-6"),onClick:function(){return l(!0)},children:[(0,n.jsxs)("div",{className:"text-2xl text-gray-400 font-semibold flex items-center",children:[t,(0,n.jsx)(y.Z,{className:"h-6 w-6 text-white mx-2"})]}),(0,n.jsx)("hr",{style:{borderColor:"gray"}}),r&&r.map((function(e,t){return(0,n.jsxs)("div",{className:"flex items-center my-2",children:[(0,n.jsx)("div",{className:"rounded-full flex justify-center items-center p-1 mr-4 relative z-10 ".concat("down"===e.status?"bg-red-600":"bg-green-600"),children:"down"===e.status?(0,n.jsx)(s.Z,{className:"h-3 w-3 text-white"}):(0,n.jsx)(a.Z,{className:"h-3 w-3 text-white"})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"font-semibold",children:e.serviceName}),(0,n.jsxs)("div",{className:"flex items-center text-xs text-gray-500",children:[(0,n.jsx)("span",{children:N()(e.last_ping).diff(N()(),"days")>-100?N()(e.last_ping).fromNow():N()(e.last_ping).format("DD MMMM YYYY")}),void 0!==e.last_duration&&0!==e.last_duration&&(0,n.jsxs)("span",{className:"flex items-center ml-1",children:[(0,n.jsx)(v.Z,{className:"h-3 w-3 text-gray-500 mr-1"}),e.last_duration," sec"]})]})]})]},t)}))]}),!o.includes(t)&&(0,n.jsxs)(j.Z,{size:"xl",show:c,onHide:u,children:[(0,n.jsx)(j.Z.Header,{closeButton:!0,children:(0,n.jsx)(j.Z.Title,{children:t})}),(0,n.jsx)(j.Z.Body,{children:(0,n.jsx)(_.D,{components:{code:Z},children:I(t)})}),(0,n.jsx)(j.Z.Footer,{children:(0,n.jsx)(w.Z,{variant:"secondary",onClick:u,children:"Close"})})]})]})};function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,s=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);a=!0);}catch(c){i=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return s}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return R(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return R(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(){var e=(0,b.useState)(!1),t=e[0],r=e[1],c=function(){return r(!1)},l=(0,i.ZP)("/v2/checks/",x,{refreshInterval:3e4,refreshWhenHidden:!0}),u=l.data,d=l.error,h=["delta-ubuntu1","thor-ubuntu1","tr-ubuntu1","wato2-ubuntu1","wato3-ubuntu1","wato-bastion","ceph-health"],f="ceph-health",m={},p=0,g=0;u&&u.checks.forEach((function(e){if("True"==e.tags.split("public=")[1]){p++,"down"==e.status&&g++;var t=e.tags.split("check=")[1].split(" ")[0]==f?f:e.tags.split("host=")[1].split(" ")[0];e.serviceName=e.desc,m[t]?t==f?("up"!=e.status&&(m[t][0]=e),m[t].storedItems.push(e)):m[t].items.push(e):m[t]={items:[e],storedItems:[e]}}}));return(0,n.jsxs)("div",{children:[(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{children:"WATonomous Services"}),(0,n.jsx)("meta",{name:"description",content:"All your healtchecks at a glance"}),(0,n.jsx)("meta",{property:"og:title",content:"WATonomous Services"}),(0,n.jsx)("meta",{property:"og:image",content:"og_image.png"}),(0,n.jsx)("meta",{property:"og:description",content:"All your healtchecks at a glance"}),(0,n.jsx)("link",{rel:"icon",href:"/".concat(g?"favicon-error.ico":"favicon.ico")}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1 user-scalable=no"}),(0,n.jsx)("link",{rel:"apple-touch-icon",href:"apple-touch-icon.png"})]}),(0,n.jsxs)("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[d&&(0,n.jsxs)("div",{className:"text-center m-8",children:[(0,n.jsx)("div",{className:"bg-red-600 h-16 w-16 p-3 rounded-full flex items-center justify-center mx-auto mb-3",children:(0,n.jsx)(s.Z,{className:"w-full text-white"})}),(0,n.jsx)("h1",{className:"text-red-500 font-bold text-xl",children:"There was an error fetching the API"})]}),u&&(0,n.jsxs)("div",{className:"my-5",children:[(0,n.jsxs)("div",{className:"w-36 h-36 relative mx-auto my-1s",children:[(0,n.jsx)("div",{className:"rounded-full absolute inset-6 bg-gradient-to-b ".concat(g?"from-red-400 border-red-500":"from-green-400 border-green-500"," border-2 opacity-20 z-0 animate-ping-slow")}),(0,n.jsx)("div",{className:"rounded-full absolute inset-4 ".concat(g?"bg-red-400":"bg-green-400"," bg-opacity-10 z-10 animate-pulse")}),(0,n.jsx)("div",{className:"rounded-full absolute inset-6 inse bg-gradient-to-b ".concat(g?"from-red-500 to-red-600 border-red-500":"from-green-500 to-green-600 border-green-500"," border-4  z-20")})]}),(0,n.jsx)("h1",{className:"".concat(g?"text-red-500":"text-green-400"," font-bold text-center text-xl"),children:g?"".concat(g," ").concat(1==g?"error":"errors"):"".concat(p," ").concat(1==p?"check":"checks",", all fine \ud83d\ude0c")})]}),(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsx)("button",{className:"bg-blue-800 p-2 rounded",onClick:function(){return r(!0)},children:(0,n.jsx)("p",{className:"text-white",children:"Request Server Access"})})}),(0,n.jsxs)(j.Z,{size:"xl",show:t,onHide:c,children:[(0,n.jsx)(j.Z.Header,{closeButton:!0,children:(0,n.jsx)(j.Z.Title,{children:"WATcloud Server Access Instructions"})}),(0,n.jsx)(j.Z.Body,{children:(0,n.jsx)(_.D,{components:{code:Z},children:"\n  1. Fill out the [onboarding form](https://watonomous.github.io/infra-config/onboarding-form) to request access to the server cluster. Please make sure to provide a valid SSH public key in the form.\n  1. Have your WATcloud point-of-contact (e.g. your manager, tech lead, student design team lead, or designated infrastructure support member) approve your request and trigger the provisioning script.\n  1. After your request is approved, you should receive a [GitHub invitation](https://github.com/orgs/WATonomous/invitation) for the WATonomous organization in your email.\n  1. Accept your [GitHub invitation](https://github.com/orgs/WATonomous/invitation).\n  1. Read over the [user manual](https://github.com/WATonomous/infrastructure-support/blob/main/MANUAL.md). This is accessible after you have accepted your GitHub invitation.\n  1. SSH into our Bastion server. This is the entrypoint to our cluster:\n\n  ~~~shell\n  ssh -i <path_to_priv_key> <username>@bastion.watonomous.ca\n  ~~~\n\n  \\\n  **Tech support** \\\n  Find support resources in our [infrastructure-support repo](https://github.com/WATonomous/infrastructure-support)! Access to this repo is granted as a part of the access request approval process.\n  \n  \\\n  **Collaboration** \\\n  If you are a student design team/project lead and would like WATcloud access for you and your team. Please reach out to [infra-outreach@watonomous.ca](mailto:infra-outreach@watonomous.ca).\n  "})}),(0,n.jsx)(j.Z.Footer,{children:(0,n.jsx)(w.Z,{variant:"secondary",onClick:c,children:"Close"})})]}),(0,n.jsxs)("div",{className:"flex justify-center items-center my-2 p-3",children:[(0,n.jsx)(a.Z,{className:"rounded-full text-white h-5 w-5 bg-green-600"}),(0,n.jsx)("p",{style:{color:"white",marginRight:10,marginLeft:4},children:"No Issues"}),(0,n.jsx)(s.Z,{className:"rounded-full h-5 w-5 text-white bg-red-600"})," ",(0,n.jsx)("p",{style:{color:"white",marginRight:10,marginLeft:4},children:"Outage"})]}),u&&(0,n.jsx)("div",{className:"grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3",children:m&&Object.entries(m).sort((function(e,t){return h.indexOf(e[0])-h.indexOf(t[0])})).map((function(e,t){var r=M(e,2),o=r[0],s=r[1];return(0,n.jsx)(C,{name:o,checksData:s.items},t)}))})]})]})}}},function(e){e.O(0,[885,781,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);