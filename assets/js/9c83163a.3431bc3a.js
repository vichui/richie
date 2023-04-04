"use strict";(self.webpackChunkrichie_education_docs=self.webpackChunkrichie_education_docs||[]).push([[15287],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),u=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return t?i.createElement(m,r(r({ref:n},c),{},{components:t})):i.createElement(m,r({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var u=2;u<o;u++)r[u]=t[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},77113:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var i=t(83117),a=t(80102),o=(t(67294),t(3905)),r=["components"],s={id:"joanie-connection",title:"Joanie Connection",sidebar_label:"Joanie Connection"},l=void 0,u={unversionedId:"joanie-connection",id:"version-2.21.0/joanie-connection",title:"Joanie Connection",description:"Joanie delivers an API able to manage course",source:"@site/versioned_docs/version-2.21.0/joanie-connection.md",sourceDirName:".",slug:"/joanie-connection",permalink:"/docs/2.21.0/joanie-connection",draft:!1,tags:[],version:"2.21.0",lastUpdatedBy:"jbpenrath",lastUpdatedAt:1679473023,formattedLastUpdatedAt:"Mar 22, 2023",frontMatter:{id:"joanie-connection",title:"Joanie Connection",sidebar_label:"Joanie Connection"}},c={},p=[{value:"Configuring Joanie",id:"configuring-joanie",level:2},{value:"BASE_URL",id:"base_url",level:3},{value:"BACKEND",id:"backend",level:3},{value:"JS_BACKEND",id:"js_backend",level:3},{value:"COURSE_REGEX",id:"course_regex",level:3},{value:"JS_COURSE_REGEX",id:"js_course_regex",level:3},{value:"COURSE_RUN_SYNC_NO_UPDATE_FIELDS",id:"course_run_sync_no_update_fields",level:3},{value:"DEFAULT_COURSE_RUN_SYNC_MODE",id:"default_course_run_sync_mode",level:3},{value:"Access Token",id:"access-token",level:2},{value:"Lifetime configuration",id:"lifetime-configuration",level:3},{value:"Technical support",id:"technical-support",level:2}],d={toc:p};function h(e){var n=e.components,t=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/openfun/joanie"},"Joanie")," delivers an API able to manage course\nenrollment/subscription, payment and certificates delivery. Richie can be configured to display\ncourse runs and micro-credentials managed through Joanie."),(0,o.kt)("p",null,"In fact, Richie treats Joanie almost like a ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.21.0/lms-backends"},"LMS backend")," that's why settings\nare similars."),(0,o.kt)("h2",{id:"configuring-joanie"},"Configuring Joanie"),(0,o.kt)("p",null,"All settings related to Joanie have to be declared in the ",(0,o.kt)("inlineCode",{parentName:"p"},"JOANIE_BACKEND")," dictionnary\nwithin ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.py"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'JOANIE_BACKEND = {\n    "BASE_URL": values.Value(environ_name="JOANIE_BASE_URL", environ_prefix=None),\n    "BACKEND": values.Value("richie.apps.courses.lms.joanie.JoanieBackend", environ_name="JOANIE_BACKEND", environ_prefix=None),\n    "JS_BACKEND": values.Value("joanie", environ_name="JOANIE_JS_BACKEND", environ_prefix=None),\n    "COURSE_REGEX": values.Value(\n        r"^.*/api/v1.0/(?P<resource_type>(course-runs|products))/(?P<resource_id>[^/]*)/?$",\n        environ_name="JOANIE_COURSE_REGEX",\n        environ_prefix=None,\n    ),\n    "JS_COURSE_REGEX": values.Value(\n        r"^.*/api/v1.0/(course-runs|products)/([^/]*)/?$",\n        environ_name="JOANIE_JS_COURSE_REGEX",\n        environ_prefix=None,\n    ),\n    # Course runs synchronization\n    "COURSE_RUN_SYNC_NO_UPDATE_FIELDS": [],\n    "DEFAULT_COURSE_RUN_SYNC_MODE": "sync_to_public",\n}\n...\n')),(0,o.kt)("p",null,"As mentioned earlier, Joanie is treated as a LMS by Richie, so we have to bind Joanie settings with\nLMS backends settings. We achieve this by dynamically appending the ",(0,o.kt)("inlineCode",{parentName:"p"},"JOANIE_BACKEND")," setting value\ninto the ",(0,o.kt)("inlineCode",{parentName:"p"},"RICHIE_LMS_BACKENDS")," list, if Joanie is enabled. To understand this point, you can take a\nlook at the ",(0,o.kt)("inlineCode",{parentName:"p"},"post_setup")," method of the Base class configuration into ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.py"),"."),(0,o.kt)("p",null,"Here they are all settings available into ",(0,o.kt)("inlineCode",{parentName:"p"},"JOANIE_BACKEND"),":"),(0,o.kt)("h3",{id:"base_url"},"BASE_URL"),(0,o.kt)("p",null,"The base url on which the Joanie instance is hosted. This is used to construct the complete url of\nthe API endpoint on which requests are made by Richie's frontend application. ",(0,o.kt)("em",{parentName:"p"},"Richie checks if this\nsettings is set to know if Joanie should be enabled or not.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: string"),(0,o.kt)("li",{parentName:"ul"},"Required: Yes"),(0,o.kt)("li",{parentName:"ul"},"Value: for example ",(0,o.kt)("a",{parentName:"li",href:"https://joanie.example.com"},"https://joanie.example.com"))),(0,o.kt)("h3",{id:"backend"},"BACKEND"),(0,o.kt)("p",null,"The path to a Python class serving as Joanie backend. You should not need to change this setting\nuntil you want to customize the behavior of the python Joanie backend."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: string"),(0,o.kt)("li",{parentName:"ul"},"Required: No"),(0,o.kt)("li",{parentName:"ul"},"Value: By default it is ",(0,o.kt)("inlineCode",{parentName:"li"},"richie.apps.courses.lms.joanie.JoanieBackend"))),(0,o.kt)("h3",{id:"js_backend"},"JS_BACKEND"),(0,o.kt)("p",null,"The name of the ReactJS backend to use Joanie. You should not need to change this setting\nuntil you want to customize the behavior of the js Joanie backend."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: string"),(0,o.kt)("li",{parentName:"ul"},"Required: No"),(0,o.kt)("li",{parentName:"ul"},"Value: By default it is ",(0,o.kt)("inlineCode",{parentName:"li"},"joanie"),".")),(0,o.kt)("h3",{id:"course_regex"},"COURSE_REGEX"),(0,o.kt)("p",null,"A python regex that should match the ressource api urls of Joanie and return a\n",(0,o.kt)("inlineCode",{parentName:"p"},"resource_type"),' named group ("course_runs" or "products") and also a ',(0,o.kt)("inlineCode",{parentName:"p"},"resource_id"),"\nnamed group corresponding to the resource uuid."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: string"),(0,o.kt)("li",{parentName:"ul"},"Required: No"),(0,o.kt)("li",{parentName:"ul"},"Value: for example ",(0,o.kt)("inlineCode",{parentName:"li"},'r"^.*/api/v1.0/(?P<resource_type>(course-runs|products))/(?P<resource_id>[^/]*)/?$"'))),(0,o.kt)("h3",{id:"js_course_regex"},"JS_COURSE_REGEX"),(0,o.kt)("p",null,'A Javascript regex that should match the ressource api urls of Joanie and return two\nunnamed groups. The first one corresponds to the resource type ("course_runs" or "products") and\nthe second one corresponds to the resource uuid.'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: string"),(0,o.kt)("li",{parentName:"ul"},"Required: No"),(0,o.kt)("li",{parentName:"ul"},"Value: for example ",(0,o.kt)("inlineCode",{parentName:"li"},'r"^.*/api/v1.0/(course-runs|products)/([^/]*)/?$"'))),(0,o.kt)("h3",{id:"course_run_sync_no_update_fields"},"COURSE_RUN_SYNC_NO_UPDATE_FIELDS"),(0,o.kt)("p",null,"A list of fields that must only be set the first time a course run is synchronized. During this\nfirst synchronization, a new course run is created in Richie and all fields sent to the API\nendpoint via the payload are set on the object. For subsequent synchronization calls, the fields\nlisted in this setting are ignored and not synchronized. This can be used to allow modifying some\nfields manually in Richie regardless of what OpenEdX sends after an initial value is set."),(0,o.kt)("p",null,"Read documentation of ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.21.0/lms-backends#course_run_sync_no_update_fields"},"the eponym ",(0,o.kt)("inlineCode",{parentName:"a"},"LMS_BACKENDS")," settings"),",\nto discover how it can be configured."),(0,o.kt)("h3",{id:"default_course_run_sync_mode"},"DEFAULT_COURSE_RUN_SYNC_MODE"),(0,o.kt)("p",null,"Joanie resources (course runs and products) are all synchronized with Richie as a CourseRun. This\nsetting is used to set the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"sync_mode")," field when a course run is created on Richie.\nRead documentation of ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.21.0/lms-backends#default_course_run_sync_mode"},"the eponym ",(0,o.kt)("inlineCode",{parentName:"a"},"LMS_BACKENDS")," settings"),",\nto discover how it can be configured."),(0,o.kt)("h2",{id:"access-token"},"Access Token"),(0,o.kt)("h3",{id:"lifetime-configuration"},"Lifetime configuration"),(0,o.kt)("p",null,"Access Token is stored within the SessionStorage through ",(0,o.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/plugins/persistQueryClient"},"react-query client persister"),".\nBy default, richie frontend considered access token as stale after 5 minutes. You can change this\nvalue into ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openfun/richie/blob/643d7bbdb7f9a02a86360607a7b37c587e70be1a/src/frontend/js/settings.ts"},(0,o.kt)("inlineCode",{parentName:"a"},"settings.ts")),"\nby editing ",(0,o.kt)("inlineCode",{parentName:"p"},"REACT_QUERY_SETTINGS.staleTimes.session"),"."),(0,o.kt)("p",null,"To always have a valid access token, you have to configure properly its stale time according to the\nlifetime of the access token defined by your authentication server. For example, if your\nauthentication server is using ",(0,o.kt)("inlineCode",{parentName:"p"},"djangorestframework-simplejwt")," to generate the access token,\nits lifetime is 5 minutes by default."),(0,o.kt)("h2",{id:"technical-support"},"Technical support"),(0,o.kt)("p",null,"If you encounter an issue with this documentation, please\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openfun/richie/issues"},"open an issue on our repository"),"."))}h.isMDXComponent=!0}}]);