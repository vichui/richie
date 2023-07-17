"use strict";(self.webpackChunkrichie_education_docs=self.webpackChunkrichie_education_docs||[]).push([[43446],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(h,a(a({ref:n},u),{},{components:t})):r.createElement(h,a({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},20790:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],s={id:"course-run-synchronization-api",title:"Course run synchronization API",sidebar_label:"course run sync"},l=void 0,c={unversionedId:"api/course-run-synchronization-api",id:"version-2.15.0/api/course-run-synchronization-api",title:"Course run synchronization API",description:"API endpoint allowing remote systems to synchronize their course runs with a Richie instance.",source:"@site/versioned_docs/version-2.15.0/api/course-run-synchronization-api.md",sourceDirName:"api",slug:"/api/course-run-synchronization-api",permalink:"/docs/2.15.0/api/course-run-synchronization-api",draft:!1,tags:[],version:"2.15.0",lastUpdatedBy:"jbpenrath",lastUpdatedAt:1655971576,formattedLastUpdatedAt:"Jun 23, 2022",frontMatter:{id:"course-run-synchronization-api",title:"Course run synchronization API",sidebar_label:"course run sync"}},u={},p=[{value:"Synchronization endpoint /api/1.0/course-runs-sync",id:"synchronization-endpoint-api10course-runs-sync",level:2},{value:"Synchronize a course run POST",id:"synchronize-a-course-run-post",level:3}],d={toc:p},m="wrapper";function h(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)(m,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"API endpoint allowing remote systems to synchronize their course runs with a Richie instance."),(0,i.kt)("h2",{id:"synchronization-endpoint-api10course-runs-sync"},"Synchronization endpoint ","[/api/1.0/course-runs-sync]"),(0,i.kt)("p",null,'This documentation describes version "1.0" of this API endpoint.'),(0,i.kt)("h3",{id:"synchronize-a-course-run-post"},"Synchronize a course run ","[POST]"),(0,i.kt)("p",null,"It takes a JSON object containing the course run details:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"resource_link: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://lms.example.com/courses/course-v1:001+001+001/info")," (string, required) -\nurl of the course syllabus on the LMS from which a unique course identifier can be extracted"),(0,i.kt)("li",{parentName:"ul"},"start: ",(0,i.kt)("inlineCode",{parentName:"li"},"2018-02-01T06:00:00Z")," (string, optional) - ISO 8601 date, when this session of the\ncourse starts"),(0,i.kt)("li",{parentName:"ul"},"end: ",(0,i.kt)("inlineCode",{parentName:"li"},"2018-02-28T06:00:00Z")," (string, optional) - ISO 8601 date, when this session of the course\nends"),(0,i.kt)("li",{parentName:"ul"},"enrollment_start: ",(0,i.kt)("inlineCode",{parentName:"li"},"2018-01-01T06:00:00Z")," (string, optional) - ISO 8601 date, when enrollment\nfor this session of the course starts"),(0,i.kt)("li",{parentName:"ul"},"enrollment_end: ",(0,i.kt)("inlineCode",{parentName:"li"},"2018-01-31T06:00:00Z")," (string, optional) - ISO 8601 date, when enrollment for\nthis session of the course ends"),(0,i.kt)("li",{parentName:"ul"},"languages: ","['fr', 'en']"," (array","[string]",", required) - ISO 639-1 code (2 letters) for the course's\nlanguages")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request (application/json)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Headers"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Authorization: ",(0,i.kt)("inlineCode",{parentName:"li"},"SIG-HMAC-SHA256 xxxxxxx")," (string, required) - Authorization header\ncontaining the digest of the utf-8 encoded json representation of the submitted data\nfor the given secret key and SHA256 digest algorithm (see ","[synchronizing-course-runs]","\nfor an example)."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Body"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'  {\n      "resource_link": "https://lms.example.com/courses/course-v1:001+001+001/info",\n      "start": "2021-02-01T00:00:00Z",\n      "end": "2021-02-31T23:59:59Z",\n      "enrollment_start": "2021-01-01T00:00:00Z",\n      "enrollment_end": "2021-01-31T23:59:59Z",\n      "languages": ["en", "fr"]\n  }\n'))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response 200 (application/json)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Body"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'  {\n      "success": True\n  }\n')))))))}h.isMDXComponent=!0}}]);