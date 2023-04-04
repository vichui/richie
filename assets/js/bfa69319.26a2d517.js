"use strict";(self.webpackChunkrichie_education_docs=self.webpackChunkrichie_education_docs||[]).push([[37222],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>h});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(o),h=n,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return o?r.createElement(m,a(a({ref:t},s),{},{components:o})):r.createElement(m,a({ref:t},s))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=o[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},51378:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var r=o(83117),n=o(80102),i=(o(67294),o(3905)),a=["components"],c={id:"cookiecutter",title:"Start your own site",sidebar_label:"Start your own site"},l=void 0,u={unversionedId:"cookiecutter",id:"version-2.21.0/cookiecutter",title:"Start your own site",description:"We use Cookiecutter to help you",source:"@site/versioned_docs/version-2.21.0/cookiecutter.md",sourceDirName:".",slug:"/cookiecutter",permalink:"/docs/2.21.0/cookiecutter",draft:!1,tags:[],version:"2.21.0",lastUpdatedBy:"jbpenrath",lastUpdatedAt:1679473023,formattedLastUpdatedAt:"Mar 22, 2023",frontMatter:{id:"cookiecutter",title:"Start your own site",sidebar_label:"Start your own site"},sidebar:"docs",previous:{title:"Discover Richie",permalink:"/docs/2.21.0/discover"},next:{title:"Search filters customization",permalink:"/docs/2.21.0/filters-customization"}},s={},p=[{value:"Run Cookiecutter",id:"run-cookiecutter",level:2},{value:"Bootstrap your project",id:"bootstrap-your-project",level:3},{value:"Theming",id:"theming",level:2},{value:"Update your Richie site factory",id:"update-your-richie-site-factory",level:2},{value:"Help us improve this project",id:"help-us-improve-this-project",level:2}],d={toc:p};function h(e){var t=e.components,o=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/audreyr/cookiecutter"},"Cookiecutter")," to help you\nset up a production-ready learning portal website based on\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openfun/richie"},"Richie")," in seconds."),(0,i.kt)("h2",{id:"run-cookiecutter"},"Run Cookiecutter"),(0,i.kt)("p",null,"There are 2 options to run Cookiecutter:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cookiecutter.readthedocs.io/en/latest/installation.html"},"install it on your machine")),(0,i.kt)("li",{parentName:"ul"},"run it with Docker")),(0,i.kt)("p",null,"While you think of it, navigate to the directory in which you want to create\nyour site factory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd /path/to/your/code/directory\n")),(0,i.kt)("p",null,"If you chose to install Cookiecutter, you can now run it against our\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openfun/richie/tree/master/cookiecutter"},"template")," as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cookiecutter gh:openfun/richie --directory cookiecutter  --checkout v2.21.0\n")),(0,i.kt)("p",null,"If you didn't want to install it on your machine, we provide a Docker image\nbuilt with our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openfun/dockerfiles"},"own repository")," that you can use as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it -u $(id -u):$(id -g) -v $PWD:/app \\\nfundocker/cookiecutter gh:openfun/richie --directory cookiecutter --checkout v2.21.0\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--directory")," option is to indicate that our Cookiecutter template is in\na ",(0,i.kt)("inlineCode",{parentName:"p"},"cookiecutter")," directory inside our git repository and not at the root."),(0,i.kt)("p",null,'You will be prompted to enter an organization name, which will determine the\nname of your repository. For example, if you choose "foo" as organization\nname, your repository will be named ',(0,i.kt)("inlineCode",{parentName:"p"},"foo-richie-site-factory"),". It's\nnice if you keep it that way so all richie site factories follow this\nconvention."),(0,i.kt)("p",null,"When you confirm the organization name, Cookiecutter will generate your\nproject from the Cookiecutter template and place it at the level where you\ncurrently are."),(0,i.kt)("h3",{id:"bootstrap-your-project"},"Bootstrap your project"),(0,i.kt)("p",null,"Enter the newly created project and add a new site to your site factory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd foo-richie-site-factory\nmake add-site\n")),(0,i.kt)("p",null,"This script also uses Cookiecutter against our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openfun/richie/tree/master/cookiecutter/%7B%7Bcookiecutter.organization%7D%7D-richie-site-factory/template"},"site template"),"."),(0,i.kt)("p",null,"Once your new site is created, activate it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bin/activate\n")),(0,i.kt)("p",null,"Now bootstrap the site to build its docker image, create its media folder,\ndatabase, etc.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make bootstrap\n")),(0,i.kt)("p",null,"Once the bootstrap phase is finished, you should be able to view the site at\n",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8070"},"localhost:8070"),"."),(0,i.kt)("p",null,"You can create a full fledge demo to test your site by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make demo-site\n")),(0,i.kt)("p",null,"Note that the README of your newly created site factory contains detailed\ninformation about how to configure and run a site."),(0,i.kt)("p",null,"Once you're happy with your site, don't forget to backup your work e.g. by\ncommitting it and pushing it to a new git repository."),(0,i.kt)("h2",{id:"theming"},"Theming"),(0,i.kt)("p",null,"You probably want to change the default theme. The cookiecutter adds an extra scss frontend folder with a couple of templates that you can use to change the default styling of the site."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sites/<site>/src/frontend/scss/extras/colors/_palette.scss")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sites/<site>/src/frontend/scss/extras/colors/_theme.scss"))),(0,i.kt)("p",null,"To change the default logo of the site, you need to create the folder ",(0,i.kt)("inlineCode",{parentName:"p"},"sites/<site>/src/backend/base/static/richie/images")," and then override the new ",(0,i.kt)("inlineCode",{parentName:"p"},"logo.png")," picture."),(0,i.kt)("p",null,"For more advanced customization, refer to our recipes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.21.0/filters-customization"},"How to customize search filters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.21.0/frontend-overrides"},"How to override frontend components in Richie"))),(0,i.kt)("h2",{id:"update-your-richie-site-factory"},"Update your Richie site factory"),(0,i.kt)("p",null,"If we later improve our scripts, you will be able to update your own site\nfactory by replaying Cookiecutter. This will override your files in the\nproject's scaffolding but, don't worry, it will respect all the sites you\nwill have created in the ",(0,i.kt)("inlineCode",{parentName:"p"},"sites")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cookiecutter --overwrite-if-exists gh:openfun/richie --directory=cookiecutter\n")),(0,i.kt)("h2",{id:"help-us-improve-this-project"},"Help us improve this project"),(0,i.kt)("p",null,"After starting your project, please submit an issue let us know how it went and\nwhat other features we should add to make it better."))}h.isMDXComponent=!0}}]);