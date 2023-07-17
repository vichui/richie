"use strict";(self.webpackChunkrichie_education_docs=self.webpackChunkrichie_education_docs||[]).push([[51684],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"docker-development",title:"Developing Richie with Docker",sidebar_label:"Docker development"},s=void 0,p={unversionedId:"docker-development",id:"version-2.1.0/docker-development",title:"Developing Richie with Docker",description:"Now that you have Richie up and running, you can start working with it.",source:"@site/versioned_docs/version-2.1.0/docker-development.md",sourceDirName:".",slug:"/docker-development",permalink:"/docs/2.1.0/docker-development",draft:!1,tags:[],version:"2.1.0",lastUpdatedBy:"Mehdi Benadda",lastUpdatedAt:1655108611,formattedLastUpdatedAt:"Jun 13, 2022",frontMatter:{id:"docker-development",title:"Developing Richie with Docker",sidebar_label:"Docker development"},sidebar:"version-2.1.0/docs",previous:{title:"Quick start",permalink:"/docs/2.1.0/discover"},next:{title:"Native installation",permalink:"/docs/2.1.0/native-installation"}},c={},u=[{value:"Settings",id:"settings",level:2},{value:"Front-end tools",id:"front-end-tools",level:2},{value:"Container control",id:"container-control",level:2},{value:"Debugging",id:"debugging",level:2},{value:"Using sugar scripts",id:"using-sugar-scripts",level:2},{value:"Cleanup",id:"cleanup",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"ElasticSearch service is always down",id:"elasticsearch-service-is-always-down",level:3}],d={toc:u},m="wrapper";function k(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Now that you have ",(0,a.kt)("inlineCode",{parentName:"p"},"Richie")," up and running, you can start working with it."),(0,a.kt)("h2",{id:"settings"},"Settings"),(0,a.kt)("p",null,"Settings are defined using ",(0,a.kt)("a",{parentName:"p",href:"https://django-configurations.readthedocs.io/en/stable/"},"Django\nConfigurations")," for\ndifferent environments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Development"),": settings for development on developers' local environment,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Test"),": settings used to run our test suite,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ContinousIntegration"),": settings used on the continuous integration platform,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Feature"),": settings for deployment of each developers' feature branches,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Staging"),": settings for deployment to the staging environment,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PreProduction"),": settings for deployment to the pre-production environment,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Production"),": settings for deployment to the production environment.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Development")," environment is defined as the default environment."),(0,a.kt)("h2",{id:"front-end-tools"},"Front-end tools"),(0,a.kt)("p",null,"If you intend to work on the front-end development of the CMS, we also have\nsweet candies for you! \ud83e\udd13"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Start the Sass watcher\n$ make watch-sass\n\n# In a new terminal or session, start the TypeScript watcher\n$ make watch-ts\n")),(0,a.kt)("h2",{id:"container-control"},"Container control"),(0,a.kt)("p",null,"You can stop/start/restart a container:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker-compose [stop|start|restart] [app|postgresql|mysql|elasticsearch]\n")),(0,a.kt)("p",null,"or stop/start/restart all containers in one command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker-compose [stop|start|restart]\n")),(0,a.kt)("h2",{id:"debugging"},"Debugging"),(0,a.kt)("p",null,"You can easily see the latest logs for a container:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker-compose logs [app|postgresql|mysql|elasticsearch]\n")),(0,a.kt)("p",null,"Or follow the stream of logs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker-compose logs --follow [app|postgresql|mysql|elasticsearch]\n")),(0,a.kt)("p",null,"If you need to debug a running container, you can open a Linux shell with the\n",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose exec")," command (we use a sugar script here, see next section):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ bin/exec [app|postgresql|mysql|elasticsearch] bash\n")),(0,a.kt)("p",null,"While developing on ",(0,a.kt)("inlineCode",{parentName:"p"},"Richie"),", you will also need to run a ",(0,a.kt)("inlineCode",{parentName:"p"},"Django shell")," and it\nhas to be done in the ",(0,a.kt)("inlineCode",{parentName:"p"},"app")," container (we use a sugar script here, see next\nsection):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ bin/run app python sandbox/manage.py shell\n")),(0,a.kt)("h2",{id:"using-sugar-scripts"},"Using sugar scripts"),(0,a.kt)("p",null,"While developing using Docker, you will fall into permission issues if you mount\nthe code directory as a volume in the container. Indeed, the Docker engine will,\nby default, run the containers using the ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," user. Any file created or\nupdated by the app container on your host, as a result of the volume mounts,\nwill be owned by the local root user. One way to solve this is to use the\n",(0,a.kt)("inlineCode",{parentName:"p"},'--user="$(id -u)"')," flag when calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose run")," or\n",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose exec"),' commands. By using the user flag trick, the running\ncontainer user ID will match your local user ID. But, as it\'s repetitive and\nerror-prone, we provide shortcuts that we call our "sugar scripts":'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bin/run"),": is a shortcut for ",(0,a.kt)("inlineCode",{parentName:"li"},'docker-compose run --rm --user="$(id -u)"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bin/exec"),": is a shortcut for ",(0,a.kt)("inlineCode",{parentName:"li"},'docker-compose exec --user="$(id -u)"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bin/pylint"),": runs ",(0,a.kt)("inlineCode",{parentName:"li"},"pylint")," in the ",(0,a.kt)("inlineCode",{parentName:"li"},"app")," service using the test docker-compose\nfile"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bin/pytest"),": runs ",(0,a.kt)("inlineCode",{parentName:"li"},"pytest")," in the ",(0,a.kt)("inlineCode",{parentName:"li"},"app")," service using the test docker-compose\nfile")),(0,a.kt)("h2",{id:"cleanup"},"Cleanup"),(0,a.kt)("p",null,"If you work on the Docker configuration and make repeated modifications,\nremember to periodically clean the unused docker images and containers by\nrunning:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker image prune\n$ docker container prune\n")),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("h3",{id:"elasticsearch-service-is-always-down"},"ElasticSearch service is always down"),(0,a.kt)("p",null,"If your ",(0,a.kt)("inlineCode",{parentName:"p"},"elasticsearch")," container fails at booting, checkout the logs via:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker-compose logs elasticsearch\n")),(0,a.kt)("p",null,"You may see entries similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[1]: max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]\n")),(0,a.kt)("p",null,"In this case, increase virtual memory as follows (UNIX systems):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ sudo sysctl -w vm/max_map_count=262144\n")),(0,a.kt)("p",null,"This fix will apply to your current session. To make it permanent on your system, edit the\n",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/sysctl.conf")," file and add the following line:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"vm.max_map_count=262144\n")))}k.isMDXComponent=!0}}]);