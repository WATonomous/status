(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{9299:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return A}});var r=s(3391),n=s(5893),a=s(9008),o=s(5723),c=s(7757),i=s.n(c),l=s(6156),u=s(2137);function h(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function d(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?h(Object(s),!0).forEach((function(t){(0,l.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):h(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function m(){return x.apply(this,arguments)}function x(){return(x=(0,u.Z)(i().mark((function e(){var t,s,r,n,a=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=a.length,s=new Array(t),r=0;r<t;r++)s[r]=a[r];return s[0]="https://healthchecks.io/api"+s[0],s[1]=d(d({},s[1]),{},{headers:{Accept:"application/json","X-Api-Key":"QjOgLD7b2yFA3WWjzO1ny40UM7kxk2lJ"}}),e.next=5,fetch.apply(void 0,s);case 5:return n=e.sent,e.abrupt("return",n.json());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=s(7294),f=s(6049),b=s(3802),j=s(6689),g=s(1945),w=s(3403),v=s(381),N=s.n(v),y=function(e,t){return"Bastion"===e?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(w.Z1,{text:"ssh <username>@bastion.watonomous.ca",language:"shell",theme:w.lf,showLineNumbers:!1,codeBlock:!0})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{children:(0,n.jsx)(w.Z1,{text:"ssh -i </path/to/ssh_key> -J <username>@bastion.watonomous.ca <username>@".concat(t),language:"shell",theme:w.lf,showLineNumbers:!1,codeBlock:!0})})})},k=function(e){var t=e.name,s=e.checksData,r=(e.FQDN,e.machineName),a=["Ceph"],o=(0,p.useState)(!1),c=o[0],i=o[1],l=function(){return i(!1)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"".concat(!a.includes(t)&&"cursor-pointer"," text-white bg-gray-800 rounded-lg p-4 flex flex-col my-6"),onClick:function(){return i(!0)},children:[(0,n.jsx)("h1",{className:"text-2xl text-gray-400 font-semibold mb-1 leading-tight",children:t}),(0,n.jsx)("hr",{style:{borderColor:"gray"}}),s&&s.sort((function(e,t){var s=["SSH","GPU","filesystem capacity"];return s.indexOf(e.serviceName)-s.indexOf(t.serviceName)})).map((function(e,t){return(0,n.jsxs)("div",{className:"flex items-center my-2",children:[(0,n.jsx)("div",{className:"rounded-full flex justify-center items-center p-1 mr-4 relative z-10 ".concat({up:"bg-green-600",down:"bg-red-600",paused:"bg-gray-600",grace:"bg-yellow-600"}[e.status]),children:{up:(0,n.jsx)(f.nQG,{className:"h-3 w-3 text-white"}),down:(0,n.jsx)(f.b0D,{className:"h-3 w-3 text-white"}),paused:(0,n.jsx)(f.fpf,{className:"h-3 w-3 text-white"}),grace:(0,n.jsx)(f.$Ow,{className:"h-3 w-3 text-white"})}[e.status]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"font-semibold",children:e.serviceName}),(0,n.jsxs)("div",{className:"flex items-center text-xs text-gray-500",children:[(0,n.jsx)("span",{children:N()(e.last_ping).diff(N()(),"days")>-100?N()(e.last_ping).fromNow():N()(e.last_ping).format("DD MMMM YYYY")}),void 0!==e.last_duration&&0!==e.last_duration&&(0,n.jsxs)("span",{className:"flex items-center ml-1",children:[(0,n.jsx)(b.T39,{className:"h-3 w-3 text-gray-500 mr-1"}),e.last_duration," sec"]})]})]})]},t)}))]}),!a.includes(t)&&(0,n.jsxs)(j.Z,{size:"xl",show:c,onHide:l,children:[(0,n.jsx)(j.Z.Header,{closeButton:!0,children:(0,n.jsx)(j.Z.Title,{children:t})}),(0,n.jsxs)(j.Z.Body,{children:["Access ",t," by using Bastion as an"," ",(0,n.jsx)("a",{className:"text-blue-500",href:"https://www.tecmint.com/access-linux-server-using-a-jump-host/",children:"SSH jumphost"}),": ",(0,n.jsx)("br",{})," ",(0,n.jsx)("br",{}),y(t,r)]}),(0,n.jsx)(j.Z.Footer,{children:(0,n.jsx)(g.Z,{variant:"secondary",onClick:l,children:"Close"})})]})]})},O={"delta-ubuntu1":{FQDN:"e7-wato-vm2.uwaterloo.ca",machineName:"delta-ubuntu1.watocluster.local"},"thor-ubuntu1":{FQDN:"e7-wato-vm1.uwaterloo.ca",machineName:"thor-ubuntu1.watocluster.local"},"tr-ubuntu1":{FQDN:"e7-wato-vm9.uwaterloo.ca",machineName:"tr-ubuntu1.watocluster.local"},"wato2-ubuntu1":{FQDN:"wato-wato2.uwaterloo.ca",machineName:"wato2-ubuntu1.watocluster.local"},"wato3-ubuntu1":{FQDN:"wato-wato3.uwaterloo.ca",machineName:"wato3-ubuntu1.watocluster.local"},Bastion:{FQDN:"e7-wato-vm0.uwaterloo.ca"},Ceph:{FQDN:""}};function A(){var e=(0,p.useState)(!1),t=e[0],s=e[1],c=function(){return s(!1)},i=(0,o.ZP)("/v1/checks/",m,{refreshInterval:3e4,refreshWhenHidden:!0}),l=i.data,u=i.error,h={},d=0,x=0;return l&&l.checks.forEach((function(e){d++,"down"==e.status&&x++;var t=e.name.split(" ")[0];e.serviceName=e.name.match(/\(.*\)/)[0].replace(/[()]/g,""),h[t]?h[t].items.push(e):h[t]={items:[e]}})),(0,n.jsxs)("div",{children:[(0,n.jsxs)(a.default,{children:[(0,n.jsx)("title",{children:"WATonomous Services"}),(0,n.jsx)("meta",{name:"description",content:"All your healtchecks at a glance"}),(0,n.jsx)("meta",{property:"og:title",content:"WATonomous Services"}),(0,n.jsx)("meta",{property:"og:image",content:"og_image.png"}),(0,n.jsx)("meta",{property:"og:description",content:"All your healtchecks at a glance"}),(0,n.jsx)("link",{rel:"icon",href:"/".concat(x?"favicon-error.ico":"favicon.ico")}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1 user-scalable=no"}),(0,n.jsx)("link",{rel:"apple-touch-icon",href:"apple-touch-icon.png"})]}),(0,n.jsxs)("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[u&&(0,n.jsxs)("div",{className:"text-center m-8",children:[(0,n.jsx)("div",{className:"bg-red-600 h-16 w-16 p-3 rounded-full flex items-center justify-center mx-auto mb-3",children:(0,n.jsx)(f.b0D,{className:"w-full text-white"})}),(0,n.jsx)("h1",{className:"text-red-500 font-bold text-xl",children:"There was an error fetching the API"})]}),l&&(0,n.jsxs)("div",{className:"my-5",children:[(0,n.jsxs)("div",{className:"w-36 h-36 relative mx-auto my-1s",children:[(0,n.jsx)("div",{className:"rounded-full absolute inset-6 bg-gradient-to-b ".concat(x?"from-red-400 border-red-500":"from-green-400 border-green-500"," border-2 opacity-20 z-0 animate-ping-slow")}),(0,n.jsx)("div",{className:"rounded-full absolute inset-4 ".concat(x?"bg-red-400":"bg-green-400"," bg-opacity-10 z-10 animate-pulse")}),(0,n.jsx)("div",{className:"rounded-full absolute inset-6 inse bg-gradient-to-b ".concat(x?"from-red-500 to-red-600 border-red-500":"from-green-500 to-green-600 border-green-500"," border-4  z-20")})]}),(0,n.jsx)("h1",{className:"".concat(x?"text-red-500":"text-green-400"," font-bold text-center text-xl"),children:x?"".concat(x," ").concat(1==x?"error":"errors"):"".concat(d," ").concat(1==d?"check":"checks",", all fine \ud83d\ude0c")})]}),(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsx)("button",{className:"bg-blue-800 p-2 rounded",onClick:function(){return s(!0)},children:(0,n.jsx)("p",{className:"text-white",children:"Request Server Access"})})}),(0,n.jsxs)(j.Z,{size:"xl",show:t,onHide:c,children:[(0,n.jsx)(j.Z.Header,{closeButton:!0,children:(0,n.jsx)(j.Z.Title,{children:"Server Access Instructions"})}),(0,n.jsxs)(j.Z.Body,{children:[(0,n.jsxs)("p",{children:[(0,n.jsxs)("ol",{children:[(0,n.jsxs)("li",{children:["1. Fill out the",(0,n.jsxs)("a",{className:"text-blue-500",href:"https://forms.gle/rhT1Pe9Z43Y5Ri8P8",children:[" ","member form"," "]}),"to request access to the server cluster. Please make sure to provide a valid SSH public key in the form."]}),(0,n.jsxs)("li",{children:["2. Your user will be deployed by a WATonomous server cluster member shortly. After your request is approved, you should receive a"," ",(0,n.jsx)("a",{className:"text-blue-500",href:"https://github.com/orgs/WATonomous/invitation",children:"GitHub invitation"})," ","for the WATonomous organization in your email."]}),(0,n.jsx)("li",{children:"3. For faster approval, please email infra-outreach [at] watonomous.ca."}),(0,n.jsxs)("li",{children:["4. Accept your"," ",(0,n.jsx)("a",{className:"text-blue-500",href:"https://github.com/orgs/WATonomous/invitation",children:"GitHub invitation"}),"."]}),(0,n.jsxs)("li",{children:["5. Read over the"," ",(0,n.jsx)("a",{className:"text-blue-500",href:"https://github.com/WATonomous/infrastructure-support/blob/main/MANUAL.md",children:"user manual"}),". This is accessible if you have accepted your GitHub invitation."]}),(0,n.jsx)("li",{children:"6. SSH into our Bastion server. This is the entrypoint to our cluster:"})]}),(0,n.jsx)("br",{})]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(w.Z1,{text:"ssh -i </path/to/ssh_key> <username>@bastion.watonomous.ca",language:"shell",theme:w.lf,showLineNumbers:!1,codeBlock:!0}),(0,n.jsx)("br",{})]}),(0,n.jsx)("b",{children:"Questions?"}),(0,n.jsx)("br",{}),"Find support resources in our"," ",(0,n.jsx)("a",{className:"text-blue-500",href:"https://github.com/WATonomous/infrastructure-support",children:"infrastructure-support repo"}),"!",(0,n.jsx)("br",{}),"Access to this repo is granted as a part of the access request approval process."]}),(0,n.jsx)(j.Z.Footer,{children:(0,n.jsx)(g.Z,{variant:"secondary",onClick:c,children:"Close"})})]}),l&&(0,n.jsx)("div",{className:"grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3",children:h&&Object.entries(h).sort((function(e,t){var s=["delta-ubuntu1","thor-ubuntu1","tr-ubuntu1","wato2-ubuntu1","wato3-ubuntu1","Bastion","Ceph"];return s.indexOf(e[0])-s.indexOf(t[0])})).map((function(e,t){var s=(0,r.Z)(e,2),a=s[0],o=s[1];return(0,n.jsx)(k,{name:a,checksData:o.items,FQDN:O[a].FQDN,machineName:O[a].machineName},t)}))})]})]})}},8581:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(9299)}])}},function(e){e.O(0,[9774,4885,8694,2888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);