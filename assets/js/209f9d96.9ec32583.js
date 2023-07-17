"use strict";(self.webpackChunkrichie_education_docs=self.webpackChunkrichie_education_docs||[]).push([[27738],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=a,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||i;return n?o.createElement(m,r(r({ref:t},d),{},{components:n})):o.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},89471:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),r=["components"],l={id:"lms-connection",title:"Connecting Richie with an LMS",sidebar_label:"LMS connection"},c=void 0,s={unversionedId:"lms-connection",id:"version-2.7.0/lms-connection",title:"Connecting Richie with an LMS",description:"richie can be connected to one or more Learning Management Systems (LMS) like OpenEdx, Moodle",source:"@site/versioned_docs/version-2.7.0/lms-connection.md",sourceDirName:".",slug:"/lms-connection",permalink:"/docs/2.7.0/lms-connection",draft:!1,tags:[],version:"2.7.0",lastUpdatedBy:"Mehdi Benadda",lastUpdatedAt:1655108611,formattedLastUpdatedAt:"Jun 13, 2022",frontMatter:{id:"lms-connection",title:"Connecting Richie with an LMS",sidebar_label:"LMS connection"},sidebar:"version-2.7.0/docs",previous:{title:"Frontend overrides",permalink:"/docs/2.7.0/frontend-overrides"},next:{title:"Contributing guide",permalink:"/docs/2.7.0/contributing-guide"}},d={},p=[{value:"API bridge",id:"api-bridge",level:3},{value:"Connecting Richie and OpenEdx over TLS",id:"connecting-richie-and-openedx-over-tls",level:2},{value:"Purpose",id:"purpose",level:4},{value:"Run OpenEdx and Richie on the same domain",id:"run-openedx-and-richie-on-the-same-domain",level:4},{value:"Enable TLS",id:"enable-tls",level:4},{value:"1. Install mkcert and its Certificate Authority",id:"1-install-mkcert-and-its-certificate-authority",level:5},{value:"a. Install <code>mkcert</code> on your local machine",id:"a-install-mkcert-on-your-local-machine",level:6},{value:"b. Install Mkcert Certificate Authority",id:"b-install-mkcert-certificate-authority",level:6},{value:"2. On Richie",id:"2-on-richie",level:5},{value:"3. On OpenEdx",id:"3-on-openedx",level:5},{value:"4. Start Richie and OpenEdx over SSL",id:"4-start-richie-and-openedx-over-ssl",level:5}],u={toc:p},h="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)(h,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"richie")," can be connected to one or more Learning Management Systems (LMS) like OpenEdx, Moodle\nor Canvas for a seamless experience between browsing the course catalog on ",(0,i.kt)("inlineCode",{parentName:"p"},"richie")," and following\nthe course itself on the LMS."),(0,i.kt)("p",null,"In order to connect ",(0,i.kt)("inlineCode",{parentName:"p"},"richie")," with a LMS, there is an API bridge\nto synchronize course information and enrollments."),(0,i.kt)("h3",{id:"api-bridge"},"API bridge"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"APIHandler")," utility acts as a proxy that routes queries to the correct LMS backend API,\nbased on a regex match on the URL of the course."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'RICHIE_LMS_BACKENDS=[\n    {\n        "BASE_URL": "https://www.lms-example2.org",\n        "BACKEND": "richie.apps.courses.lms.edx.EdXLMSBackend",\n        "COURSE_REGEX": r"^.*/courses/(?P<course_id>.*)/course/?$",\n        "JS_BACKEND": "openedx-hawthorn",\n        "JS_COURSE_REGEX": r"^.*/course/(.*)$",\n    },\n]\n')),(0,i.kt)("p",null,"For information about how to generate an API access on your OpenEdx instance, refer to the\ndocumentation."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: ",(0,i.kt)("inlineCode",{parentName:"em"},"JS_BACKEND")," accepts ",(0,i.kt)("inlineCode",{parentName:"em"},"base"),", ",(0,i.kt)("inlineCode",{parentName:"em"},"openedx-dogwood")," and ",(0,i.kt)("inlineCode",{parentName:"em"},"openedx-hawthorn")," values."),"\n",(0,i.kt)("em",{parentName:"p"},"We have to implement several interfaces to be compatible to OpenEdx API:"),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"openedx-dogwood")," has been tested with Dogwood and Eucalyptus versions."),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"openedx-hawthorn")," has been tested with Hawthorn and Ironwood versions."),"\n",(0,i.kt)("em",{parentName:"p"},"If you encounter an issue with these API interfaces or need to have a new interface, propose a PR"),"\n",(0,i.kt)("em",{parentName:"p"},"or create an issue on our repository")),(0,i.kt)("h2",{id:"connecting-richie-and-openedx-over-tls"},"Connecting Richie and OpenEdx over TLS"),(0,i.kt)("h4",{id:"purpose"},"Purpose"),(0,i.kt)("p",null,"About the default configuration, if you check ",(0,i.kt)("inlineCode",{parentName:"p"},"RICHIE_LMS_BACKENDS")," settings in ",(0,i.kt)("inlineCode",{parentName:"p"},"env.d/development"),"\nyou will see that we use ",(0,i.kt)("inlineCode",{parentName:"p"},"base.BaseLMSBackend")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"RICHIE_LMS_BACKENDS"),".\nIn fact, this base backend uses session storage to fake enrollment to course runs."),(0,i.kt)("p",null,"Maybe are you asking why? Because, to make Create/Update/Delete requests from an external domain,\nOpenEdx requires the use of a CORS CSRF Cookie. This cookie is flagged as secure, that means we are\nnot able to use it without a SSL connection."),(0,i.kt)("p",null,"So if you need to use the OpenEdx API to Create, Update or Delete data from Richie, you have to\nenable SSL on Richie and OpenEdx on your development environment. So we need a little bit more\nconfiguration. Below, we explain how to serve OpenEdx and Richie over SSL."),(0,i.kt)("h4",{id:"run-openedx-and-richie-on-the-same-domain"},"Run OpenEdx and Richie on the same domain"),(0,i.kt)("p",null,"Richie and OpenEdx must be on the same domain to work properly (Cookie security policy blocks\nsecure cookie sharing on localhost) To do that you have to edit your hosts file\n(",(0,i.kt)("em",{parentName:"p"},".e.g")," ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," on a ","*","NIX system) to alias a domain ",(0,i.kt)("inlineCode",{parentName:"p"},"local.dev")," with\ntwo subdomains ",(0,i.kt)("inlineCode",{parentName:"p"},"richie")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"edx")," to localhost:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# /etc/hosts\n127.0.0.1 richie.local.dev\n127.0.0.1 edx.local.dev\n")),(0,i.kt)("p",null,"Once this has been done, the OpenEdx app should respond on ",(0,i.kt)("a",{parentName:"p",href:"http://edx.local.dev:8073"},"http://edx.local.dev:8073"),"\nand Richie should respond on ",(0,i.kt)("a",{parentName:"p",href:"http://richie.local.dev:8070"},"http://richie.local.dev:8070")," and should be able\nto make CORS XHR requests."),(0,i.kt)("h4",{id:"enable-tls"},"Enable TLS"),(0,i.kt)("p",null,"If you want to develop with OpenEdx as ",(0,i.kt)("inlineCode",{parentName:"p"},"RICHIE_LMS_BACKENDS")," of Richie, you need to enable TLS for your\ndevelopment servers. Both Richie and OpenEdx use Nginx as reverse proxy that ease the SSL setup."),(0,i.kt)("h5",{id:"1-install-mkcert-and-its-certificate-authority"},"1. Install mkcert and its Certificate Authority"),(0,i.kt)("p",null,"First you will need to install mkcert and its Certificate Authority.\n",(0,i.kt)("a",{parentName:"p",href:"https://mkcert.org/"},"mkcert")," is a little util to ease local certificate generation."),(0,i.kt)("h6",{id:"a-install-mkcert-on-your-local-machine"},"a. Install ",(0,i.kt)("inlineCode",{parentName:"h6"},"mkcert")," on your local machine"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/FiloSottile/mkcert"},"Read the doc")),(0,i.kt)("li",{parentName:"ul"},"Linux users who do not want to use linuxbrew : ",(0,i.kt)("a",{parentName:"li",href:"https://www.prado.lt/how-to-create-locally-trusted-ssl-certificates-in-local-development-environment-on-linux-with-mkcert"},"read this article"),".")),(0,i.kt)("h6",{id:"b-install-mkcert-certificate-authority"},"b. Install Mkcert Certificate Authority"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"mkcert -install")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you do not want to use mkcert, you can generate ",(0,i.kt)("a",{parentName:"p",href:"https://www.freecodecamp.org/news/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec/"},"CA and certificate with openssl"),".\nYou will have to put your certificate and its key in ",(0,i.kt)("inlineCode",{parentName:"p"},"docker/files/etc/nginx/ssl")," directory\nand named them ",(0,i.kt)("inlineCode",{parentName:"p"},"richie.local.dev.pem")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"richie.local.dev.key"),".")),(0,i.kt)("h5",{id:"2-on-richie"},"2. On Richie"),(0,i.kt)("p",null,"To setup SSL conf with mkcert, just run:\n",(0,i.kt)("inlineCode",{parentName:"p"},"bin/setup-ssl")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you do not want to use mkcert, read instructions above to generate Richie certificate then\nrun ",(0,i.kt)("inlineCode",{parentName:"p"},"bin/setup-ssl --no-cert")," instead.")),(0,i.kt)("h5",{id:"3-on-openedx"},"3. On OpenEdx"),(0,i.kt)("p",null,"In the same way, about OpenEdx, you also have to update the Nginx configuration to enable SSL.\nRead how to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openfun/openedx-docker#ssl"},"enable SSL on OpenEdx"),"."),(0,i.kt)("p",null,"Once this has been done, the OpenEdx app should respond on ",(0,i.kt)("a",{parentName:"p",href:"https://edx.local.dev:8073"},"https://edx.local.dev:8073"),"\nand Richie should respond on ",(0,i.kt)("a",{parentName:"p",href:"https://richie.local.dev:8070"},"https://richie.local.dev:8070")," and should be able\nto share cookies with OpenEdx to allow CORS CSRF Protected XHR requests."),(0,i.kt)("h5",{id:"4-start-richie-and-openedx-over-ssl"},"4. Start Richie and OpenEdx over SSL"),(0,i.kt)("p",null,"Now, OpenEdx app should respond on ",(0,i.kt)("a",{parentName:"p",href:"https://edx.local.dev:8073"},"https://edx.local.dev:8073"),", and Richie\non ",(0,i.kt)("a",{parentName:"p",href:"https://richie.local.dev:8070"},"https://richie.local.dev:8070")," without browser warning about the certificate validity."),(0,i.kt)("p",null,"You need to follow these steps once. If you want to use SSL later, just use ",(0,i.kt)("inlineCode",{parentName:"p"},"make run-ssl")," to run\nOpenEdx and Richie apps.\nOf course, you can still run apps without ssl by using ",(0,i.kt)("inlineCode",{parentName:"p"},"make run"),"."))}m.isMDXComponent=!0}}]);