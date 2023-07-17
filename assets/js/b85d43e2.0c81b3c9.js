"use strict";(self.webpackChunkrichie_education_docs=self.webpackChunkrichie_education_docs||[]).push([[26190],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(n),m=i,g=s["".concat(d,".").concat(m)]||s[m]||p[m]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[s]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],c={id:"contributing-guide",title:"Contributing guide",sidebar_label:"Contributing guide"},d=void 0,l={unversionedId:"contributing-guide",id:"version-2.3.2/contributing-guide",title:"Contributing guide",description:"This project is intended to be community-driven, so please, do not hesitate to get in touch if you have any question related to our implementation or design decisions.",source:"@site/versioned_docs/version-2.3.2/contributing.md",sourceDirName:".",slug:"/contributing-guide",permalink:"/docs/2.3.2/contributing-guide",draft:!1,tags:[],version:"2.3.2",lastUpdatedBy:"Mehdi Benadda",lastUpdatedAt:1655108611,formattedLastUpdatedAt:"Jun 13, 2022",frontMatter:{id:"contributing-guide",title:"Contributing guide",sidebar_label:"Contributing guide"},sidebar:"version-2.3.2/docs",previous:{title:"LMS connection",permalink:"/docs/2.3.2/lms-connection"},next:{title:"Accessibility testing",permalink:"/docs/2.3.2/accessibility-testing"}},u={},s=[{value:"Checking your code",id:"checking-your-code",level:2},{value:"Running tests",id:"running-tests",level:2},{value:"Running migrations",id:"running-migrations",level:2},{value:"Handling new dependencies",id:"handling-new-dependencies",level:2},{value:"Going further",id:"going-further",level:2}],p={toc:s},m="wrapper";function g(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This project is intended to be community-driven, so please, do not hesitate to get in touch if you have any question related to our implementation or design decisions."),(0,o.kt)("p",null,"We try to raise our code quality standards and expect contributors to follow the recommandations\nfrom our ",(0,o.kt)("a",{parentName:"p",href:"https://openfun.gitbooks.io/handbook/content"},"handbook"),"."),(0,o.kt)("h2",{id:"checking-your-code"},"Checking your code"),(0,o.kt)("p",null,"We use strict flake8, pylint, isort and black linters to check the validity of our backend code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ make lint-back\n")),(0,o.kt)("p",null,"We use strict eslint and prettier to check the validity of our frontend code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ make lint-front\n")),(0,o.kt)("h2",{id:"running-tests"},"Running tests"),(0,o.kt)("p",null,"On the backend, we use pytest to run our test suite:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ make test-back\n")),(0,o.kt)("p",null,"On the frontend, we use karma to run our test suite:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ make test-front\n")),(0,o.kt)("h2",{id:"running-migrations"},"Running migrations"),(0,o.kt)("p",null,"The first time you start the project with ",(0,o.kt)("inlineCode",{parentName:"p"},"make bootstrap"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"db")," container automatically\ncreates a fresh database named ",(0,o.kt)("inlineCode",{parentName:"p"},"richie")," and performs database migrations. Each time a new\n",(0,o.kt)("strong",{parentName:"p"},"database migration")," is added to the code, you can synchronize the database schema by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ make migrate\n")),(0,o.kt)("h2",{id:"handling-new-dependencies"},"Handling new dependencies"),(0,o.kt)("p",null,"Each time you add new front-end or back-end dependencies, you will need to rebuild the\napplication. We recommend to use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ make bootstrap\n")),(0,o.kt)("h2",{id:"going-further"},"Going further"),(0,o.kt)("p",null,"To see all available commands, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ make\n")),(0,o.kt)("p",null,"We also provide shortcuts for docker-compose commands as sugar scripts in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"bin/")," directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bin\n\u251c\u2500\u2500 exec\n\u251c\u2500\u2500 pylint\n\u251c\u2500\u2500 pytest\n\u2514\u2500\u2500 run\n")),(0,o.kt)("p",null,"More details and tips & tricks can be found in our ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.3.2/docker-development"},"development with Docker\ndocumentation")))}g.isMDXComponent=!0}}]);