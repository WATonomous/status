(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(198)}])},198:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return B}});var r=n(5893),o=n(9008),a=n(1359),s=n(4051),i=n.n(s);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t,n,r,o,a,s){try{var i=e[a](s),c=i.value}catch(u){return void n(u)}i.done?t(c):Promise.resolve(c).then(r,o)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function s(e){u(a,r,o,s,i,"next",e)}function i(e){u(a,r,o,s,i,"throw",e)}s(void 0)}))}}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}function m(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(){return p.apply(this,arguments)}function p(){return p=l(i().mark((function e(){var t,n,r,o,a=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=a.length,n=new Array(t),r=0;r<t;r++)n[r]=a[r];return n[0]="https://healthchecks.io/api"+n[0],n[1]=h({},n[1],{headers:{Accept:"application/json","X-Api-Key":"QjOgLD7b2yFA3WWjzO1ny40UM7kxk2lJ"}}),e.next=5,fetch.apply(void 0,m(n));case 5:return o=e.sent,e.abrupt("return",o.json());case 7:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}var b=n(7294),x=n(4343),g=n(5506),y=n(7018),v=n(3902),w=n(547),j=n(9210),N=n(3680),A=n(381),O=n.n(A),S=n(1758),k=n(9753),Z=n(30),T=n(4345),_=n(4283);function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){D(e,t,n[t])}))}return e}function C(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var F=function(e){e.node;var t=e.inline,n=e.className,o=e.children,a=C(e,["node","inline","className","children"]),s=(0,b.useState)(!1),i=s[0],c=s[1],u=/language-(\w+)/.exec(n||""),l=String(o).replace(/\n$/,""),d=!t&&u?(0,r.jsx)(T.Z,P({style:_.MS,language:u[1]},a,{children:l})):(0,r.jsx)("code",P({className:n},a,{children:o}));return(0,r.jsxs)("div",{className:"relative",children:[d,(0,r.jsx)("button",{className:"absolute top-2.5 right-1 p-2 bg-gray-100 rounded",onClick:function(){navigator.clipboard.writeText(l),c(!0)},children:i?(0,r.jsx)(Z.Z,{className:"h-5 w-5 text-green-500"}):(0,r.jsx)(k.Z,{className:"h-5 w-5 text-black"})})]})},H=function(e,t){var n="Bastion"===e?"ssh <username>@bastion.watonomous.ca":"ssh -i </path/to/ssh_key> -J <username>@bastion.watonomous.ca <username>@".concat(t);return"\n  Access ".concat(e).concat("Bastion"!==e?" by using Bastion as an [SSH jumphost](https://www.tecmint.com/access-linux-server-using-a-jump-host/)":"",":\n  ~~~shell\n  ").concat(n,"\n  ~~~\n  ")},W=function(e){var t=e.name,n=e.checksData,o=(e.FQDN,e.machineName),a=["Ceph"],s=(0,b.useState)(!1),i=s[0],c=s[1],u=function(){return c(!1)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"".concat(!a.includes(t)&&"cursor-pointer"," text-white bg-gray-800 rounded-lg p-4 flex flex-col my-6"),onClick:function(){return c(!0)},children:[(0,r.jsx)("h1",{className:"text-2xl text-gray-400 font-semibold mb-1 leading-tight",children:t}),(0,r.jsx)("hr",{style:{borderColor:"gray"}}),n&&n.sort((function(e,t){var n=["SSH","GPU","filesystem capacity"];return n.indexOf(e.serviceName)-n.indexOf(t.serviceName)})).map((function(e,t){return(0,r.jsxs)("div",{className:"flex items-center my-2",children:[(0,r.jsx)("div",{className:"rounded-full flex justify-center items-center p-1 mr-4 relative z-10 ".concat({up:"bg-green-600",down:"bg-red-600",paused:"bg-gray-600",grace:"bg-yellow-600"}[e.status]),children:{up:(0,r.jsx)(x.Z,{className:"h-3 w-3 text-white"}),down:(0,r.jsx)(g.Z,{className:"h-3 w-3 text-white"}),paused:(0,r.jsx)(y.Z,{className:"h-3 w-3 text-white"}),grace:(0,r.jsx)(v.Z,{className:"h-3 w-3 text-white"})}[e.status]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"font-semibold",children:e.serviceName}),(0,r.jsxs)("div",{className:"flex items-center text-xs text-gray-500",children:[(0,r.jsx)("span",{children:O()(e.last_ping).diff(O()(),"days")>-100?O()(e.last_ping).fromNow():O()(e.last_ping).format("DD MMMM YYYY")}),void 0!==e.last_duration&&0!==e.last_duration&&(0,r.jsxs)("span",{className:"flex items-center ml-1",children:[(0,r.jsx)(w.Z,{className:"h-3 w-3 text-gray-500 mr-1"}),e.last_duration," sec"]})]})]})]},t)}))]}),!a.includes(t)&&(0,r.jsxs)(j.Z,{size:"xl",show:i,onHide:u,children:[(0,r.jsx)(j.Z.Header,{closeButton:!0,children:(0,r.jsx)(j.Z.Title,{children:t})}),(0,r.jsx)(j.Z.Body,{children:(0,r.jsx)(S.D,{components:{code:F},children:H(t,o)})}),(0,r.jsx)(j.Z.Footer,{children:(0,r.jsx)(N.Z,{variant:"secondary",onClick:u,children:"Close"})})]})]})};function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],s=!0,i=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);s=!0);}catch(c){i=!0,o=c}finally{try{s||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Q(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var I={"delta-ubuntu1":{FQDN:"e7-wato-vm2.uwaterloo.ca",machineName:"delta-ubuntu1.watocluster.local"},"thor-ubuntu1":{FQDN:"e7-wato-vm1.uwaterloo.ca",machineName:"thor-ubuntu1.watocluster.local"},"tr-ubuntu1":{FQDN:"e7-wato-vm9.uwaterloo.ca",machineName:"tr-ubuntu1.watocluster.local"},"wato2-ubuntu1":{FQDN:"wato-wato2.uwaterloo.ca",machineName:"wato2-ubuntu1.watocluster.local"},"wato3-ubuntu1":{FQDN:"wato-wato3.uwaterloo.ca",machineName:"wato3-ubuntu1.watocluster.local"},"trpro-ubuntu1":{FQDN:"trpro-ubuntu1.watocluster.local",machineName:"trpro-ubuntu1.watocluster.local"},Bastion:{FQDN:"e7-wato-vm0.uwaterloo.ca"},Ceph:{FQDN:""}};function B(){var e=(0,b.useState)(!1),t=e[0],n=e[1],s=function(){return n(!1)},i=(0,a.ZP)("/v1/checks/",f,{refreshInterval:3e4,refreshWhenHidden:!0}),c=i.data,u=i.error,l={},d=0,h=0;c&&c.checks.forEach((function(e){d++,"down"==e.status&&h++;var t=e.name.split(" ")[0];e.serviceName=e.name.match(/\(.*\)/)[0].replace(/[()]/g,""),l[t]?l[t].items.push(e):l[t]={items:[e]}}));return(0,r.jsxs)("div",{children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:"WATonomous Services"}),(0,r.jsx)("meta",{name:"description",content:"All your healtchecks at a glance"}),(0,r.jsx)("meta",{property:"og:title",content:"WATonomous Services"}),(0,r.jsx)("meta",{property:"og:image",content:"og_image.png"}),(0,r.jsx)("meta",{property:"og:description",content:"All your healtchecks at a glance"}),(0,r.jsx)("link",{rel:"icon",href:"/".concat(h?"favicon-error.ico":"favicon.ico")}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1 user-scalable=no"}),(0,r.jsx)("link",{rel:"apple-touch-icon",href:"apple-touch-icon.png"})]}),(0,r.jsxs)("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[u&&(0,r.jsxs)("div",{className:"text-center m-8",children:[(0,r.jsx)("div",{className:"bg-red-600 h-16 w-16 p-3 rounded-full flex items-center justify-center mx-auto mb-3",children:(0,r.jsx)(g.Z,{className:"w-full text-white"})}),(0,r.jsx)("h1",{className:"text-red-500 font-bold text-xl",children:"There was an error fetching the API"})]}),c&&(0,r.jsxs)("div",{className:"my-5",children:[(0,r.jsxs)("div",{className:"w-36 h-36 relative mx-auto my-1s",children:[(0,r.jsx)("div",{className:"rounded-full absolute inset-6 bg-gradient-to-b ".concat(h?"from-red-400 border-red-500":"from-green-400 border-green-500"," border-2 opacity-20 z-0 animate-ping-slow")}),(0,r.jsx)("div",{className:"rounded-full absolute inset-4 ".concat(h?"bg-red-400":"bg-green-400"," bg-opacity-10 z-10 animate-pulse")}),(0,r.jsx)("div",{className:"rounded-full absolute inset-6 inse bg-gradient-to-b ".concat(h?"from-red-500 to-red-600 border-red-500":"from-green-500 to-green-600 border-green-500"," border-4  z-20")})]}),(0,r.jsx)("h1",{className:"".concat(h?"text-red-500":"text-green-400"," font-bold text-center text-xl"),children:h?"".concat(h," ").concat(1==h?"error":"errors"):"".concat(d," ").concat(1==d?"check":"checks",", all fine \ud83d\ude0c")})]}),(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,r.jsx)("button",{className:"bg-blue-800 p-2 rounded",onClick:function(){return n(!0)},children:(0,r.jsx)("p",{className:"text-white",children:"Request Server Access"})})}),(0,r.jsxs)(j.Z,{size:"xl",show:t,onHide:s,children:[(0,r.jsx)(j.Z.Header,{closeButton:!0,children:(0,r.jsx)(j.Z.Title,{children:"WATcloud Server Access Instructions"})}),(0,r.jsx)(j.Z.Body,{children:(0,r.jsx)(S.D,{components:{code:F},children:"\n  1. Fill out the [onboarding form](https://watonomous.github.io/infra-config/onboarding-form) to request access to the server cluster. Please make sure to provide a valid SSH public key in the form.\n  1. Have your WATcloud point-of-contact (e.g. your manager, tech lead, student design team lead, or designated infrastructure support member) approve your request and trigger the provisioning script.\n  1. After your request is approved, you should receive a [GitHub invitation](https://github.com/orgs/WATonomous/invitation) for the WATonomous organization in your email.\n  1. Accept your [GitHub invitation](https://github.com/orgs/WATonomous/invitation).\n  1. Read over the [user manual](https://github.com/WATonomous/infrastructure-support/blob/main/MANUAL.md). This is accessible after you have accepted your GitHub invitation.\n  1. SSH into our Bastion server. This is the entrypoint to our cluster:\n\n  ~~~shell\n  ssh -i </path/to/ssh_key> <username>@bastion.watonomous.ca\n  ~~~\n\n  \\\n  **Tech support** \\\n  Find support resources in our [infrastructure-support repo](https://github.com/WATonomous/infrastructure-support)! Access to this repo is granted as a part of the access request approval process.\n  \n  \\\n  **Collaboration** \\\n  If you are a student design team/project lead and would like WATcloud access for you and your team. Please reach out to [infra-outreach@watonomous.ca](mailto:infra-outreach@watonomous.ca).\n  "})}),(0,r.jsx)(j.Z.Footer,{children:(0,r.jsx)(N.Z,{variant:"secondary",onClick:s,children:"Close"})})]}),c&&(0,r.jsx)("div",{className:"grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3",children:l&&Object.entries(l).sort((function(e,t){var n=["delta-ubuntu1","thor-ubuntu1","tr-ubuntu1","wato2-ubuntu1","wato3-ubuntu1","Bastion","Ceph"];return n.indexOf(e[0])-n.indexOf(t[0])})).map((function(e,t){var n,o,a=E(e,2),s=a[0],i=a[1];return(0,r.jsx)(W,{name:s,checksData:i.items,FQDN:null===(n=I[s])||void 0===n?void 0:n.FQDN,machineName:null===(o=I[s])||void 0===o?void 0:o.machineName},t)}))})]})]})}}},function(e){e.O(0,[885,285,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);