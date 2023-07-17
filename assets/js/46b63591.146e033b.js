"use strict";(self.webpackChunkrichie_education_docs=self.webpackChunkrichie_education_docs||[]).push([[7800],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),f=i,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||r;return t?o.createElement(m,a(a({ref:n},p),{},{components:t})):o.createElement(m,a({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<r;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},71538:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var o=t(87462),i=t(63366),r=(t(67294),t(3905)),a=["components"],c={id:"joanie-connection",title:"Joanie Connection",sidebar_label:"Joanie Connection"},s="Joanie Connection",l={unversionedId:"joanie-connection",id:"version-2.15.0/joanie-connection",title:"Joanie Connection",description:"Settings",source:"@site/versioned_docs/version-2.15.0/joanie-connection.md",sourceDirName:".",slug:"/joanie-connection",permalink:"/docs/2.15.0/joanie-connection",draft:!1,tags:[],version:"2.15.0",lastUpdatedBy:"jbpenrath",lastUpdatedAt:1655971576,formattedLastUpdatedAt:"Jun 23, 2022",frontMatter:{id:"joanie-connection",title:"Joanie Connection",sidebar_label:"Joanie Connection"}},p={},u=[{value:"Settings",id:"settings",level:2},{value:"Access Token",id:"access-token",level:2},{value:"Lifetime configuration",id:"lifetime-configuration",level:3}],d={toc:u},f="wrapper";function m(e){var n=e.components,t=(0,i.Z)(e,a);return(0,r.kt)(f,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"joanie-connection"},"Joanie Connection"),(0,r.kt)("h2",{id:"settings"},"Settings"),(0,r.kt)("p",null,"All settings related to Joanie have to be declared in the ",(0,r.kt)("inlineCode",{parentName:"p"},"JOANIE")," dictionary\nwithin ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.py"),".\nTo enable Joanie, the minimal configuration requires one property:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BASE_URL")," : the endpoint at which Joanie is accessible")),(0,r.kt)("p",null,"Add to your ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.py"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'...\nJOANIE = {\n  "BASE_URL": values.Value(environ_name="JOANIE_BASE_URL", environ_prefix=None)\n}\n...\n')),(0,r.kt)("h2",{id:"access-token"},"Access Token"),(0,r.kt)("h3",{id:"lifetime-configuration"},"Lifetime configuration"),(0,r.kt)("p",null,"Access Token is stored within the SessionStorage through\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openfun/richie/blob/643d7bbdb7f9a02a86360607a7b37c587e70be1a/src/frontend/js/utils/react-query/createSessionStoragePersistor/index.ts"},"react-query client persistor"),".\nBy default, richie frontend considered access token as stale after 5 minutes. You can change this\nvalue into ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openfun/richie/blob/643d7bbdb7f9a02a86360607a7b37c587e70be1a/src/frontend/js/settings.ts"},(0,r.kt)("inlineCode",{parentName:"a"},"settings.ts")),"\nby editing ",(0,r.kt)("inlineCode",{parentName:"p"},"REACT_QUERY_SETTINGS.staleTimes.session"),"."),(0,r.kt)("p",null,"To always have a valid access token, you have to configure properly its stale time according to the\nlifetime of the access token defined by your authentication server. For example, if your\nauthentication server is using ",(0,r.kt)("inlineCode",{parentName:"p"},"djangorestframework-simplejwt")," to generate the access token,\nits lifetime is 5 minutes by default."))}m.isMDXComponent=!0}}]);