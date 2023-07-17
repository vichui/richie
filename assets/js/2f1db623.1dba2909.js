"use strict";(self.webpackChunkrichie_education_docs=self.webpackChunkrichie_education_docs||[]).push([[98842],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),h=i,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||r;return t?a.createElement(m,o(o({ref:n},c),{},{components:t})):a.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},94142:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),o=["components"],l={id:"lms-backends",title:"Configuring LMS Backends",sidebar_label:"LMS Backends"},s=void 0,u={unversionedId:"lms-backends",id:"version-2.12.0/lms-backends",title:"Configuring LMS Backends",description:"Richie can be connected to one or more OpenEdX Learning Management Systems (LMS) for a seamless",source:"@site/versioned_docs/version-2.12.0/lms-backends.md",sourceDirName:".",slug:"/lms-backends",permalink:"/docs/2.12.0/lms-backends",draft:!1,tags:[],version:"2.12.0",lastUpdatedBy:"Mehdi Benadda",lastUpdatedAt:1655108611,formattedLastUpdatedAt:"Jun 13, 2022",frontMatter:{id:"lms-backends",title:"Configuring LMS Backends",sidebar_label:"LMS Backends"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuring the LMS handler",id:"configuring-the-lms-handler",level:2},{value:"BASE_URL",id:"base_url",level:3},{value:"BACKEND",id:"backend",level:3},{value:"COURSE_REGEX",id:"course_regex",level:3},{value:"JS_BACKEND",id:"js_backend",level:3},{value:"JS_COURSE_REGEX",id:"js_course_regex",level:3},{value:"DEFAULT_COURSE_RUN_SYNC_MODE",id:"default_course_run_sync_mode",level:3},{value:"COURSE_RUN_SYNC_NO_UPDATE_FIELDS",id:"course_run_sync_no_update_fields",level:3},{value:"Technical support",id:"technical-support",level:2}],d={toc:p},h="wrapper";function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)(h,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Richie can be connected to one or more OpenEdX Learning Management Systems (LMS) for a seamless\nexperience between browsing the course catalog on Richie, enrolling to a course and following the\ncourse itself on the LMS."),(0,r.kt)("p",null,"It is possible to do the same with Moodle or any other LMS exposing an enrollment API, at the\ncost of writing a custom LMS handler backend."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"This connection requires that Richie and OpenEdX be hosted on sibling domains i.e. domains that\nare both subdomains of the same root domain, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"richie.example.com")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"lms.example.com"),"."),(0,r.kt)("p",null,"OpenEdX will need to generate a CORS CSRF Cookie and this cookie is flagged as secure, which\nimplies that we are not able to use it without SSL connections."),(0,r.kt)("p",null,"As a consequence, you need to configure your OpenEdX instance as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'FEATURES = {\n    ...\n    "ENABLE_CORS_HEADERS": True,\n    "ENABLE_CROSS_DOMAIN_CSRF_COOKIE": True,\n}\n\nCORS_ALLOW_CREDENTIALS = True\nCORS_ALLOW_INSECURE = False\nCORS_ORIGIN_WHITELIST: ["richie.example.com"]  # The domain on which Richie is hosted\n\nCROSS_DOMAIN_CSRF_COOKIE_DOMAIN = ".example.com"  # The parent domain shared by Richie and OpenEdX\nCROSS_DOMAIN_CSRF_COOKIE_NAME: "edx_csrf_token"\nSESSION_COOKIE_NAME: "edx_session"\n')),(0,r.kt)("h2",{id:"configuring-the-lms-handler"},"Configuring the LMS handler"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"LMSHandler")," utility acts as a proxy that routes queries to the correct LMS backend API,\nbased on a regex match on the URL of the course. It is configured via the ",(0,r.kt)("inlineCode",{parentName:"p"},"RICHIE_LMS_BACKENDS"),"\nsetting. As an example, here is how it would be configured to connect to an Ironwood OpenEdX\ninstance hosted on ",(0,r.kt)("inlineCode",{parentName:"p"},"https://lms.example.com"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'RICHIE_LMS_BACKENDS=[\n    {\n        "BASE_URL": "https://lms.example.com",\n        # Django\n        "BACKEND": "richie.apps.courses.lms.edx.EdXLMSBackend",\n        "COURSE_REGEX": r"^https://lms\\.example\\.com/courses/(?P<course_id>.*)/course/?$",\n        # ReactJS\n        "JS_BACKEND": "openedx-hawthorn",\n        "JS_COURSE_REGEX": r"^https://lms\\.example\\.com/courses/(.*)/course/?$",\n        # Course runs synchronization\n        "COURSE_RUN_SYNC_NO_UPDATE_FIELDS": [],\n        "DEFAULT_COURSE_RUN_SYNC_MODE": "sync_to_public",\n    },\n]\n')),(0,r.kt)("p",null,"The following should help you understand how to configure this setting:"),(0,r.kt)("h3",{id:"base_url"},"BASE_URL"),(0,r.kt)("p",null,"The base url on which the OpenEdX instance is hosted. This is used to construct the complete url\nof the API endpoint on which the enrollment request is made by Richie's frontend application."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: string"),(0,r.kt)("li",{parentName:"ul"},"Required: Yes"),(0,r.kt)("li",{parentName:"ul"},"Value: for example ",(0,r.kt)("a",{parentName:"li",href:"https://lms.example.com"},"https://lms.example.com"))),(0,r.kt)("h3",{id:"backend"},"BACKEND"),(0,r.kt)("p",null,"The path to a Python class serving as LMS backend for the targeted LMS."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: string"),(0,r.kt)("li",{parentName:"ul"},"Required: Yes"),(0,r.kt)("li",{parentName:"ul"},"Value: Richie ships with the following Python backends (custom backends can be written to fit\nanother specific LMS):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"richie.apps.courses.lms.edx.EdXLMSBackend"),": backend for OpenEdX"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"richie.apps.courses.lms.base.BaseLMSBackend"),": fake backend for development purposes")))),(0,r.kt)("h3",{id:"course_regex"},"COURSE_REGEX"),(0,r.kt)("p",null,"A Python regex that should match the course syllabus urls of the targeted LMS and return a\n",(0,r.kt)("inlineCode",{parentName:"p"},"course_id")," named group on the id of the course extracted from these urls."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: string"),(0,r.kt)("li",{parentName:"ul"},"Required: Yes"),(0,r.kt)("li",{parentName:"ul"},"Value: for example ",(0,r.kt)("inlineCode",{parentName:"li"},"^.*/courses/(?P<course_id>.*)/course/?$"))),(0,r.kt)("h3",{id:"js_backend"},"JS_BACKEND"),(0,r.kt)("p",null,"The name of the ReactJS backend to use for the targeted LMS."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: string"),(0,r.kt)("li",{parentName:"ul"},"Required: Yes"),(0,r.kt)("li",{parentName:"ul"},"Value: Richie ships with the following Javascript backends (custom backends can be written to\nfit another specific LMS):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"openedx-dogwood"),": backend for OpenEdX versions equal to ",(0,r.kt)("inlineCode",{parentName:"li"},"dogwood")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"eucalyptus")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"openedx-hawthorn"),": backend for OpenEdX versions equal to ",(0,r.kt)("inlineCode",{parentName:"li"},"hawthorn")," or higher"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"openedx-fonzie"),": backend for OpenEdX via ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/openfun/fonzie"},"Fonzie"),"\n(extra user info and JWT tokens)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"base"),": fake backend for development purposes")))),(0,r.kt)("h3",{id:"js_course_regex"},"JS_COURSE_REGEX"),(0,r.kt)("p",null,"A Javascript regex that should match the course syllabus urls of the targeted LMS and return an\nunnamed group on the id of the course extracted from these urls."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: string"),(0,r.kt)("li",{parentName:"ul"},"Required: Yes"),(0,r.kt)("li",{parentName:"ul"},"Value: for example ",(0,r.kt)("inlineCode",{parentName:"li"},"^.*/courses/(.*)/course/?$"))),(0,r.kt)("h3",{id:"default_course_run_sync_mode"},"DEFAULT_COURSE_RUN_SYNC_MODE"),(0,r.kt)("p",null,"When a course run is created, this setting is used to set the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"sync_mode")," field.\nThis value defines how the course runs synchronization script will impact this course run after\ncreation."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: enum(string)"),(0,r.kt)("li",{parentName:"ul"},"Required: No"),(0,r.kt)("li",{parentName:"ul"},"Value: possible values are ",(0,r.kt)("inlineCode",{parentName:"li"},"manual"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"sync_to_draft")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"sync_to_public"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"manual"),": this course run is ignored by the course runs synchronization script"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sync_to_draft"),": only the draft version of this course run is synchronized. A manual\npublication is necessary for the update to be visible on the public site."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sync_to_public"),": the public version of this course run is updated by the synchronization\nscript. As a results, updates are directly visible on the public site without further\npublication by a staff user in Richie.")))),(0,r.kt)("h3",{id:"course_run_sync_no_update_fields"},"COURSE_RUN_SYNC_NO_UPDATE_FIELDS"),(0,r.kt)("p",null,"A list of fields that must only be set the first time a course run is synchronized. During this\nfirst synchronization, a new course run is created in Richie and all fields sent to the API\nendpoint via the payload are set on the object. For subsequent synchronization calls, the fields\nlisted in this setting are ignored and not synchronized. This can be used to allow modifying some\nfields manually in Richie regardless of what OpenEdX sends after an initial value is set."),(0,r.kt)("p",null,"Note that this setting is only effective for course runs with the ",(0,r.kt)("inlineCode",{parentName:"p"},"sync_mode")," field set to a\nvalue other then ",(0,r.kt)("inlineCode",{parentName:"p"},"manual"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: enum(string)"),(0,r.kt)("li",{parentName:"ul"},"Required: No"),(0,r.kt)("li",{parentName:"ul"},"Value: for example ",'["languages"]')),(0,r.kt)("h2",{id:"technical-support"},"Technical support"),(0,r.kt)("p",null,"If you encounter an issue with this documentation or the backends included in Richie, please\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openfun/richie/issues"},"open an issue on our repository"),"."),(0,r.kt)("p",null,"If you need a custom backend, you can ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openfun/richie/pulls"},"submit a PR")," or\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openfun/richie/issues"},"open an issue")," and we will consider adding it."))}m.isMDXComponent=!0}}]);